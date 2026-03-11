import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const carouselImages = [
  "/carousel-1.webp",
  "/carousel-2.webp",
  "/carousel-3.webp",
  "/carousel-4.webp"
];

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Discrete auto-scroll (interval based)
  useEffect(() => {
    if (isHovered) return;

    const intervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const itemWidth = container.offsetWidth; // width of visible area
        
        let nextIndex = activeIndex + 1;
        if (nextIndex >= carouselImages.length) {
          nextIndex = 0;
        }

        container.scrollTo({
          left: nextIndex * itemWidth,
          behavior: 'smooth'
        });
        setActiveIndex(nextIndex);
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(intervalId);
  }, [isHovered, activeIndex]);

  // Update active index when scrolled manually
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  const scrollTo = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        left: index * container.offsetWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const scrollPrev = () => {
    const nextIndex = activeIndex === 0 ? carouselImages.length - 1 : activeIndex - 1;
    scrollTo(nextIndex);
  };

  const scrollNext = () => {
    const nextIndex = activeIndex === carouselImages.length - 1 ? 0 : activeIndex + 1;
    scrollTo(nextIndex);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const slideUpVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scaleUpVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <header className="relative pt-[120px] px-6 pb-[100px] min-h-screen flex flex-col items-center">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-50 -z-10 bg-[radial-gradient(circle,_#14427D_0%,_transparent_70%)] -top-[100px] -right-[100px] animate-[var(--animate-drift)]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-50 -z-10 bg-[radial-gradient(circle,_#60A5FA_0%,_transparent_70%)] bottom-[10%] -left-[100px] animate-[var(--animate-drift-reverse)]"></div>
      </div>

      <motion.div 
        className="max-w-[1280px] mx-auto flex flex-col gap-16 items-center w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        
        {/* Carousel Content (Moved to top) */}
        <motion.div variants={scaleUpVariants} className="w-full flex flex-col items-center">
          <div 
            className="relative w-full max-w-[1200px] group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            {/* Images Container */}
            <div className="w-full rounded-[24px] shadow-lg overflow-hidden cursor-grab active:cursor-grabbing border border-white/20 bg-black/5">
              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="w-full overflow-x-auto flex snap-x snap-mandatory scrollbar-hide"
              >
                {carouselImages.map((src, i) => (
                  <img key={i} src={src} alt={`Promo ${i + 1}`} className="w-full h-auto shrink-0 snap-center" />
                ))}
              </div>
            </div>

            {/* Left/Right Buttons */}
            <button 
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-md backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-md backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-5">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 text-center max-w-[800px] mt-4">
          <motion.h1 variants={slideUpVariants}>
            Bangun Karir Impian Masa Depanmu Bersama{' '}
            <span className="text-primary relative inline-block">
              Aksademy
              <span className="absolute w-full h-[30%] bottom-[5px] left-0 bg-primary-light -z-10 rounded"></span>
            </span>
          </motion.h1>
          <motion.p variants={slideUpVariants} className="text-xl mb-4 text-gray-700">
            Belajar langsung dari ahli industri dengan kurikulum terupdate. Tersedia bootcamp, webinar, dan course eksklusif.
          </motion.p>
          <motion.div variants={slideUpVariants} className="flex flex-wrap gap-4 justify-center">
            <a href="#program" className="btn btn-primary btn-lg px-8">Mulai Sekarang</a>
            <a href="#" className="btn btn-secondary btn-lg px-8">
              <img src="/icon-wa.svg" alt="WhatsApp" className="w-6 h-6" /> Konsultasi
            </a>
          </motion.div>
        </div>

      </motion.div>
    </header>
  );
}
