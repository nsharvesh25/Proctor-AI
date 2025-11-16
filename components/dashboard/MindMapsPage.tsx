import React, { useState } from 'react';

const MindMapNode: React.FC<{ title: string; className?: string; style?: React.CSSProperties }> = ({ title, className, style }) => (
    <div className={`bg-proctor-blue text-white py-2 px-4 rounded-lg shadow-lg text-center ${className}`} style={style}>
        {title}
    </div>
);

const MindMapsPage: React.FC = () => {
    const [topic, setTopic] = useState("Newton's Laws");
    const [isLoading, setIsLoading] = useState(false);
    const [nodes, setNodes] = useState({
        center: "Newton's Laws",
        branches: ["1st Law: Inertia", "2nd Law: F=ma", "3rd Law: Action-Reaction"],
    });

    const handleGenerate = () => {
        if (!topic) {
            alert("Please enter a topic.");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            // Simulate generating new branches
            setNodes({
                center: topic,
                branches: [`Key Concepts of ${topic}`, `Applications`, `Related Theories`],
            });
            setIsLoading(false);
        }, 1500);
    };

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">AI-Generated Mind Maps</h1>
      <div className="bg-proctor-dark p-6 rounded-lg">
        <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-400 mb-4 text-center">
              Organize your thoughts and connect ideas with AI-generated mind maps. Enter a central topic, and the AI will build out the branches for you.
            </p>
            <div className="flex gap-4">
                <input 
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter a central topic"
                    className="w-full bg-proctor-dark-3 p-2 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue"
                />
                <button onClick={handleGenerate} disabled={isLoading} className="bg-proctor-blue hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 flex items-center justify-center whitespace-nowrap">
                    {isLoading ? 'Generating...' : 'Generate Map'}
                </button>
            </div>
        </div>
        
        <div className="relative flex justify-center items-center h-96">
            {isLoading ? (
                 <div className="text-gray-400">Generating mind map for "{topic}"...</div>
            ) : (
                <>
                    {/* Center Node */}
                    <MindMapNode title={nodes.center} className="absolute" />

                    {/* Connecting Lines (using divs) */}
                    <div className="absolute w-24 h-0.5 bg-proctor-dark-3" style={{transform: 'translate(-80px, -60px) rotate(-30deg)'}}></div>
                    <div className="absolute w-24 h-0.5 bg-proctor-dark-3" style={{transform: 'translate(80px, -60px) rotate(30deg)'}}></div>
                    <div className="absolute w-24 h-0.5 bg-proctor-dark-3" style={{transform: 'translate(0, 80px) rotate(90deg)'}}></div>

                    {/* Branch Nodes */}
                    <MindMapNode title={nodes.branches[0]} className="absolute" style={{transform: 'translate(-150px, -80px)'}}/>
                    <MindMapNode title={nodes.branches[1]} className="absolute" style={{transform: 'translate(150px, -80px)'}}/>
                    <MindMapNode title={nodes.branches[2]} className="absolute" style={{transform: 'translate(0, 120px)'}}/>
                </>
            )}
        </div>
      </div>
    </div>
  );
};

export default MindMapsPage;