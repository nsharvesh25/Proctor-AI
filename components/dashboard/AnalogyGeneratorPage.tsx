import React, { useState } from 'react';

const analogies = [
    "Think of Quantum Entanglement like having a pair of 'magic coins.' You give one to a friend and travel to the other side of the world. The instant you look at your coin and see it's 'heads,' you instantly know your friend's coin is 'tails,' no matter how far apart you are.",
    "Think of a blockchain like a public digital receipt book. Every transaction is a new line on the receipt, and everyone gets a copy. To change a past line, you'd have to get everyone to agree to change their copy, which is nearly impossible.",
    "Think of DNA transcription like a librarian photocopying a single recipe from a giant, fragile cookbook that can't leave the library. The photocopy (mRNA) can then be taken to the kitchen (ribosome) to be read and used.",
];

const AnalogyGeneratorPage: React.FC = () => {
    const [topic, setTopic] = useState("Quantum Entanglement");
    const [isLoading, setIsLoading] = useState(false);
    const [analogy, setAnalogy] = useState(analogies[0]);

    const handleGenerate = () => {
        if (!topic) {
            alert("Please enter a topic.");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * analogies.length);
            setAnalogy(analogies[randomIndex]);
            setIsLoading(false);
        }, 1500);
    };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Analogy & Simplification Generator</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-proctor-dark p-6 rounded-lg">
            <p className="text-gray-400 mb-4">
                Struggling with a complex concept? Enter the topic, and our AI will generate analogies, simplifications, and practice questions to deepen your understanding.
            </p>
            <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-400 mb-2">Enter a complex topic:</label>
                <input 
                    type="text"
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-proctor-dark-3 p-2 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue"
                />
            </div>
            <button onClick={handleGenerate} disabled={isLoading} className="mt-4 w-full bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 flex items-center justify-center">
                 {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                {isLoading ? 'Generating...' : 'Generate Analogy'}
            </button>
        </div>

        <div className="mt-8 bg-proctor-dark p-6 rounded-lg min-h-[150px]">
            <h2 className="text-xl font-semibold mb-4">AI Generated Analogy</h2>
            <div className="bg-proctor-dark-3 p-4 rounded-md">
                {isLoading ? (
                    <p className="text-gray-400">Generating a new analogy for "{topic}"...</p>
                ) : (
                    <p className="text-gray-300">{analogy}</p>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AnalogyGeneratorPage;