import React, { useState } from 'react';

const MessagingPage: React.FC = () => {
    const [activeGroup, setActiveGroup] = useState('JEE Physics Doubts');
    
    const groups = [
        'JEE Physics Doubts',
        'Organic Chemistry Crew',
        'General Discussion'
    ];

    const messages = {
        'JEE Physics Doubts': [
            { sender: 'Anjali', text: 'Hey, can someone explain Lenz\'s Law again?', time: '10:30 AM' },
            { sender: 'You', text: 'It\'s about the direction of induced current opposing the change that caused it. Think of it as magnetic inertia.', time: '10:32 AM' },
            { sender: 'Rohan', text: 'Good explanation! I have a question on rotational mechanics if anyone is free.', time: '10:35 AM' },
        ],
        'Organic Chemistry Crew': [
             { sender: 'Meera', text: 'SN1 or SN2? How do you decide?', time: '11:00 AM' },
        ],
        'General Discussion': [
             { sender: 'Admin', text: 'Welcome to the general discussion group!', time: 'Yesterday' },
        ],
    };

  return (
    <div className="flex h-full">
        {/* Sidebar for groups */}
        <div className="w-1/3 max-w-xs bg-proctor-dark border-r border-proctor-dark-3 p-4">
            <h2 className="text-xl font-bold text-white mb-4">Groups</h2>
            <ul className="space-y-2">
                {groups.map(group => (
                    <li key={group}>
                        <button 
                            onClick={() => setActiveGroup(group)}
                            className={`w-full text-left p-2 rounded-md text-sm font-medium ${activeGroup === group ? 'bg-proctor-blue text-white' : 'text-gray-400 hover:bg-proctor-dark-3'}`}
                        >
                            # {group}
                        </button>
                    </li>
                ))}
            </ul>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-proctor-dark-3">
                <h2 className="text-lg font-semibold text-white">{activeGroup}</h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages[activeGroup].map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                         <div className={`flex items-end gap-2 max-w-md ${msg.sender === 'You' ? 'flex-row-reverse' : ''}`}>
                            <div className="w-8 h-8 rounded-full bg-proctor-dark-3 flex-shrink-0"></div>
                            <div>
                                <div className={`px-4 py-2 rounded-lg ${msg.sender === 'You' ? 'bg-proctor-blue text-white rounded-br-none' : 'bg-proctor-dark text-gray-300 rounded-bl-none'}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                                <p className={`mt-1 text-xs text-gray-500 ${msg.sender === 'You' ? 'text-right' : ''}`}>{msg.sender}, {msg.time}</p>
                            </div>
                         </div>
                    </div>
                ))}
            </div>
            <div className="p-4 bg-proctor-dark border-t border-proctor-dark-3">
                <div className="flex items-center bg-proctor-dark-3 rounded-lg p-2">
                    <input type="text" placeholder={`Message in #${activeGroup}`} className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none px-2" />
                    <button className="bg-proctor-blue text-white p-2 rounded-md hover:bg-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MessagingPage;
