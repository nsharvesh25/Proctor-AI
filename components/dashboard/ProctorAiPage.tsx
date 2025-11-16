import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality, Blob as GenAIBlob } from "@google/genai";
import { ChatMessage } from '../../types';

// Base64 encoding/decoding functions for audio
function encode(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const ProctorAiPage: React.FC = () => {
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [currentOutput, setCurrentOutput] = useState('');

    const sessionPromiseRef = useRef<any>(null); // Using any because the type is complex and internal
    const audioContextRef = useRef<AudioContext | null>(null);
    const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
    const mediaStreamSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const outputAudioContextRef = useRef<AudioContext | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    
    let nextStartTime = 0;
    const sources = new Set<AudioBufferSourceNode>();

    useEffect(() => {
        // Auto-scroll to the bottom of the chat
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory, currentInput, currentOutput]);

    const startVoiceAssistant = async () => {
        if (!process.env.API_KEY) {
            alert("API_KEY environment variable not set.");
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setIsListening(true);
            setChatHistory([]); // Clear history for new session
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            
            sessionPromiseRef.current = ai.live.connect({
                model: 'gemini-2.5-flash-native-audio-preview-09-2025',
                callbacks: {
                    onopen: () => {
                        console.log('Session opened.');
                        mediaStreamSourceRef.current = audioContextRef.current!.createMediaStreamSource(stream);
                        scriptProcessorRef.current = audioContextRef.current!.createScriptProcessor(4096, 1, 1);

                        scriptProcessorRef.current.onaudioprocess = (audioProcessingEvent) => {
                            const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
                            const pcmBlob: GenAIBlob = {
                                data: encode(new Uint8Array(new Int16Array(inputData.map(x => x * 32768)).buffer)),
                                mimeType: 'audio/pcm;rate=16000',
                            };
                            sessionPromiseRef.current.then((session: any) => {
                                session.sendRealtimeInput({ media: pcmBlob });
                            });
                        };
                        mediaStreamSourceRef.current.connect(scriptProcessorRef.current);
                        scriptProcessorRef.current.connect(audioContextRef.current!.destination);
                    },
                    onmessage: async (message: LiveServerMessage) => {
                        if (message.serverContent?.inputTranscription) {
                            setCurrentInput(prev => prev + message.serverContent!.inputTranscription!.text);
                        }
                        if (message.serverContent?.outputTranscription) {
                            setCurrentOutput(prev => prev + message.serverContent!.outputTranscription!.text);
                        }
                        if (message.serverContent?.turnComplete) {
                            // Using a function form of setState to get the latest values
                            setChatHistory(prev => [...prev, { sender: 'user', text: currentInput + (message.serverContent?.inputTranscription?.text || '')}, { sender: 'ai', text: currentOutput + (message.serverContent?.outputTranscription?.text || '')}]);
                            setCurrentInput('');
                            setCurrentOutput('');
                        }

                        const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
                        if (base64Audio) {
                            setIsSpeaking(true);
                            nextStartTime = Math.max(nextStartTime, outputAudioContextRef.current!.currentTime);
                            const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContextRef.current!, 24000, 1);
                            const source = outputAudioContextRef.current!.createBufferSource();
                            source.buffer = audioBuffer;
                            source.connect(outputAudioContextRef.current!.destination);
                            source.onended = () => {
                                sources.delete(source);
                                if (sources.size === 0) {
                                  setIsSpeaking(false);
                                }
                            };
                            source.start(nextStartTime);
                            nextStartTime += audioBuffer.duration;
                            sources.add(source);
                        }
                    },
                    onerror: (e: ErrorEvent) => {
                        console.error('Session error:', e);
                        stopVoiceAssistant();
                    },
                    onclose: () => {
                        console.log('Session closed.');
                        stopVoiceAssistant();
                    }
                },
                config: {
                    responseModalities: [Modality.AUDIO],
                    speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
                    inputAudioTranscription: {},
                    outputAudioTranscription: {},
                }
            });

        } catch (error) {
            console.error('Error starting voice assistant:', error);
            alert('Could not start voice assistant. Please grant microphone permissions.');
            setIsListening(false);
        }
    };
    
    const stopVoiceAssistant = useCallback(() => {
        setIsListening(false);
        setIsSpeaking(false);
        if (sessionPromiseRef.current) {
            sessionPromiseRef.current.then((session: any) => session.close());
            sessionPromiseRef.current = null;
        }
        if (scriptProcessorRef.current) {
            scriptProcessorRef.current.disconnect();
            scriptProcessorRef.current = null;
        }
        if (mediaStreamSourceRef.current) {
            mediaStreamSourceRef.current.disconnect();
            mediaStreamSourceRef.current = null;
        }
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close();
        }
        if (outputAudioContextRef.current && outputAudioContextRef.current.state !== 'closed') {
            outputAudioContextRef.current.close();
        }
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopVoiceAssistant();
        };
    }, [stopVoiceAssistant]);
  

  return (
    <div className="p-8 h-full flex flex-col">
      <h1 className="text-3xl font-bold text-white mb-6">Proctor AI Chat</h1>
      <div className="flex-grow bg-proctor-dark rounded-lg p-4 flex flex-col justify-between">
          <div ref={chatContainerRef} className="flex-grow overflow-y-auto space-y-4 pr-2 mb-4">
            {chatHistory.length === 0 && !currentInput && (
                 <div className="text-center text-gray-400 h-full flex items-center justify-center">
                    Tap the microphone to start your conversation.
                </div>
            )}
            {chatHistory.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-proctor-blue text-white' : 'bg-proctor-dark-3 text-gray-300'}`}>
                        {msg.text}
                    </div>
                </div>
            ))}
             {currentInput && (
                <div className="flex justify-end">
                    <div className="max-w-xs lg:max-w-md p-3 rounded-lg bg-proctor-blue text-white opacity-70">
                        {currentInput}
                    </div>
                </div>
            )}
            {currentOutput && (
                <div className="flex justify-start">
                    <div className="max-w-xs lg:max-w-md p-3 rounded-lg bg-proctor-dark-3 text-gray-300 opacity-70">
                        {currentOutput}
                    </div>
                </div>
            )}
          </div>
          <div className="pt-4 border-t border-proctor-dark-3 flex flex-col items-center">
             <button
                onClick={isListening ? stopVoiceAssistant : startVoiceAssistant}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening ? 'bg-red-500 animate-pulse' : 'bg-proctor-blue hover:bg-indigo-500'
                } ${isSpeaking ? 'ring-4 ring-green-400' : ''}`}
                aria-label={isListening ? 'Stop Listening' : 'Start Listening'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            </button>
            <p className="mt-4 text-sm text-gray-400">
                {isListening ? (isSpeaking ? 'Proctor AI is speaking...' : 'Listening...') : 'Tap to speak'}
            </p>
          </div>
      </div>
    </div>
  );
};

export default ProctorAiPage;
