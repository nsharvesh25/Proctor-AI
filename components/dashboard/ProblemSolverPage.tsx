import React, { useState } from 'react';

const ProblemSolverPage: React.FC = () => {
  const [problem, setProblem] = useState("A block of mass M is on an inclined plane...");
  const [solution, setSolution] = useState("1. First, I calculated the net force...\n2. Then, I applied Newton's second law...\n3. The final velocity is...");
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!problem || !solution) {
      alert("Please fill in both the problem and your solution.");
      return;
    }
    setIsLoading(true);
    setFeedback(null);
    setTimeout(() => {
      setIsLoading(false);
      setFeedback(`AI analysis complete for problem: "${problem.substring(0, 30)}...". See feedback below.`);
    }, 2000);
  };

  return (
    <div className="p-8 h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-2">AI Problem Solver & Judge</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">Get your logic graded, not just your final answer.</p>
      
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel: Student Input */}
        <div className="bg-white dark:bg-proctor-dark p-6 rounded-lg flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Your Solution</h2>
            <div>
                <label htmlFor="problem-statement" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Problem Statement</label>
                <input 
                    type="text" 
                    id="problem-statement"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="e.g., A block of mass M is on an inclined plane..."
                    className="w-full bg-gray-50 dark:bg-proctor-dark-3 p-2 rounded-md border border-gray-300 dark:border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue"
                />
            </div>
            <div className="mt-4 flex-grow flex flex-col">
                <label htmlFor="solution-steps" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Your Step-by-Step Solution</label>
                <textarea 
                    id="solution-steps"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    placeholder="1. First, I calculated the net force...&#10;2. Then, I applied Newton's second law...&#10;3. The final velocity is..."
                    className="w-full flex-grow bg-gray-50 dark:bg-proctor-dark-3 p-2 rounded-md border border-gray-300 dark:border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue resize-none"
                />
            </div>
            <button onClick={handleSubmit} disabled={isLoading} className="mt-4 bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 flex items-center justify-center">
                 {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                {isLoading ? 'Judging...' : 'Submit for AI Judgement'}
            </button>
        </div>

        {/* Right Panel: AI Feedback */}
        <div className="bg-white dark:bg-proctor-dark p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">AI Judge Feedback</h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
                {!isLoading && !feedback && <p>Your AI-powered step-by-step evaluation will appear here.</p>}
                {isLoading && <div className="text-center p-4">Analyzing your solution...</div>}
                {feedback && (
                    <>
                         <div className="bg-gray-100 dark:bg-proctor-dark-3 p-4 rounded-md">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Overall Feedback</h3>
                            <p className="text-sm">{feedback}</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-proctor-dark-3 p-4 rounded-md">
                            <h3 className="font-semibold text-green-600 dark:text-green-400">Step 1: Correct</h3>
                            <p className="text-sm">Your initial force calculation is accurate.</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-proctor-dark-3 p-4 rounded-md">
                            <h3 className="font-semibold text-yellow-600 dark:text-yellow-400">Step 2: Needs Correction</h3>
                            <p className="text-sm">It appears you used `sin(θ)` instead of `cos(θ)` for the normal force component. Remember, the normal force component of gravity is `mg cos(θ)` on an inclined plane.</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-proctor-dark-3 p-4 rounded-md">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Structured Solution Template</h3>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Approach Summary</li>
                                <li>Corrected Step-by-Step</li>
                                <li>Final Answer</li>
                                <li>Alternative Method</li>
                                <li>Common Pitfalls</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolverPage;