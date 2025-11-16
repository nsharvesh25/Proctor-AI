import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="bg-proctor-dark p-6 rounded-lg max-w-lg">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
                <img className="h-24 w-24 rounded-full" src="https://picsum.photos/100" alt="User" />
                <div>
                    <h2 className="text-2xl font-semibold">Student Name</h2>
                    <p className="text-gray-400">student@example.com</p>
                </div>
            </div>
            <button className="border border-proctor-dark-3 text-gray-300 hover:bg-proctor-dark-3 font-bold py-2 px-4 rounded text-sm">
                Edit Profile
            </button>
        </div>
        <div className="mt-8 border-t border-proctor-dark-3 pt-6">
            <h3 className="text-lg font-semibold mb-4">Profile Details</h3>
            <div className="space-y-4">
                <div>
                    <p className="text-sm text-gray-400">Current Goal</p>
                    <p>JEE Main/Advanced</p>
                </div>
                 <div>
                    <p className="text-sm text-gray-400">Member Since</p>
                    <p>January 2024</p>
                </div>
                <div>
                    <p className="text-sm text-gray-400">Last Active</p>
                    <p>Today</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
