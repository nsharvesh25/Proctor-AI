import React, { useState, useCallback, useEffect } from 'react';
import { View, Course, Theme } from './types';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import CourseSelectionPage from './components/CourseSelectionPage';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!localStorage.getItem('isLoggedIn'));
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(() => {
    const savedCourse = localStorage.getItem('selectedCourse');
    return savedCourse ? JSON.parse(savedCourse) : null;
  });
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isLoggedIn && selectedCourse) {
      setCurrentView(View.DASHBOARD);
    } else if (isLoggedIn) {
      setCurrentView(View.COURSE_SELECTION);
    } else {
      setCurrentView(View.LANDING);
    }
  }, [isLoggedIn, selectedCourse]);

  const handleLoginSuccess = useCallback(() => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setCurrentView(View.COURSE_SELECTION);
  }, []);

  const handleCourseSelect = useCallback((course: Course) => {
    setSelectedCourse(course);
    localStorage.setItem('selectedCourse', JSON.stringify(course));
    setCurrentView(View.DASHBOARD);
  }, []);
  
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setSelectedCourse(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('selectedCourse');
    setCurrentView(View.LANDING);
  }, []);


  const renderView = () => {
    if (isLoggedIn) {
      if (selectedCourse) {
        return <Dashboard course={selectedCourse} onLogout={handleLogout} currentTheme={theme} setTheme={setTheme} />;
      }
      return <CourseSelectionPage onCourseSelect={handleCourseSelect} />;
    }
    
    switch (currentView) {
        case View.AUTH:
            return <AuthPage onLoginSuccess={handleLoginSuccess} />;
        case View.LANDING:
        default:
            return <LandingPage onGetStarted={() => setCurrentView(View.AUTH)} />;
    }
  };

  return <div className="bg-white dark:bg-proctor-dark min-h-screen font-sans text-gray-800 dark:text-gray-300">{renderView()}</div>;
};

export default App;
