import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

// Feature Icons (as functional components)
const BrainIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6.5a3.5 3.5 0 013.5-3.5h0a3.5 3.5 0 013.5 3.5V19M8 19h8m-1-14v5.5a2.5 2.5 0 002.5 2.5h0a2.5 2.5 0 002.5-2.5V5M5 19h.01M5 16h.01M5 13h.01M5 10h.01M5 7h.01" /></svg>;
const ChartIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const BookIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.105 0 4.059-.712 5.5-1.992a8.987 8.987 0 015.5 1.992V4.262c-.938-.332-1.948-.512-3-.512h-1.5a8.967 8.967 0 00-6-2.25z" /></svg>;

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="bg-white dark:bg-proctor-dark text-gray-800 dark:text-gray-300">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-proctor-blue">Proctor AI</span>
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <button onClick={onGetStarted} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative isolate pt-14 h-screen flex items-center">
            <div className="absolute inset-0 z-0 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-proctor-dark dark:via-proctor-dark-2 dark:to-proctor-dark"></div>
                 <video 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 dark:opacity-10"
                    src="https://storage.googleapis.com/creds_store/effects/2024-07-25/110515_iStock-1463133374.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 z-10">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                  Unlock Your Potential with AI-Powered Learning
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  Proctor AI provides personalized study plans, instant doubt clarification, and interactive tools to help you ace your exams.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button onClick={onGetStarted} className="rounded-md bg-proctor-blue px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-transform hover:scale-105">
                    Get Started for Free
                  </button>
                  <a href="#features" className="rounded-md px-4 py-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-proctor-dark-3 hover:bg-gray-50 dark:hover:bg-proctor-dark-3">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50 dark:bg-proctor-dark-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-proctor-blue">Everything You Need</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">The Ultimate AI Co-pilot for Your Exams</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                        From personalized practice to deep conceptual understanding, Proctor AI brings you a suite of tools designed for one thing: your success.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-proctor-blue">
                                    <BrainIcon />
                                </div>
                                AI Judge & Solver
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">Get your logic graded, not just the final answer. Our AI analyzes your steps to provide targeted feedback and corrections.</dd>
                        </div>
                         <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-proctor-blue">
                                    <ChartIcon />
                                </div>
                                Personalized Roadmaps
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">Receive a customized study plan that adapts to your strengths and weaknesses, ensuring you focus on what matters most.</dd>
                        </div>
                         <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-proctor-blue">
                                    <BookIcon />
                                </div>
                                Smart Books
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">Upload any study material (PDFs, notes) and instantly convert it into interactive quizzes, mind maps, and revision cards.</dd>
                        </div>
                         <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-proctor-blue">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                Examiner Mode Mock Tests
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">Practice with tests that mimic the real exam's difficulty, topic weightage, and question patterns based on 15 years of data.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white dark:bg-proctor-dark">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-proctor-blue">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Trusted by thousands of students</p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="break-inside-avoid rounded-lg bg-gray-50 dark:bg-proctor-dark-2 p-8">
                            <p className="text-gray-600 dark:text-gray-400">"The AI Judge feature is a game-changer. It caught a fundamental flaw in my approach to physics problems that I'd been making for months."</p>
                            <div className="mt-4 flex items-center gap-x-4">
                                <img className="h-10 w-10 rounded-full bg-gray-200" src="https://i.pravatar.cc/40?u=a" alt="" />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">Aarav Patel</div>
                                    <div className="text-gray-600 dark:text-gray-400">JEE Aspirant</div>
                                </div>
                            </div>
                        </div>
                        <div className="break-inside-avoid rounded-lg bg-gray-50 dark:bg-proctor-dark-2 p-8">
                            <p className="text-gray-600 dark:text-gray-400">"Converting my messy notes into clean mind maps and quizzes with Smart Books saved me dozens of hours of revision time. Absolutely incredible."</p>
                            <div className="mt-4 flex items-center gap-x-4">
                                <img className="h-10 w-10 rounded-full bg-gray-200" src="https://i.pravatar.cc/40?u=b" alt="" />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">Priya Sharma</div>
                                    <div className="text-gray-600 dark:text-gray-400">NEET Aspirant</div>
                                </div>
                            </div>
                        </div>
                        <div className="break-inside-avoid rounded-lg bg-gray-50 dark:bg-proctor-dark-2 p-8">
                            <p className="text-gray-600 dark:text-gray-400">"The personalized roadmap kept me on track. I knew exactly what to study every single day, which removed all the stress and guesswork."</p>
                            <div className="mt-4 flex items-center gap-x-4">
                                <img className="h-10 w-10 rounded-full bg-gray-200" src="https://i.pravatar.cc/40?u=c" alt="" />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">Rohan Kumar</div>
                                    <div className="text-gray-600 dark:text-gray-400">UPSC Aspirant</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-proctor-dark-2">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to dive in?<br />Start your journey with Proctor AI today.</h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <button onClick={onGetStarted} className="rounded-md bg-proctor-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</button>
                </div>
            </div>
        </section>

      </main>

       {/* Footer */}
      <footer className="bg-white dark:bg-proctor-dark-2" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8">
                    <span className="text-2xl font-bold text-proctor-blue">Proctor AI</span>
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">The most advanced AI learning platform for competitive exams.</p>
                </div>
            </div>
            <div className="mt-16 border-t border-gray-900/10 dark:border-white/10 pt-8 sm:mt-20 lg:mt-24">
                <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">&copy; 2024 Proctor AI, Inc. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
