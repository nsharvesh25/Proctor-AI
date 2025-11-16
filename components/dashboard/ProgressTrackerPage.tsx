import React from 'react';

const ProgressTrackerPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Progress Tracker</h1>
      <div className="space-y-8">
        {/* Learning Consistency */}
        <div className="bg-proctor-dark p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Learning Consistency</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                    <p className="text-gray-400">Current Streak</p>
                    <p className="text-3xl font-bold text-white">🔥 12 Days</p>
                </div>
                <div>
                    <p className="text-gray-400">Consistency Score</p>
                    <p className="text-3xl font-bold text-white">85%</p>
                </div>
                 <div>
                    <p className="text-gray-400">Total Hours Logged</p>
                    <p className="text-3xl font-bold text-white">48h</p>
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center space-x-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i < 5 ? 'bg-proctor-blue text-white' : 'bg-proctor-dark-3 text-gray-400'}`}>
                            {i < 5 ? '✓' : ''}
                        </div>
                        <span className="text-xs mt-2 text-gray-400">{day}</span>
                    </div>
                ))}
            </div>
       </div>
       
       {/* Topic Completion */}
        <div className="bg-proctor-dark p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Topic Completion Progress</h2>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-300">Physics</span>
                        <span className="text-sm font-medium text-gray-300">75%</span>
                    </div>
                    <div className="w-full bg-proctor-dark-3 rounded-full h-2.5">
                        <div className="bg-proctor-blue h-2.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-300">Chemistry</span>
                        <span className="text-sm font-medium text-gray-300">45%</span>
                    </div>
                    <div className="w-full bg-proctor-dark-3 rounded-full h-2.5">
                        <div className="bg-proctor-blue h-2.5 rounded-full" style={{width: '45%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-300">Mathematics</span>
                        <span className="text-sm font-medium text-gray-300">60%</span>
                    </div>
                    <div className="w-full bg-proctor-dark-3 rounded-full h-2.5">
                        <div className="bg-proctor-blue h-2.5 rounded-full" style={{width: '60%'}}></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackerPage;
