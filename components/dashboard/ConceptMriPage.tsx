import React from 'react';

const ConceptMriPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">AI Concept MRI</h1>
      <p className="text-gray-400 mb-6">Scan and detect your conceptual gaps in real-time.</p>
      
      <div className="bg-proctor-dark p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Ready for your Conceptual Health Check-up?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Just like an MRI scans the body, our AI scans your answers from mock tests and practice sessions to detect all conceptual gaps (e.g., “Impulse–momentum confusion”). It then auto-generates micro-lessons to fix them and tracks your recovery.
        </p>
        <button className="bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform hover:scale-105">
          Start New Concept Scan
        </button>
        <div className="mt-8 border-t border-proctor-dark-3 pt-6 text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Last Scan Results (from Mock Test #5)</h3>
            <div className="space-y-4">
                <div className="bg-proctor-dark-3 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-400">Identified Gap: Impulse-Momentum Confusion</h4>
                    <p className="text-sm text-gray-400 mt-1">Detected in 3 out of 5 mechanics questions. You seem to be equating impulse with final momentum instead of the change in momentum.</p>
                    <div className="mt-3">
                        <h5 className="text-xs font-bold uppercase text-gray-500 mb-2">Recommended Micro-Lessons:</h5>
                        <div className="flex gap-2">
                            <button className="text-xs bg-proctor-blue text-white px-3 py-1 rounded-full">Watch: 2-min video on Impulse</button>
                            <button className="text-xs bg-proctor-dark text-gray-300 px-3 py-1 rounded-full">Read: Key Formula Card</button>
                        </div>
                    </div>
                </div>
                 <div className="bg-proctor-dark-3 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-400">Concept Strength: Work-Energy Theorem</h4>
                    <p className="text-sm text-gray-400 mt-1">Excellent application across all relevant problems. Your understanding is solid.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptMriPage;
