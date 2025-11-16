import React from 'react';

const StrategyItem: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-proctor-dark-3 flex items-center justify-center mr-4">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-gray-400 mt-1">{children}</p>
        </div>
    </div>
);

const ExamStrategyPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-2">AI Exam Strategy Coach</h1>
      <p className="text-gray-400 mb-6">AI that optimizes your exam-taking strategy.</p>
      
      <div className="bg-proctor-dark p-6 rounded-lg">
        <p className="text-gray-400 mb-6">
          Based on your performance patterns, our AI coach has generated a personalized strategy to maximize your score in the upcoming JEE Advanced exam.
        </p>
         <div className="mt-6 border-t border-proctor-dark-3 pt-6 space-y-6">
            <h2 className="text-xl font-semibold">Your Personalized Strategy</h2>
            <StrategyItem title="Section Priority" icon={<span className="text-2xl">🥇</span>}>
                Attempt <span className="font-bold text-proctor-blue">Physics</span> first. Your accuracy and speed are highest in this subject, securing a strong start will boost your confidence. Follow with Chemistry, and leave Mathematics for last.
            </StrategyItem>
            <StrategyItem title="Time Allocation" icon={<span className="text-2xl">⏱️</span>}>
               Allocate <span className="font-bold text-proctor-blue">65 minutes for Physics</span>, 55 minutes for Chemistry, and 60 minutes for Mathematics. You tend to slow down on complex calculus problems.
            </StrategyItem>
             <StrategyItem title="Question Selection" icon={<span className="text-2xl">🎯</span>}>
                In Mathematics, prioritize questions from <span className="font-bold text-proctor-blue">Vectors and 3D Geometry</span>. Skip lengthy integration problems initially and return to them if you have time. Your accuracy drops by 30% on questions you spend more than 4 minutes on.
            </StrategyItem>
             <StrategyItem title="Rank Projection" icon={<span className="text-2xl">📈</span>}>
                Following this strategy could potentially improve your rank by <span className="font-bold text-green-400">~1500 positions</span> based on your last 5 mock tests.
            </StrategyItem>
        </div>
      </div>
    </div>
  );
};

export default ExamStrategyPage;
