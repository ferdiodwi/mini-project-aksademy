import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] pt-20 px-6">
      <div className="max-w-[1280px] mx-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-16 mb-16">
          
          <div className="flex flex-col">
            <img src="/logo-secondary.png" alt="Aksademy" className="h-12 brightness-0 invert w-fit mb-6" />
            <p className="text-[#94A3B8] leading-relaxed">
              Platform edukasi digital terdepan untuk meningkatkan karir profesionalmu. Mari melangkah lebih jauh, bersama Aksademy.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">Program</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#94A3B8] hover:text-white hover:pl-1 transition-all">Bootcamp Intensif</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white hover:pl-1 transition-all">Online Course</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white hover:pl-1 transition-all">Live Webinar</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white hover:pl-1 transition-all">Kelas Korporat</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">Kategori</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#94A3B8] hover:text-white hover:pl-1 transition-all">Web Development</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white hover:pl-1 transition-all">UI/UX & Graphic Design</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white hover:pl-1 transition-all">Data Science</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white hover:pl-1 transition-all">Business & Tax</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">Hubungi Kami</h4>
            <p className="text-[#94A3B8] mb-4">Jl. Jendral Sudirman No. 12, Jakarta Selatan, 12190</p>
            <a href="mailto:halo@aksademy.id" className="inline-block text-[#EEF2FF] font-semibold text-xl hover:text-white transition-colors">
              halo@aksademy.id
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-[#1E293B] pt-8 text-center text-[#64748B]">
          <p>&copy; {new Date().getFullYear()} Aksademy. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
