"use client";

import Head from 'next/head';
import { useState } from 'react';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>E-learning Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-10 mr-3" />
            <h1 className="text-2xl font-bold">Selamat datang di Platform E-Learning!</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="index.html" className="hover:bg-blue-700 px-3 py-2 rounded">Beranda</a>
            <a href="pelajaran.html" className="hover:bg-blue-700 px-3 py-2 rounded">Pelajaran</a>
            <a href="kuis.html" className="hover:bg-blue-700 px-3 py-2 rounded">Kuis</a>
            <a href="informasi.html" className="hover:bg-blue-700 px-3 py-2 rounded">Informasi</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${menuOpen ? '' : 'hidden'}`}>
          <a href="index.html" className="block px-4 py-2 hover:bg-blue-700">Beranda</a>
          <a href="pelajaran.html" className="block px-4 py-2 hover:bg-blue-700">Pelajaran</a>
          <a href="kuis.html" className="block px-4 py-2 hover:bg-blue-700">Kuis</a>
          <a href="informasi.html" className="block px-4 py-2 hover:bg-blue-700">Informasi</a>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold custom-paragraph">Pelajaran yang Tersedia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Flexbox</h3>
              <p className="custom-paragraph">Belajar dasar-dasar Flexbox untuk layout yang responsif.</p>
              <a href="#" className="text-blue-500 hover:underline">Pelajari lebih lanjut</a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Navigation Bar</h3>
              <p className="custom-paragraph">Membuat navigation bar yang cantik dan fungsional.</p>
              <a href="#" className="text-blue-500 hover:underline">Pelajari lebih lanjut</a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Transition & Stylings</h3>
              <p className="custom-paragraph">Menggunakan transition untuk membuat animasi yang halus.</p>
              <a href="#" className="text-blue-500 hover:underline">Pelajari lebih lanjut</a>
            </div>
          </div>
        </section>
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold custom-paragraph">Kenapa E-learning Penting?</h2>
          <div id="carousel" className="relative">
            <div className="flex overflow-x-scroll hide-scroll-bar">
              <div className="inline-block px-2">
                <div className="w-64 h-64 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
                  <img src="/images/accessibility.png" alt="E-learning 1" className="h-32 custom-paragraph" />
                  <h3 className="text-xl font-semibold">Aksesibilitas</h3>
                  <p className="text-gray-700">E-learning memungkinkan akses pendidikan dari mana saja.</p>
                </div>
              </div>
              <div className="inline-block px-2">
                <div className="w-64 h-64 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
                  <img src="/images/flexibility.png" alt="E-learning 2" className="h-32 custom-paragraph" />
                  <h3 className="text-xl font-semibold">Fleksibilitas</h3>
                  <p className="text-gray-700">Belajar sesuai waktu yang Anda miliki tanpa terikat jadwal.</p>
                </div>
              </div>
              <div className="inline-block px-2">
                <div className="w-64 h-64 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
                  <img src="/images/learning-material.png" alt="E-learning 3" className="h-32 custom-paragraph" />
                  <h3 className="text-xl font-semibold">Ketersediaan Materi</h3>
                  <p className="text-gray-700">Banyak materi dan sumber daya yang dapat diakses secara online.</p>
                </div>
              </div>
              <div className="inline-block px-2">
                <div className="w-64 h-64 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
                  <img src="/images/learning.png" alt="Personalized Learning" className="h-32 custom-paragraph" />
                  <h3 className="text-xl font-semibold">Pembelajaran yang Dipersonalisasi</h3>
                  <p className="text-gray-700">Memungkinkan pendekatan belajar yang sesuai dengan kebutuhan individu.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-blue-600 text-white text-center py-4">
        &copy; 2024 Shafa Najwa Nathania. ♥ Sistech!
      </footer>
    </div>
  );
}
