import React from 'react';
import { CourseDetails } from '../../types';

interface HomePageProps {
  courseData: CourseDetails;
}

const QuickActionButton: React.FC<{ children: React.ReactNode, className: string }> = ({ children, className }) => (
    <button className={`w-full text-left p-4 rounded-lg font-semibold text-white transition-transform hover:scale-105 ${className}`}>
        {children}
    </button>
);

const HomePage: React.FC<HomePageProps> = ({ courseData }) => {
  const { name, home } = courseData;

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome, Student!</h1>
        <p className="mt-1 text-gray-400">You are preparing for {name}.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Topic Mastery Snapshot */}
        <div className="lg:col-span-2 bg-proctor-dark p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Topic Mastery Snapshot</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div>
                <p className="text-sm text-gray-400">STRONGEST TOPIC</p>
                <p className="text-lg font-medium text-white">{home.strongestTopic}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 text-right">WEAKEST TOPIC</p>
                <p className="text-lg font-medium text-yellow-400">{home.weakestTopic}</p>
              </div>
            </div>
            <div className="w-full bg-proctor-dark-3 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <a href="#" className="text-sm font-medium text-proctor-blue hover:underline">
              View Full Mastery Dashboard &rarr;
            </a>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-proctor-dark p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <QuickActionButton className="bg-blue-600 hover:bg-blue-700">Ask Proctor AI</QuickActionButton>
            <QuickActionButton className="bg-purple-600 hover:bg-purple-700">Solve a Problem</QuickActionButton>
            <QuickActionButton className="bg-green-600 hover:bg-green-700">Start a Mock Test</QuickActionButton>
          </div>
        </div>
      </div>
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
                    <p className="text-gray-400">Sessions this week</p>
                    <p className="text-3xl font-bold text-white">5/7</p>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-1 md:gap-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-base ${i < 5 ? 'bg-proctor-blue text-white' : 'bg-proctor-dark-3 text-gray-400'}`}>
                            {i < 5 ? '✓' : ''}
                        </div>
                        <span className="text-xs mt-2 text-gray-400">{day}</span>
                    </div>
                ))}
            </div>
       </div>
    </div>
  );
};

export default HomePage;
