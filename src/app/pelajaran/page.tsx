"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Navbar, Footer } from "../components"; // Import the Navbar and Footer components
import FetchCourses from './fetchCourses';


export default function Courses() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Daftar Kursus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <main className="container mx-auto py-6">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Kursus yang Tersedia</h2>
          <FetchCourses></FetchCourses>
        </section>
      </main>

      <Footer />
    </div>
  );
}
