"use client";

import Head from 'next/head';
import { Navbar, Footer } from "./components"; // Import the Navbar and Footer components

export default function Home() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>E-learning Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar></Navbar>

      <main className="container mx-auto py-6">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold custom-paragraph">Topik yang Tersedia</h2>
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

      <Footer></Footer>

    </div>
  );
}
