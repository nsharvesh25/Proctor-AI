import React, { useState } from 'react';

interface HeaderProps {
  onLogout: () => void;
  setSidebarOpen: (open: boolean) => void;
}

const GlobeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ onLogout, setSidebarOpen }) => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [language, setLanguage] = useState('English');
    const [parentMode, setParentMode] = useState(false);

  return (
    <header className="flex-shrink-0 bg-white dark:bg-proctor-dark border-b border-gray-200 dark:border-proctor-dark-3">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          aria-label="Open sidebar"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-1"></div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center p-1 rounded-full bg-gray-200 dark:bg-proctor-dark-2">
            <button onClick={() => setParentMode(false)} className={`px-3 py-1 text-sm rounded-full ${!parentMode ? 'bg-proctor-blue text-white' : 'text-gray-500 dark:text-gray-400'}`}>Student</button>
            <button onClick={() => setParentMode(true)} className={`px-3 py-1 text-sm rounded-full ${parentMode ? 'bg-proctor-blue text-white' : 'text-gray-500 dark:text-gray-400'}`}>Parent</button>
          </div>
          
          <div className="relative">
            <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-proctor-dark-3 hover:text-gray-900 dark:hover:text-white">
                <GlobeIcon />
            </button>
            {langMenuOpen && (
                 <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-proctor-dark-2 rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                    <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('English'); setLangMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-proctor-dark-3">English</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('Tamil'); setLangMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-proctor-dark-3">Tamil</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('Hindi'); setLangMenuOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-proctor-dark-3">Hindi</a>
                 </div>
            )}
          </div>

          <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-proctor-dark-3 hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>

          <div className="relative">
            <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Student</span>
                <img className="h-8 w-8 rounded-full" src="https://picsum.photos/100" alt="User" />
            </button>
            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-proctor-dark-2 rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-proctor-dark-3">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-proctor-dark-3">Settings</a>
                <a href="#" onClick={onLogout} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-proctor-dark-3">Sign out</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;