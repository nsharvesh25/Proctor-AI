import React, { useState } from 'react';
import { Theme } from '../../types';

interface SettingsPageProps {
    currentTheme: Theme;
    setTheme: (theme: Theme) => void;
}

const ToggleSwitch: React.FC<{ label: string; description: string, isChecked: boolean, onToggle: () => void }> = ({ label, description, isChecked, onToggle }) => (
    <div className="flex items-center justify-between py-4">
        <div>
            <span className="font-medium text-gray-900 dark:text-gray-300">{label}</span>
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isChecked} onChange={onToggle} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-500 rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-proctor-blue peer-checked:bg-proctor-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
    </div>
);

const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const SystemIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

const SettingsPage: React.FC<SettingsPageProps> = ({ currentTheme, setTheme }) => {
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        community: false,
    });

    const handleToggle = (key: keyof typeof notifications) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white dark:bg-proctor-dark p-6 rounded-lg max-w-2xl space-y-8">
        <div>
            <h2 className="text-xl font-semibold">Account</h2>
            <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">Email</span>
                    <span>student@example.com</span>
                </div>
                 <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400">Password</span>
                    <button className="font-medium text-proctor-blue hover:underline">Change Password</button>
                </div>
            </div>
        </div>
         <div className="border-t border-gray-200 dark:border-proctor-dark-3 pt-8">
            <h2 className="text-xl font-semibold">Theme</h2>
             <div className="mt-4">
                <div className="grid grid-cols-3 gap-4">
                    <button onClick={() => setTheme('light')} className={`p-4 rounded-lg flex flex-col items-center justify-center border-2 ${currentTheme === 'light' ? 'border-proctor-blue bg-blue-50 dark:bg-proctor-dark-3' : 'border-gray-200 dark:border-proctor-dark-3 hover:border-proctor-blue'}`}>
                        <SunIcon />
                        <span className="mt-2 text-sm">Light</span>
                    </button>
                    <button onClick={() => setTheme('dark')} className={`p-4 rounded-lg flex flex-col items-center justify-center border-2 ${currentTheme === 'dark' ? 'border-proctor-blue bg-blue-50 dark:bg-proctor-dark-3' : 'border-gray-200 dark:border-proctor-dark-3 hover:border-proctor-blue'}`}>
                        <MoonIcon />
                        <span className="mt-2 text-sm">Dark</span>
                    </button>
                    <button onClick={() => setTheme('system')} className={`p-4 rounded-lg flex flex-col items-center justify-center border-2 ${currentTheme === 'system' ? 'border-proctor-blue bg-blue-50 dark:bg-proctor-dark-3' : 'border-gray-200 dark:border-proctor-dark-3 hover:border-proctor-blue'}`}>
                        <SystemIcon />
                        <span className="mt-2 text-sm">System</span>
                    </button>
                </div>
             </div>
        </div>
        <div className="border-t border-gray-200 dark:border-proctor-dark-3 pt-8">
            <h2 className="text-xl font-semibold">Notifications</h2>
             <div className="mt-4 divide-y divide-gray-200 dark:divide-proctor-dark-3">
                <ToggleSwitch label="Email Notifications" description="Receive summaries and updates via email." isChecked={notifications.email} onToggle={() => handleToggle('email')}/>
                <ToggleSwitch label="Push Notifications" description="Get reminders for revisions and tests." isChecked={notifications.push} onToggle={() => handleToggle('push')} />
                <ToggleSwitch label="Community Alerts" description="Notify me of new messages in study groups." isChecked={notifications.community} onToggle={() => handleToggle('community')} />
             </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;