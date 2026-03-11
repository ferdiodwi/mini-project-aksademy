import React from 'react';
import { motion } from 'framer-motion';

export default function Program() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const slideLeftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="program" className="section bg-bg-light px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          className="max-w-[600px] mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideUpVariants}
        >
          <h2 className="text-3xl md:text-4xl mb-4">Program Unggulan Kami</h2>
          <p>Metode belajar fleksibel sesuai dengan kebutuhan dan targetmu.</p>
        </motion.div>
        
        <div className="flex flex-col gap-24">
          {/* Bootcamp */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={slideLeftVariants} className="order-1 md:order-1 relative">
              <img src="/illustration-bootcamp.webp" alt="Intensive Bootcamp" className="w-full max-w-[500px] mx-auto rounded-[24px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] animate-[var(--animate-float)]" />
            </motion.div>
            <motion.div variants={slideRightVariants} className="order-2 md:order-2">
              <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-primary-light text-primary">Intensif</div>
              <h3 className="text-2xl md:text-3xl mb-3">Bootcamp Profesional</h3>
              <p className="mb-6">
                Program intensif selama 3-6 bulan dengan penyaluran kerja. Cocok untuk career switcher dan pemula yang ingin belajar dari nol hingga siap kerja.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> Live mentoring eksklusif</li>
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> Real-world portfolio project</li>
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> Persiapan wawancara kerja</li>
              </ul>
              <a href="#" className="btn btn-outline-primary mt-4">Lihat Bootcamp</a>
            </motion.div>
          </motion.div>

          {/* Course */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={slideRightVariants} className="order-1 md:order-2 relative">
              <img src="/illustration-course.webp" alt="Online Course" className="w-full max-w-[500px] mx-auto rounded-[24px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] animate-[var(--animate-float)] [animation-delay:-2s]" />
            </motion.div>
            <motion.div variants={slideLeftVariants} className="order-2 md:order-1 md:text-left">
              <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-[#EAF1F8] text-[#14427D]">Fleksibel</div>
              <h3 className="text-2xl md:text-3xl mb-3">Video Course (On-Demand)</h3>
              <p className="mb-6">
                Belajar kapan saja dan di mana saja. Akses materi video HD seumur hidup. Cocok untuk kamu yang memiliki jadwal padat namun ingin terus upskilling.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> Akses materi selamanya</li>
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> Grup diskusi sesama siswa</li>
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> E-Certificate penyelesaian</li>
              </ul>
              <a href="#" className="btn btn-outline-primary mt-4">Eksplor Course</a>
            </motion.div>
          </motion.div>

          {/* Webinar */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={slideLeftVariants} className="order-1 md:order-1 relative">
              <img src="/illustration-webinar.webp" alt="Live Webinar" className="w-full max-w-[500px] mx-auto rounded-[24px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] animate-[var(--animate-float)] [animation-delay:-4s]" />
            </motion.div>
            <motion.div variants={slideRightVariants} className="order-2 md:order-2">
              <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-[#D1FAE5] text-secondary">Live Class</div>
              <h3 className="text-2xl md:text-3xl mb-3">Webinar & Workshop</h3>
              <p className="mb-6">
                Kelas interaktif 1-2 hari untuk membahas topik spesifik dan terhangat di industri. Interaksi langsung dengan expert practitioner.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> Q&A Session eksklusif</li>
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> Modul & Recording session</li>
                <li className="flex items-center gap-3 font-medium text-text-main"><img src="/icon-pen.webp" className="w-5 h-5 opacity-80" /> Networking dengan profesional</li>
              </ul>
              <a href="#" className="btn btn-outline-primary mt-4">Jadwal Webinar</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
