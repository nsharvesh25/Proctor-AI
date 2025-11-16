import React, { useState } from 'react';
import { Course, DashboardView, Theme } from '../types';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from './dashboard/HomePage';
import ProctorAiPage from './dashboard/ProctorAiPage';
import MockTestPage from './dashboard/MockTestPage';
import ProfilePage from './dashboard/ProfilePage';
import SettingsPage from './dashboard/SettingsPage';
import MessagingPage from './dashboard/MessagingPage';
import HelpCenterPage from './dashboard/HelpCenterPage';
import ContactUsPage from './dashboard/ContactUsPage';
import NewspaperPage from './dashboard/NewspaperPage';
import ProgressTrackerPage from './dashboard/ProgressTrackerPage';
import HistoryPage from './dashboard/HistoryPage';
import PdfToQuizPage from './dashboard/PdfToQuizPage';
import AiPodcastPage from './dashboard/AiPodcastPage';
import AnalogyGeneratorPage from './dashboard/AnalogyGeneratorPage';
import MediaGeneratorPage from './dashboard/MediaGeneratorPage';
import MindMapsPage from './dashboard/MindMapsPage';
import RoadMapsPage from './dashboard/RoadMapsPage';
import SyllabusPage from './dashboard/SyllabusPage';
import PyqKnowledgeBasePage from './dashboard/PyqKnowledgeBasePage';
import MasteryDashboardPage from './dashboard/MasteryDashboardPage';
import PerformancePage from './dashboard/PerformancePage';
import ProblemSolverPage from './dashboard/ProblemSolverPage';
import InteractiveDiagramsPage from './dashboard/InteractiveDiagramsPage';
import ExamStrategyPage from './dashboard/ExamStrategyPage';
import SmartBooksPage from './dashboard/SmartBooksPage';
import ConceptMriPage from './dashboard/ConceptMriPage';
import RevisionEnginePage from './dashboard/RevisionEnginePage';
import MentalCoachPage from './dashboard/MentalCoachPage';
import ProctoringToolsPage from './dashboard/ProctoringToolsPage';
import { courseData } from '../data/courseData';


interface DashboardProps {
  course: Course;
  onLogout: () => void;
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ course, onLogout, currentTheme, setTheme }) => {
  const [currentView, setCurrentView] = useState<DashboardView>(DashboardView.HOME);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentCourseData = courseData[course.id as keyof typeof courseData] || courseData['jee'];

  const renderContent = () => {
    switch (currentView) {
      case DashboardView.HOME:
        return <HomePage courseData={currentCourseData} />;
      case DashboardView.MASTERY_DASHBOARD:
        return <MasteryDashboardPage />;
      case DashboardView.PERFORMANCE:
        return <PerformancePage />;
      case DashboardView.PROBLEM_SOLVER:
        return <ProblemSolverPage />;
      case DashboardView.INTERACTIVE_DIAGRAMS:
        return <InteractiveDiagramsPage />;
      case DashboardView.EXAM_STRATEGY:
        return <ExamStrategyPage />;
      case DashboardView.SMART_BOOKS:
        return <SmartBooksPage />;
      case DashboardView.CONCEPT_MRI:
        return <ConceptMriPage />;
      case DashboardView.REVISION_ENGINE:
        return <RevisionEnginePage />;
      case DashboardView.MENTAL_COACH:
        return <MentalCoachPage />;
      case DashboardView.PROCTORING_TOOLS:
        return <ProctoringToolsPage />;
      case DashboardView.PROCTOR_AI:
        return <ProctorAiPage />;
      case DashboardView.MOCK_TEST:
        return <MockTestPage />;
      case DashboardView.PROFILE:
        return <ProfilePage />;
       case DashboardView.SETTINGS:
        return <SettingsPage currentTheme={currentTheme} setTheme={setTheme} />;
      case DashboardView.MESSAGING:
        return <MessagingPage />;
      case DashboardView.NEWSPAPER:
        return <NewspaperPage />;
      case DashboardView.HELP_CENTER:
        return <HelpCenterPage />;
      case DashboardView.CONTACT_US:
        return <ContactUsPage />;
      case DashboardView.PROGRESS_TRACKER:
        return <ProgressTrackerPage />;
      case DashboardView.HISTORY:
        return <HistoryPage />;
      case DashboardView.PDF_TO_QUIZ:
        return <PdfToQuizPage />;
      case DashboardView.AI_PODCAST:
        return <AiPodcastPage />;
      case DashboardView.ANALOGY_GENERATOR:
        return <AnalogyGeneratorPage />;
      case DashboardView.MEDIA_GENERATOR:
        return <MediaGeneratorPage />;
      case DashboardView.MIND_MAPS:
        return <MindMapsPage />;
      case DashboardView.ROAD_MAPS:
        return <RoadMapsPage />;
      case DashboardView.SYLLABUS:
        return <SyllabusPage />;
      case DashboardView.PYQ_KNOWLEDGE_BASE:
        return <PyqKnowledgeBasePage />;
      default:
        return <div className="p-8 text-gray-800 dark:text-white">Content for {currentView}</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-proctor-dark text-gray-800 dark:text-gray-300">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onLogout={onLogout} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-proctor-dark-2">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
