import React, { useState } from 'react';

const InteractiveDiagramsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [diagramData, setDiagramData] = useState({
      mass: 5,
      angle: 30,
  });
  const [prompt, setPrompt] = useState("A block of mass 5kg rests on a frictionless plane inclined at 30 degrees. What is the normal force?");

  const handleGenerate = () => {
      setIsLoading(true);
      setTimeout(() => {
          // Simulate generating new values from prompt
          const newMass = Math.floor(Math.random() * 10) + 1;
          const newAngle = Math.floor(Math.random() * 45) + 15;
          setDiagramData({ mass: newMass, angle: newAngle });
          setIsLoading(false);
      }, 1500);
  };

  return (
    <div className="p-8 text-white h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-2">Interactive Diagrams & Visual Solver</h1>
      <p className="text-gray-400 mb-6">Explain any problem using auto-generated visual animations.</p>
      
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-proctor-dark p-6 rounded-lg flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Problem Input</h2>
             <p className="text-gray-400 mb-4">
                Describe a problem, and the AI will generate a diagram.
            </p>
            <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full flex-grow bg-proctor-dark-3 p-2 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue resize-none"
            />
            <button onClick={handleGenerate} disabled={isLoading} className="mt-4 bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 flex items-center justify-center">
                {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                {isLoading ? 'Generating...' : 'Generate Diagram'}
            </button>
        </div>
        <div className="bg-proctor-dark p-6 rounded-lg flex flex-col items-center justify-center">
             <h2 className="text-xl font-semibold mb-4">Generated Free-Body Diagram</h2>
             {isLoading ? (
                 <div className="w-full h-full flex items-center justify-center text-gray-400">Generating diagram...</div>
             ) : (
                <svg width="300" height="200" viewBox="0 0 300 200" className="bg-proctor-dark-3 rounded-md">
                    {/* Inclined plane */}
                    <path d="M 30 170 L 270 70 L 30 170 Z" fill="#334155" />
                    
                    {/* Block */}
                    <rect x="125" y="100" width="50" height="30" fill="#4A6CFD" transform="rotate(-20, 150, 115)" />
                    
                    {/* Center of mass */}
                    <circle cx="148" cy="115" r="3" fill="white" />

                    {/* Force vectors */}
                    {/* Weight (mg) */}
                    <line x1="148" y1="115" x2="148" y2="165" stroke="#FBBF24" strokeWidth="2" markerEnd="url(#arrow-yellow)" />
                    <text x="152" y="160" fill="#FBBF24" fontSize="12">mg</text>

                    {/* Normal Force (N) */}
                    <line x1="148" y1="115" x2="128" y2="70" stroke="#34D399" strokeWidth="2" markerEnd="url(#arrow-green)" />
                    <text x="115" y="70" fill="#34D399" fontSize="12">N</text>
                    
                    {/* mg sin(theta) */}
                     <line x1="148" y1="115" x2="185" y2="130" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow-red)" />
                     <text x="188" y="140" fill="#EF4444" fontSize="12">{`mg sin(${diagramData.angle}°)`}</text>

                    <defs>
                        <marker id="arrow-yellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#FBBF24" />
                        </marker>
                        <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#34D399" />
                        </marker>
                         <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                        </marker>
                    </defs>
                </svg>
             )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveDiagramsPage;