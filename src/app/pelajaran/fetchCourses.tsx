// fetchCourses.tsx

import React, { useState, useEffect } from 'react';

interface Course {
  id: number;
  course: string;
  description: string;
  imgUrl: string;
}

const FetchCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sistech-server.vercel.app/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const { data } = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg p-6">
            <img src={course.imgUrl} alt={course.course} className="h-32 w-full object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{course.course}</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <a href={`/courses/${course.id}`} className="text-blue-500 hover:underline">Pelajari lebih lanjut</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchCourses;
