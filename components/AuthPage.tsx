
import React, { useState } from 'react';
import { AuthMode } from '../types';
import { GoogleIcon } from './icons/GoogleIcon';
import { MicrosoftIcon } from './icons/MicrosoftIcon';

interface AuthPageProps {
  onLoginSuccess: () => void;
}

const AuthInput: React.FC<{ id: string; type: string; placeholder: string; icon: React.ReactNode }> = ({ id, type, placeholder, icon }) => (
    <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
        </div>
        <input
            type={type}
            id={id}
            name={id}
            className="block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
        />
    </div>
);

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState<AuthMode>(AuthMode.SIGNUP);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
            <button
              onClick={() => setMode(AuthMode.LOGIN)}
              className={`w-1/2 py-2.5 text-sm font-medium leading-5 rounded-md ${mode === AuthMode.LOGIN ? 'bg-white shadow' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              Login
            </button>
            <button
              onClick={() => setMode(AuthMode.SIGNUP)}
              className={`w-1/2 py-2.5 text-sm font-medium leading-5 rounded-md ${mode === AuthMode.SIGNUP ? 'bg-white shadow' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {mode === AuthMode.SIGNUP && (
                 <div>
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <AuthInput id="fullname" type="text" placeholder="John Doe" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
                </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <AuthInput id="email" type="email" placeholder="student@example.com" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>} />
            </div>

            <div>
              <label htmlFor="password"className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
                <AuthInput id="password" type="password" placeholder="••••••••" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>} />
            </div>

            {mode === AuthMode.LOGIN && (
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-proctor-blue focus:ring-proctor-blue" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="font-medium text-proctor-blue hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>
            )}

            {mode === AuthMode.SIGNUP && (
                <p className="text-xs text-center text-gray-500">
                    By signing up, you agree to our{' '}
                    <a href="#" className="font-medium text-proctor-blue hover:underline">Terms of Service</a> and{' '}
                    <a href="#" className="font-medium text-proctor-blue hover:underline">Privacy Policy</a>
                </p>
            )}

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-proctor-blue py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {mode === AuthMode.LOGIN ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">OR CONTINUE WITH</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a href="#" className="inline-flex w-full justify-center items-center gap-2 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                  <GoogleIcon />
                  Google
                </a>
              </div>
              <div>
                <a href="#" className="inline-flex w-full justify-center items-center gap-2 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                  <MicrosoftIcon />
                  Microsoft
                </a>
              </div>
            </div>
             {mode === AuthMode.LOGIN && (
                <p className="mt-6 text-center text-sm text-gray-500">
                   Don't have an account?{' '}
                    <button onClick={() => setMode(AuthMode.SIGNUP)} className="font-medium text-proctor-blue hover:underline">
                        Start free trial
                    </button>
                </p>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
