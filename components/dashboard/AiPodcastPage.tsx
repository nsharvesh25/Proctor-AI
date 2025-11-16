import React, { useState } from 'react';

const AiPodcastPage: React.FC = () => {
    const [text, setText] = useState("The mitochondria is the powerhouse of the cell...");
    const [isLoading, setIsLoading] = useState(false);
    const [podcastReady, setPodcastReady] = useState(false);

    const handleGenerate = () => {
        if (!text) {
            alert("Please paste some text to generate a podcast.");
            return;
        }
        setIsLoading(true);
        setPodcastReady(false);
        setTimeout(() => {
            setIsLoading(false);
            setPodcastReady(true);
        }, 3000);
    };

  return (
    <div className="p-8 text-white h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6">AI Podcast Generator</h1>
      <div className="flex-grow bg-proctor-dark p-6 rounded-lg flex flex-col">
        <p className="text-gray-400 mb-4">
          Turn your study materials into an audio podcast. Paste your text or upload a document, and let our AI create a podcast for you to listen to anytime, anywhere.
        </p>
        <div className="flex-grow flex flex-col">
            <label htmlFor="podcast-text" className="text-sm font-medium text-gray-400 mb-2">
                Paste your text here:
            </label>
            <textarea 
                id="podcast-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="The mitochondria is the powerhouse of the cell..."
                className="w-full flex-grow bg-proctor-dark-3 p-3 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue resize-none"
            />
        </div>
         <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">Or <button className="font-semibold text-proctor-blue hover:underline">upload a document</button></div>
            <button onClick={handleGenerate} disabled={isLoading} className="bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg disabled:bg-gray-400 flex items-center justify-center">
                {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                {isLoading ? 'Generating...' : 'Generate Podcast'}
            </button>
        </div>
        {podcastReady && (
            <div className="mt-6 p-4 bg-proctor-dark-3 rounded-lg">
                <h3 className="font-semibold mb-2">Your podcast is ready!</h3>
                <div className="flex items-center space-x-3">
                    <button className="text-white">▶</button>
                    <div className="w-full bg-proctor-dark rounded-full h-1.5">
                        <div className="bg-proctor-blue h-1.5 rounded-full" style={{width: '15%'}}></div>
                    </div>
                    <span className="text-xs text-gray-400">0:42 / 3:15</span>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default AiPodcastPage;