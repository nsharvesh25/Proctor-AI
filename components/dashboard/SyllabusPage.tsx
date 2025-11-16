import React from 'react';

const SubjectSection: React.FC<{ title: string; children: React.ReactNode; progress: number; }> = ({ title, children, progress }) => (
    <details className="bg-proctor-dark-3 rounded-lg p-4 group" open>
        <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
            {title}
            <span className="text-sm text-gray-400 transform group-open:rotate-90 transition-transform">&#9656;</span>
        </summary>
        <div className="mt-4">
            <div className="flex justify-between mb-1">
                <span className="text-xs font-medium text-gray-400">Completion</span>
                <span className="text-xs font-medium text-gray-400">{progress}%</span>
            </div>
            <div className="w-full bg-proctor-dark rounded-full h-1.5">
                <div className="bg-proctor-blue h-1.5 rounded-full" style={{width: `${progress}%`}}></div>
            </div>
        </div>
        <div className="mt-4 pl-4 border-l-2 border-proctor-dark space-y-2">
            {children}
        </div>
    </details>
);

const SyllabusPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Syllabus & Subjects</h1>
      <div className="space-y-6">
        <SubjectSection title="Physics" progress={75}>
            <p className="text-gray-300">Mechanics</p>
            <p className="text-gray-300">Optics</p>
            <p className="text-gray-500 line-through">Thermodynamics</p>
            <p className="text-gray-500 line-through">Electromagnetism</p>
        </SubjectSection>
        <SubjectSection title="Chemistry" progress={45}>
            <p className="text-gray-300">Organic Chemistry</p>
            <p className="text-gray-500 line-through">Inorganic Chemistry</p>
            <p className="text-gray-300">Physical Chemistry</p>
        </SubjectSection>
         <SubjectSection title="Mathematics" progress={60}>
            <p className="text-gray-500 line-through">Algebra</p>
            <p className="text-gray-300">Calculus</p>
            <p className="text-gray-500 line-through">Coordinate Geometry</p>
            <p className="text-gray-300">Vectors & 3D</p>
        </SubjectSection>
      </div>
    </div>
  );
};

export default SyllabusPage;
