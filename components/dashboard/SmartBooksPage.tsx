import React, { useState, useRef } from 'react';

const SmartBooksPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setIsProcessing(true);
      setIsDone(false);
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        setIsDone(true);
      }, 3000);
    }
  };

  const getUploadMessage = () => {
    if (isProcessing) {
      return <p className="mt-5 text-sm font-semibold text-proctor-blue">Processing: {file?.name}</p>;
    }
    if (isDone) {
      return <p className="mt-5 text-sm font-semibold text-green-500">Success! '{file?.name}' is now a Smart Book.</p>;
    }
    return (
        <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-proctor-blue">Upload a file</span> or drag and drop
        </p>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Smart Books</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">Upload any book and turn it into a personalized, interactive course.</p>
      
      <div className="bg-white dark:bg-proctor-dark p-6 rounded-lg">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-4">A Game Changer for Your Study Materials</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
                Upload your coaching modules, NCERT books, or any study PDF. Our platform will automatically convert them into personalized quizzes, mind maps, revision cards, video summaries, and link them to previous year questions.
            </p>
            <div className="mt-4 flex justify-center">
                <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept=".pdf,.docx" className="hidden" />
                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full max-w-lg p-8 border-2 border-dashed border-gray-300 dark:border-proctor-dark-3 rounded-lg cursor-pointer hover:border-proctor-blue dark:hover:border-proctor-blue"
                >
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {getUploadMessage()}
                        <p className="text-xs text-gray-400 dark:text-gray-500">PDF, DOCX up to 50MB</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SmartBooksPage;