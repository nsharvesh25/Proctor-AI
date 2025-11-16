import React from 'react';

const StatCard: React.FC<{ title: string; value: string; change: string; changeType: 'increase' | 'decrease' }> = ({ title, value, change, changeType }) => (
    <div className="bg-proctor-dark-3 p-4 rounded-lg">
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>
        <p className={`text-sm mt-1 flex items-center ${changeType === 'increase' ? 'text-green-400' : 'text-red-400'}`}>
            {changeType === 'increase' ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg> :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            }
            {change} vs last test
        </p>
    </div>
);


const PerformancePage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Test Performance</h1>
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Overall Score" value="78%" change="+5%" changeType="increase" />
            <StatCard title="Accuracy" value="85%" change="-2%" changeType="decrease" />
            <StatCard title="Time Management" value="92%" change="+8%" changeType="increase" />
        </div>

        {/* Performance Chart */}
        <div className="bg-proctor-dark p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Score Progression</h2>
            <div className="h-64 bg-proctor-dark-3 rounded-md flex items-end justify-around p-4 space-x-4">
                {/* Mock chart bars */}
                <div className="w-full bg-proctor-blue rounded-t-md hover:bg-indigo-500 transition-colors" style={{ height: '60%' }}></div>
                <div className="w-full bg-proctor-blue rounded-t-md hover:bg-indigo-500 transition-colors" style={{ height: '70%' }}></div>
                <div className="w-full bg-proctor-blue rounded-t-md hover:bg-indigo-500 transition-colors" style={{ height: '65%' }}></div>
                <div className="w-full bg-proctor-blue rounded-t-md hover:bg-indigo-500 transition-colors" style={{ height: '80%' }}></div>
                <div className="w-full bg-proctor-blue rounded-t-md hover:bg-indigo-500 transition-colors" style={{ height: '78%' }}></div>
            </div>
            <div className="flex justify-around text-xs text-gray-400 mt-2 px-4">
                <span>Test 1</span>
                <span>Test 2</span>
                <span>Test 3</span>
                <span>Test 4</span>
                <span>Test 5</span>
            </div>
        </div>

        {/* Topic-wise Breakdown */}
        <div className="bg-proctor-dark p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Topic-wise Performance</h2>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-300">Mechanics</span>
                        <span className="text-sm font-medium text-green-400">92%</span>
                    </div>
                    <div className="w-full bg-proctor-dark-3 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{width: '92%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-300">Optics</span>
                        <span className="text-sm font-medium text-yellow-400">75%</span>
                    </div>
                    <div className="w-full bg-proctor-dark-3 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-300">Thermodynamics</span>
                        <span className="text-sm font-medium text-red-400">58%</span>
                    </div>
                    <div className="w-full bg-proctor-dark-3 rounded-full h-2.5">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{width: '58%'}}></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;
