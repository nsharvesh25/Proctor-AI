
import React from 'react';
import { Course } from '../types';

interface CourseSelectionPageProps {
  onCourseSelect: (course: Course) => void;
}

const courses: Course[] = [
  { id: 'jee', name: 'JEE Main/Advanced', description: 'Engineering entrance exam.' },
  { id: 'neet', name: 'NEET', description: 'Medical entrance exam.' },
  { id: 'upsc', name: 'UPSC', description: 'Civil services exam.' },
  { id: 'gate', name: 'GATE', description: 'Post-graduate engineering exam.' },
  { id: 'gre', name: 'GRE', description: 'Graduate Record Examinations.' },
  { id: 'ielts', name: 'IELTS', description: 'International English Language Testing.' },
];

const CourseCard: React.FC<{ course: Course, onSelect: () => void }> = ({ course, onSelect }) => (
    <div 
        onClick={onSelect}
        className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
    >
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
            <p className="mt-2 text-gray-600">{course.description}</p>
        </div>
        <div className="absolute bottom-0 h-1 w-full bg-proctor-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
    </div>
);

const CourseSelectionPage: React.FC<CourseSelectionPageProps> = ({ onCourseSelect }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Select Your Goal</h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose the exam you are preparing for to get a personalized learning experience.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onSelect={() => onCourseSelect(course)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSelectionPage;
