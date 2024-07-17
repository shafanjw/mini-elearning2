// components/navbar.tsx

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-10 mr-3" />
          <h1 className="text-2xl font-bold">Selamat datang di Platform E-Learning!</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded">
            Beranda
          </Link>
          <Link href="/pelajaran" className="hover:bg-blue-700 px-3 py-2 rounded">
            Pelajaran
          </Link>
          <Link href="/kuis" className="hover:bg-blue-700 px-3 py-2 rounded">
            Kuis
          </Link>
          <Link href="/informasi" className="hover:bg-blue-700 px-3 py-2 rounded">
            Informasi
          </Link>
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
        <Link href="/" className="block px-4 py-2 hover:bg-blue-700">
          Beranda
        </Link>
        <Link href="/pelajaran" className="block px-4 py-2 hover:bg-blue-700">
          Pelajaran
        </Link>
        <Link href="/kuis" className="block px-4 py-2 hover:bg-blue-700">
          Kuis
        </Link>
        <Link href="/informasi" className="block px-4 py-2 hover:bg-blue-700">
          Informasi
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
