import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 glass transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center">
        <a href="#" className="inline-block relative">
          <img src="/logo-primary.png" alt="Aksademy Logo" className="h-10" />
        </a>
        
        <div className="hidden md:flex gap-10">
          <a href="#program" className="font-medium text-text-muted relative hover:text-text-main group">
            Program
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#kategori" className="font-medium text-text-muted relative hover:text-text-main group">
            Kategori
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimoni" className="font-medium text-text-muted relative hover:text-text-main group">
            Testimoni
            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <div className="hidden md:flex gap-4">
          <a href="#" className="btn btn-outline">Masuk</a>
          <a href="#" className="btn btn-primary">Daftar</a>
        </div>
      </div>
    </nav>
  );
}
