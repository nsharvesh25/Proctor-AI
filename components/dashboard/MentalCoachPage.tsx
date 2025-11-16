import React from 'react';

const MentalCoachPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">Mental Resilience Coach</h1>
      <p className="text-gray-400 mb-6">Strengthening your mindset for exam day.</p>
      
      <div className="bg-proctor-dark p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Your Exam Psychology Engine</h2>
        <p className="text-gray-400 mb-6">
          Success in exams is not just about knowledge, but also about mindset. Our AI coach tracks signals of exam stress, panic tendencies, and confidence levels to provide you with personalized mental support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-proctor-dark-3 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-white">Audio Coaching</h3>
                <p className="text-sm text-gray-400 mt-2">Short audio sessions to build focus and reduce anxiety.</p>
            </div>
             <div className="bg-proctor-dark-3 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-white">Breathing Patterns</h3>
                <p className="text-sm text-gray-400 mt-2">Guided breathing exercises to manage stress during tests.</p>
            </div>
             <div className="bg-proctor-dark-3 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-white">Anti-Panic Strategies</h3>
                <p className="text-sm text-gray-400 mt-2">Simulations and techniques to handle high-pressure situations.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MentalCoachPage;
