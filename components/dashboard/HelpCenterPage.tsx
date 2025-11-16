import React from 'react';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
    <details className="bg-proctor-dark-3 p-4 rounded-lg group">
        <summary className="font-semibold cursor-pointer flex justify-between">
            {question}
            <span className="transform group-open:rotate-90 transition-transform">&#9656;</span>
        </summary>
        <div className="mt-4 text-gray-400 border-t border-proctor-dark pt-4">
            {children}
        </div>
    </details>
);


const HelpCenterPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        <FaqItem question="How does the AI Judge work?">
            <p>The AI Judge analyzes the step-by-step solution you provide for a problem. It doesn't just check the final answer; it evaluates the logical consistency of each step, identifies where you might have made a mistake, and offers targeted feedback to correct your reasoning.</p>
        </FaqItem>
        <FaqItem question="What is 'Examiner Mode' in Mock Tests?">
            <p>Examiner Mode generates mock tests that are designed to feel just like the real exam. It uses AI to match the topic weightage, difficulty curve, and even the types of incorrect options (distractors) that have appeared in the last 15 years of your target exam.</p>
        </FaqItem>
        <FaqItem question="Can I use my own study materials?">
            <p>Absolutely! The 'Smart Books' feature allows you to upload your own PDFs, such as coaching materials or notes. Our platform then converts them into interactive study resources like quizzes, flashcards, and mind maps.</p>
        </FaqItem>
        <FaqItem question="How do I switch to Parent View?">
            <p>You can switch to Parent View using the toggle in the header. This allows parents to get a high-level overview of their child's progress, performance, and learning consistency without seeing the specific questions or study material.</p>
        </FaqItem>
      </div>
    </div>
  );
};

export default HelpCenterPage;
