import React from 'react';

const RoadMapItem: React.FC<{ week: number; title: string; description: string; isCompleted?: boolean }> = ({ week, title, description, isCompleted = false }) => (
    <div className="relative pl-8">
        <div className={`absolute left-0 top-1 w-4 h-4 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-proctor-blue ring-4 ring-proctor-dark'}`}></div>
        <div className="pl-4">
            <p className="text-sm font-medium text-proctor-blue">Week {week}</p>
            <h3 className="font-bold text-white mt-1">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);

const RoadMapsPage: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Personalized Study Road Map</h1>
      <div className="bg-proctor-dark p-6 rounded-lg">
        <p className="text-gray-400 mb-6">
          Here is your personalized study roadmap for mastering Physics for JEE Advanced in the next 8 weeks. Stay on track to achieve your goals.
        </p>
        <div className="relative border-l-2 border-proctor-dark-3 space-y-8">
            <RoadMapItem 
                week={1} 
                title="Kinematics & NLM"
                description="Master 1D and 2D motion. Solve at least 50 PYQs on Newton's Laws of Motion."
                isCompleted
            />
            <RoadMapItem 
                week={2} 
                title="Work, Energy, Power & Circular Motion"
                description="Focus on conservation of energy and vertical circular motion concepts."
                isCompleted
            />
            <RoadMapItem 
                week={3} 
                title="Center of Mass & Rotational Motion"
                description="This is a crucial topic. Focus on moment of inertia and torque."
            />
             <RoadMapItem 
                week={4} 
                title="Gravitation & Simple Harmonic Motion"
                description="Understand satellite motion and the energy in SHM."
            />
        </div>
      </div>
    </div>
  );
};

export default RoadMapsPage;
