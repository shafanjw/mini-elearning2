import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar'; // Import the Navbar component
import Footer from './components/footer'

interface Course {
    id: number;
    imgUrl: string;
    course: string;
    description: string;
  }
  
  export default function Courses() {
    const [courses, setCourses] = useState<Course[]>([]);
  
    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const response = await fetch('https://sistech-server.vercel.app/api/data');
          const data = await response.json();
          setCourses(data);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchCourses();
    }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Daftar Kursus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar></Navbar>

      <main className="container mx-auto py-6">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold">Kursus yang Tersedia</h2>
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
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}
