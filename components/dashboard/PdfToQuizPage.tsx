import React, { useState, useRef } from 'react';

const PdfToQuizPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quizReady, setQuizReady] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setQuizReady(false);
      setQuestions([]);
    }
  };

  const handleGenerateClick = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }
    setIsLoading(true);
    setQuizReady(false);
    setQuestions([]);
    setTimeout(() => {
      setIsLoading(false);
      setQuizReady(true);
      setQuestions([
        "What is the first law of thermodynamics?",
        "Define entropy and its significance.",
        "Explain the difference between an isothermal and adiabatic process.",
      ]);
    }, 2500); // Simulate API call
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">PDF to Quiz Generator</h1>
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-proctor-dark p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">1. Upload Your Document</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Upload your study materials in PDF format, and our AI will generate a customized quiz to help you test your knowledge.
              </p>
               <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept=".pdf" className="hidden" />
               <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full p-8 border-2 border-dashed border-gray-300 dark:border-proctor-dark-3 rounded-lg text-center cursor-pointer hover:border-proctor-blue dark:hover:border-proctor-blue"
              >
                  <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {file ? (
                       <p className="mt-5 text-sm font-semibold text-green-500">{file.name}</p>
                  ) : (
                      <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold text-proctor-blue">Upload a file</span> or drag and drop
                      </p>
                  )}
                  <p className="text-xs text-gray-400 dark:text-gray-500">PDF up to 25MB</p>
              </div>
          </div>

          <div className="bg-white dark:bg-proctor-dark p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">2. Configure Your Quiz</h2>
              <div className="space-y-4">
                  <div>
                      <label htmlFor="num-questions" className="block text-sm font-medium text-gray-500 dark:text-gray-400">Number of Questions</label>
                      <select id="num-questions" className="mt-1 block w-full bg-gray-50 dark:bg-proctor-dark-3 border border-gray-300 dark:border-proctor-dark-3 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-proctor-blue focus:border-proctor-blue sm:text-sm">
                          <option>5</option>
                          <option>10</option>
                          <option>20</option>
                      </select>
                  </div>
                   <div>
                      <label htmlFor="difficulty" className="block text-sm font-medium text-gray-500 dark:text-gray-400">Difficulty Level</label>
                      <select id="difficulty" className="mt-1 block w-full bg-gray-50 dark:bg-proctor-dark-3 border border-gray-300 dark:border-proctor-dark-3 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-proctor-blue focus:border-proctor-blue sm:text-sm">
                          <option>Easy</option>
                          <option>Medium</option>
                          <option>Hard</option>
                          <option>Mixed</option>
                      </select>
                  </div>
              </div>
               <button onClick={handleGenerateClick} disabled={isLoading || !file} className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                  {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                  {isLoading ? 'Generating...' : 'Generate Quiz'}
              </button>
          </div>
        </div>

        {quizReady && (
            <div className="bg-white dark:bg-proctor-dark p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Your Generated Quiz from <span className="text-proctor-blue">{file?.name}</span></h2>
                <div className="space-y-3">
                    {questions.map((q, i) => (
                        <div key={i} className="p-3 bg-gray-50 dark:bg-proctor-dark-3 rounded-md">
                            <p><span className="font-bold">{i + 1}.</span> {q}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default PdfToQuizPage;