import React, { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="relative pt-[180px] px-6 pb-[100px] min-h-screen flex items-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-50 -z-10 bg-[radial-gradient(circle,_var(--color-purple)_0%,_transparent_70%)] -top-[100px] -right-[100px] animate-[var(--animate-drift)]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-50 -z-10 bg-[radial-gradient(circle,_#60A5FA_0%,_transparent_70%)] bottom-[10%] -left-[100px] animate-[var(--animate-drift-reverse)]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left">
          <h1 className="opacity-0 animate-[var(--animate-slide-up)]">
            Bangun Karir Impian Masa Depanmu Bersama{' '}
            <span className="text-primary relative inline-block">
              Aksademy
              <span className="absolute w-full h-[30%] bottom-[5px] left-0 bg-primary-light -z-10 rounded"></span>
            </span>
          </h1>
          <p className="opacity-0 animate-[var(--animate-slide-up)] [animation-delay:200ms] text-xl mb-6">
            Belajar langsung dari ahli industri dengan kurikulum terupdate. Tersedia bootcamp, webinar, dan course eksklusif.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-[var(--animate-slide-up)] [animation-delay:400ms]">
            <a href="#program" className="btn btn-primary btn-lg">Mulai Sekarang</a>
            <a href="#" className="btn btn-secondary btn-lg">
              <img src="/icon-wa.svg" alt="WhatsApp" className="w-6 h-6" /> Konsultasi
            </a>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="order-1 lg:order-2 opacity-0 animate-[var(--animate-slide-up)] [animation-delay:600ms] mx-auto">
          <div 
            className="relative rounded-[24px] shadow-2xl overflow-hidden [transform:perspective(1000px)_rotateY(-5deg)] hover:[transform:perspective(1000px)_rotateY(0deg)_scale(1.02)] transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-full overflow-hidden bg-black">
              <div 
                className={`flex w-max animate-[var(--animate-scroll)] ${isHovered ? 'animate-paused' : ''}`}
              >
                {/* Original Items */}
                <img src="/carousel-1.webp" alt="Promo 1" className="w-[300px] md:w-[600px] object-cover" />
                <img src="/carousel-2.webp" alt="Promo 2" className="w-[300px] md:w-[600px] object-cover" />
                <img src="/carousel-3.webp" alt="Promo 3" className="w-[300px] md:w-[600px] object-cover" />
                <img src="/carousel-4.webp" alt="Promo 4" className="w-[300px] md:w-[600px] object-cover" />
                
                {/* Duplicated for Infinite Effect */}
                <img src="/carousel-1.webp" alt="Promo 1" className="w-[300px] md:w-[600px] object-cover" />
                <img src="/carousel-2.webp" alt="Promo 2" className="w-[300px] md:w-[600px] object-cover" />
                <img src="/carousel-3.webp" alt="Promo 3" className="w-[300px] md:w-[600px] object-cover" />
                <img src="/carousel-4.webp" alt="Promo 4" className="w-[300px] md:w-[600px] object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
