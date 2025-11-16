import React from 'react';

const HistoryItem: React.FC<{ icon: string, title: string, time: string }> = ({ icon, title, time }) => (
    <div className="flex items-center space-x-4">
        <div className="bg-proctor-dark-3 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
            {icon}
        </div>
        <div>
            <p className="font-medium text-gray-300">{title}</p>
            <p className="text-sm text-gray-500">{time}</p>
        </div>
    </div>
);


const HistoryPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Activity History</h1>
      <div className="bg-proctor-dark p-6 rounded-lg max-w-2xl mx-auto">
        <div className="space-y-6">
            <HistoryItem icon="📝" title="Completed Mock Test #5" time="2 hours ago" />
            <HistoryItem icon="🧠" title="Generated Mind Map for 'Organic Chemistry'" time="5 hours ago" />
            <HistoryItem icon="🎤" title="Chatted with Proctor AI about Rotational Motion" time="Yesterday" />
            <History-Item icon="📄" title="Created Quiz from 'Thermodynamics.pdf'" time="Yesterday" />
            <HistoryItem icon="📈" title="Reviewed Exam Strategy" time="2 days ago" />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
