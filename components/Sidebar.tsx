import React from 'react';
import { DashboardView } from '../types';

interface SidebarProps {
  currentView: DashboardView;
  setCurrentView: (view: DashboardView) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, sidebarOpen, setSidebarOpen }) => {
  const learning = [
    { name: DashboardView.HOME, icon: HomeIcon },
    { name: DashboardView.MASTERY_DASHBOARD, icon: SparklesIcon },
    { name: DashboardView.PROGRESS_TRACKER, icon: TrendingUpIcon },
    { name: DashboardView.PERFORMANCE, icon: PresentationChartLineIcon },
    { name: DashboardView.HISTORY, icon: ClockIcon },
  ];
  const aiTools = [
    { name: DashboardView.PROCTOR_AI, icon: MicrophoneIcon },
    { name: DashboardView.PROBLEM_SOLVER, icon: CalculatorIcon },
    { name: DashboardView.INTERACTIVE_DIAGRAMS, icon: BeakerIcon },
    { name: DashboardView.PDF_TO_QUIZ, icon: DocumentArrowUpIcon },
    { name: DashboardView.AI_PODCAST, icon: PlayCircleIcon },
    { name: DashboardView.ANALOGY_GENERATOR, icon: ArrowsRightLeftIcon },
    { name: DashboardView.MEDIA_GENERATOR, icon: PhotoIcon },
    { name: DashboardView.MIND_MAPS, icon: ShareIcon },
  ];
  const advancedAi = [
    { name: DashboardView.CONCEPT_MRI, icon: CpuChipIcon },
    { name: DashboardView.REVISION_ENGINE, icon: ArrowPathIcon },
    { name: DashboardView.MENTAL_COACH, icon: HeartIcon },
    { name: DashboardView.PROCTORING_TOOLS, icon: ShieldCheckIcon },
  ];
  const examPrep = [
    { name: DashboardView.MOCK_TEST, icon: DocumentTextIcon },
    { name: DashboardView.MAIN_EXAM, icon: AcademicCapIcon },
    { name: DashboardView.EXAM_STRATEGY, icon: LightBulbIcon },
    { name: DashboardView.ROAD_MAPS, icon: MapIcon },
    { name: DashboardView.SYLLABUS, icon: BookOpenIcon },
  ];
  const resources = [
    { name: DashboardView.PYQ_KNOWLEDGE_BASE, icon: CircleStackIcon },
    { name: DashboardView.NEWSPAPER, icon: NewspaperIcon },
    { name: DashboardView.SMART_BOOKS, icon: ArrowUpTrayIcon },
  ];
  const community = [
      { name: DashboardView.MESSAGING, icon: ChatBubbleLeftRightIcon },
  ];
  const support = [
      { name: DashboardView.HELP_CENTER, icon: QuestionMarkCircleIcon },
      { name: DashboardView.CONTACT_US, icon: EnvelopeIcon },
  ];

  const NavItem: React.FC<{ item: {name: DashboardView, icon: React.ElementType} }> = ({ item }) => (
    <a
        href="#"
        onClick={(e) => {
            e.preventDefault();
            setCurrentView(item.name);
            setSidebarOpen(false);
        }}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
            currentView === item.name
            ? 'bg-proctor-blue text-white'
            : 'text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-proctor-dark-3 hover:text-gray-900 dark:hover:text-white'
        }`}
    >
        <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
        {item.name}
    </a>
  );
  
  const NavSection: React.FC<{title: string, items: {name: DashboardView, icon: React.ElementType}[]}> = ({title, items}) => (
    <div>
        <h3 className="px-4 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{title}</h3>
        <div className="mt-3 space-y-1">
            {items.map(item => <NavItem key={item.name} item={item} />)}
        </div>
    </div>
  );

  return (
    <>
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
            <div
                className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
            ></div>
        )}
        <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-proctor-dark flex flex-col transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex-shrink-0 border-r border-gray-200 dark:border-proctor-dark-3`}>
          <div className="flex items-center justify-between h-16 px-4 flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Proctor AI</span>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-6 overflow-y-auto">
            <NavSection title="Learning" items={learning} />
            <NavSection title="AI Tools" items={aiTools} />
            <NavSection title="Advanced AI" items={advancedAi} />
            <NavSection title="Exam Prep" items={examPrep} />
            <NavSection title="Resources" items={resources} />
            <NavSection title="Community" items={community} />
            <NavSection title="Support" items={support} />
          </nav>
        </div>
    </>
  );
};

// SVG Icons as functional components
const Icon: React.FC<{ children: React.ReactNode, strokeWidth?: number }> = ({ children, strokeWidth = 1.5 }) => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>{children}</svg>
);
const HomeIcon: React.FC = () => <Icon strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></Icon>;
const SparklesIcon: React.FC = () => <Icon strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 15.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 20l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 23.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 20l1.035-.259a3.375 3.375 0 002.456-2.456L18 15.75z" /></Icon>;
const CalculatorIcon: React.FC = () => <Icon strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-6m-3 6v-3m-3 3h.01M9 17h.01M12 17h.01M15 17h.01M9 14h.01M12 14h.01M15 14h.01M4 7h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z" /></Icon>;
const BeakerIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.21 1.002L7.5 15.25 M9.75 3.104a2.25 2.25 0 014.5 0v5.714a2.25 2.25 0 01-.21 1.002l-2.04 5.44a1.5 1.5 0 01-2.732 0l-2.04-5.44A2.25 2.25 0 015.25 8.818V3.104a2.25 2.25 0 014.5 0zM9.75 15.25h.008v.008H9.75v-.008zm0 0c.02.165.04.33.064.495 1.025 3.4 4.133 5.75 7.824 5.75 4.143 0 7.68-2.73 7.824-6.495.064-.165.04-.33.064-.495M9.75 15.25c-.02.165-.04.33-.064.495C8.66 19.145 5.553 21.5 1.862 21.5c-4.143 0-7.68-2.73-7.824-6.495C-6.026 14.835-6 14.67-6 14.5M3.75 12h16.5" /></Icon>;
const DocumentTextIcon: React.FC = () => <Icon strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></Icon>;
const AcademicCapIcon: React.FC = () => <Icon><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.018 12.083 12.083 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.018 12.083 12.083 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></Icon>;
const PresentationChartLineIcon: React.FC = () => <Icon strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></Icon>;
const LightBulbIcon: React.FC = () => <Icon strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></Icon>;
const NewspaperIcon: React.FC = () => <Icon><path d="M12 7a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" clipRule="evenodd" d="M21 12.833V18a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h9.167a5.002 5.002 0 000 8.833zM15 7H7v2h8V7zm0 4H7v2h8v-2z" /></Icon>;
const ChatBubbleLeftRightIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72 3.72a.75.75 0 01-1.06 0l-3.72-3.72C9.347 17.657 8.5 16.69 8.5 15.5v-4.286c0-.97.616-1.813 1.5-2.097m6.5 0a2.25 2.25 0 00-2.25 2.25v4.286c0 1.136.847 2.1 1.98 2.193l3.72 3.72a.75.75 0 001.06 0l3.72-3.72c1.133-.093 1.98-1.057 1.98-2.193v-4.286a2.25 2.25 0 00-2.25-2.25h-6.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" /></Icon>;
const QuestionMarkCircleIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></Icon>;
const EnvelopeIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></Icon>;
const TrendingUpIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V3.375" /></Icon>;
const ClockIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>;
const DocumentArrowUpIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></Icon>;
const PlayCircleIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></Icon>;
const MicrophoneIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></Icon>;
const ArrowsRightLeftIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-7.5-12L21 9m0 0L16.5 4.5M21 9H3" /></Icon>;
const PhotoIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></Icon>;
const ShareIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 100-2.186m0 2.186c-.18.324-.283.696-.283 1.093s.103.77.283 1.093m-12.033-5.314a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093" /></Icon>;
const MapIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-6.998l-6.866 2.575M18 9.75l-6.866 2.575m0 0l-6.867-2.575M9 6.75L15.866 4.175M9 6.75L2.134 4.175m13.732 5.575l6.867 2.575M2.134 9.75l6.867 2.575m0 0V15m-6.867-2.575v5.85m13.732-5.85v5.85" /></Icon>;
const BookOpenIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.105 0 4.059-.712 5.5-1.992a8.987 8.987 0 015.5 1.992V4.262c-.938-.332-1.948-.512-3-.512h-1.5a8.967 8.967 0 00-6-2.25z" /></Icon>;
const CircleStackIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></Icon>;
const ArrowUpTrayIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></Icon>;
const CpuChipIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 15v1.5M12 4.5v-1.5m0 18v-1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75h1.5V5.25h-1.5v1.5zm-4.5 0h1.5V5.25h-1.5v1.5zm-4.5 0h1.5V5.25h-1.5v1.5zm4.5 4.5h1.5V9.75h-1.5v1.5zm-4.5 0h1.5V9.75h-1.5v1.5zm4.5 4.5h1.5v-1.5h-1.5v1.5zm-4.5 0h1.5v-1.5h-1.5v1.5zm4.5 4.5h1.5v-1.5h-1.5v1.5zm-4.5 0h1.5v-1.5h-1.5v1.5zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>;
const ArrowPathIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-11.667 0l-3.181 3.183m0 0l-3.181-3.183m0 0h16.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></Icon>;
const HeartIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></Icon>;
const ShieldCheckIcon: React.FC = () => <Icon><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></Icon>;


export default Sidebar;