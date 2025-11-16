import React, { useState } from 'react';

const sampleImages = [
    "https://images.unsplash.com/photo-1614726353900-195e187b18a2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
];

const MediaGeneratorPage: React.FC = () => {
    const [prompt, setPrompt] = useState("An animated diagram showing the forces acting on a satellite in orbit around the Earth.");
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(sampleImages[0]);

    const handleGenerate = () => {
        if (!prompt) {
            alert("Please enter a prompt.");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * sampleImages.length);
            setImageUrl(sampleImages[randomIndex]);
            setIsLoading(false);
        }, 2000);
    };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Image & Video Generator</h1>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-proctor-dark p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Generate Media</h2>
                <p className="text-gray-400 mb-4">
                    Visualize complex topics by generating custom images, diagrams, and short videos. Describe what you need, and our AI will bring it to life.
                </p>
                 <div>
                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-400 mb-2">Enter your prompt:</label>
                    <textarea 
                        id="prompt"
                        rows={4}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full bg-proctor-dark-3 p-2 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue"
                    />
                </div>
                 <button onClick={handleGenerate} disabled={isLoading} className="mt-4 w-full bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 flex items-center justify-center">
                    {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                    {isLoading ? 'Generating...' : 'Generate'}
                </button>
            </div>
            <div className="bg-proctor-dark p-6 rounded-lg flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold mb-4">Generated Image</h2>
                <div className="w-full aspect-video bg-proctor-dark-3 rounded-md flex items-center justify-center">
                    {isLoading ? (
                        <div className="text-gray-400">Generating your image...</div>
                    ) : (
                       <img src={imageUrl} alt="AI generated" className="w-full h-full object-cover rounded-md" />
                    )}
                </div>
                <p className="text-xs text-gray-500 mt-2">Sample generated image. Video generation will also be available.</p>
            </div>
       </div>
    </div>
  );
};

export default MediaGeneratorPage;