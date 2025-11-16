import React from 'react';

const ToggleSwitch: React.FC<{ label: string; defaultChecked?: boolean }> = ({ label, defaultChecked = false }) => (
    <div className="flex items-center justify-between bg-proctor-dark-3 p-3 rounded-md">
        <span className="font-medium text-gray-300">{label}</span>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" defaultChecked={defaultChecked} />
            <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-proctor-blue peer-checked:bg-proctor-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
    </div>
);


const MockTestPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Mock Test</h1>
      <div className="bg-proctor-dark p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Start a New Mock Test</h2>
        <p className="text-gray-400 mb-6">
          Test your knowledge with a timed mock test. Get instant analytics on your performance.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105">
          Start 5-Question Mini Mock
        </button>
      </div>
      
      <div className="mt-8 bg-proctor-dark p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Examiner Mode</h2>
        <p className="text-gray-400 mb-6">
          Generate exam-style question papers that mimic the real thing. Our AI acts like the examiner, aligning with topic weightage, difficulty curves, and common distractor patterns from the last 15 years.
        </p>
        <div className="space-y-4 max-w-md">
            <ToggleSwitch label="Align with Exam Blueprint" defaultChecked />
            <ToggleSwitch label="Match Real Difficulty Curve" defaultChecked />
            <ToggleSwitch label="Use Common Distractor Patterns" />
        </div>
        <button className="mt-6 bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105">
          Generate Full Blueprint-Aligned Paper
        </button>
      </div>

    </div>
  );
};

export default MockTestPage;