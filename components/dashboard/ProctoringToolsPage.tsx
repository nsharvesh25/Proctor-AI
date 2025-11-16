import React from 'react';

const ProctoringToolsPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">Proctoring Tools</h1>
      <p className="text-gray-400 mb-6">Anti-Cheating Proctoring 3.0 to build real exam discipline.</p>
      
      <div className="bg-proctor-dark p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">AI Behavior Detection</h2>
        <p className="text-gray-400 mb-6">
          Our advanced proctoring AI goes beyond simple monitoring. During mock tests, it helps you build discipline by detecting behaviors that could be flagged in a real exam environment. It provides real-time feedback to help you maintain focus and integrity.
        </p>
        <ul className="space-y-3 list-disc list-inside text-gray-300">
            <li><span className="font-semibold">Eye Direction Tracking:</span> Ensures you stay focused on the test content.</li>
            <li><span className="font-semibold">Unusual Pause Detection:</span> Identifies long breaks that might disrupt your flow.</li>
            <li><span className="font-semibold">Screen Switching Patterns:</span> Alerts you if you navigate away from the test window.</li>
            <li><span className="font-semibold">Unexpected Sound Levels:</span> Monitors the audio environment for potential distractions.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProctoringToolsPage;
