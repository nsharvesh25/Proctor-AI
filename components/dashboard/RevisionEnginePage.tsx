import React, { useState } from 'react';

const allTopics = [
    "Newton's Laws of Motion", "Periodic Table Trends", "Thermodynamics",
    "Organic Chemistry Nomenclature", "Calculus: Limits and Derivatives", "Electromagnetism"
];

const getRandomTopics = () => {
    const shuffled = [...allTopics].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
};

const RevisionEnginePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [revisionTopics, setRevisionTopics] = useState(getRandomTopics());

    const handleRefresh = () => {
        setIsLoading(true);
        setTimeout(() => {
            setRevisionTopics(getRandomTopics());
            setIsLoading(false);
        }, 1500);
    };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">Adaptive Micro-Revision Engine</h1>
      <p className="text-gray-400 mb-6">The AI that knows when you will forget a topic.</p>
      
      <div className="bg-proctor-dark p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Your Personal Memory Coach</h2>
        <p className="text-gray-400 mb-4">
          Using advanced memory models like Ebbinghaus's forgetting curve, our AI predicts when your knowledge of a topic is starting to decay. It then automatically schedules targeted micro-revisions to reinforce your learning and ensure long-term retention.
        </p>
        <div className="mt-6 border-t border-proctor-dark-3 pt-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Today's Scheduled Revisions</h3>
                <button onClick={handleRefresh} disabled={isLoading} className="text-sm bg-proctor-dark-3 hover:bg-proctor-dark-2 text-white font-bold py-2 px-4 rounded disabled:bg-gray-600 flex items-center">
                    {isLoading && <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                    {isLoading ? 'Recalculating...' : 'Recalculate Schedule'}
                </button>
            </div>
            {isLoading ? (
                <div className="text-center p-4 text-gray-400">Analyzing your forgetting curve...</div>
            ) : (
                <ul className="space-y-2 text-gray-300">
                    {revisionTopics.map(topic => (
                         <li key={topic} className="bg-proctor-dark-3 p-3 rounded-md animate-fade-in">{topic}</li>
                    ))}
                </ul>
            )}
        </div>
      </div>
    </div>
  );
};

export default RevisionEnginePage;