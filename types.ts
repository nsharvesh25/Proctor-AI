export enum View {
  LANDING,
  AUTH,
  COURSE_SELECTION,
  DASHBOARD,
}

export enum AuthMode {
  LOGIN,
  SIGNUP,
}

export type Theme = 'light' | 'dark' | 'system';

export enum DashboardView {
  HOME = 'Home',
  MASTERY_DASHBOARD = 'Mastery Dashboard',
  PROGRESS_TRACKER = 'Progress Tracker',
  PERFORMANCE = 'Performance',
  HISTORY = 'History',
  
  PROCTOR_AI = 'Proctor AI',
  PROBLEM_SOLVER = 'Problem Solver',
  INTERACTIVE_DIAGRAMS = 'Interactive Diagrams',
  PDF_TO_QUIZ = 'PDF to Quiz',
  AI_PODCAST = 'AI Podcast Generator',
  ANALOGY_GENERATOR = 'Analogy Generator',
  MEDIA_GENERATOR = 'Image/Video Generator',
  MIND_MAPS = 'Mind Maps',

  MOCK_TEST = 'Mock Test',
  MAIN_EXAM = 'Main Exam',
  EXAM_STRATEGY = 'Exam Strategy',
  ROAD_MAPS = 'Road Maps',
  SYLLABUS = 'Syllabus & Subjects',
  PROCTORING_TOOLS = 'Proctoring Tools',

  PYQ_KNOWLEDGE_BASE = 'PYQ Knowledge Base',
  NEWSPAPER = 'Daily Newspapers',
  SMART_BOOKS = 'Smart Books',
  
  CONCEPT_MRI = 'Concept MRI',
  REVISION_ENGINE = 'Revision Engine',
  MENTAL_COACH = 'Mental Coach',
  
  MESSAGING = 'Messaging',
  
  HELP_CENTER = 'Help Center',
  CONTACT_US = 'Contact Us',

  PROFILE = 'Profile',
  SETTINGS = 'Settings',
}

export interface Course {
    id: string;
    name: string;
    description: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

// Data structures for course-specific content
export interface CourseHomeData {
  strongestTopic: string;
  weakestTopic: string;
}

export interface CourseDetails {
    name: string;
    home: CourseHomeData;
}

export type CourseData = {
    [key: string]: CourseDetails;
};
