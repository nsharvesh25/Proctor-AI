import React from 'react';

const PyqKnowledgeBasePage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">PYQ Knowledge Base</h1>
      <div className="bg-proctor-dark p-6 rounded-lg">
        <p className="text-gray-400 mb-4">
          Access a curated database of Previous Year Questions (PYQs). Search for specific questions and get answers that cite the exact source or relevant concept.
        </p>
        <div className="relative mb-6">
            <input 
                type="search"
                placeholder="Search PYQs... e.g., 'Doppler effect JEE 2022'"
                className="w-full bg-proctor-dark-3 p-3 pl-10 rounded-md border border-proctor-dark-3 focus:ring-proctor-blue focus:border-proctor-blue"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
        </div>

        <div className="space-y-4">
            <details className="bg-proctor-dark-3 rounded-lg p-4 group">
                <summary className="font-semibold cursor-pointer">
                    JEE Advanced 2023: A block is kept on a frictionless inclined plane...
                </summary>
                <div className="mt-4 border-t border-proctor-dark pt-4">
                    <p className="text-gray-300">The forces acting on the block are gravity (mg) downwards, and the normal force (N) perpendicular to the plane. Resolving mg into components...</p>
                    <p className="text-xs text-gray-500 mt-2">
                        <strong>Source Citation:</strong> NCERT Physics Class XI, Chapter 5, Paragraph 3.
                    </p>
                </div>
            </details>
             <details className="bg-proctor-dark-3 rounded-lg p-4 group">
                <summary className="font-semibold cursor-pointer">
                    NEET 2022: The dimensional formula for gravitational constant is...
                </summary>
                 <div className="mt-4 border-t border-proctor-dark pt-4">
                    <p className="text-gray-300">Using the formula F = G(m1*m2)/r^2, we can derive the dimensions of G as [M^-1 L^3 T^-2].</p>
                     <p className="text-xs text-gray-500 mt-2">
                        <strong>Source Citation:</strong> Concept of Physics by H.C. Verma, Vol 1, Page 45.
                    </p>
                </div>
            </details>
        </div>
      </div>
    </div>
  );
};

export default PyqKnowledgeBasePage;
