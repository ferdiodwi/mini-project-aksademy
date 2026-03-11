import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "Berkat Bootcamp Aksademy, saya yang awalnya tidak punya background IT sama sekali sekarang berhasil direkrut sebagai Frontend Developer di startup ternama. Mentornya luar biasa sabar!",
    author: {
      name: 'Rizky Maulana',
      handle: '@rizky_dev',
      imageUrl: 'https://i.pravatar.cc/150?u=rizky',
    },
  },
  {
    content: "Materi Graphic Design di sini sangat praktikal. Bukan sekadar teori, tapi kita diajarkan membuat portofolio yang benar-benar dilirik HRD. Sangat direkomendasikan!",
    author: {
      name: 'Sarah Nabila',
      handle: '@sarahnabila_design',
      imageUrl: 'https://i.pravatar.cc/150?u=sarah',
    },
  },
  {
    content: "Webinarnya selalu menghadirkan praktisi ahli. Sesi Q&A-nya sangat insightfull untuk saya yang sedang merintis karir di bidang Data Science.",
    author: {
      name: 'Budi Santoso',
      handle: '@budidata',
      imageUrl: 'https://i.pravatar.cc/150?u=budi',
    },
  },
  {
    content: "Kelas Accounting & Tax membantu saya membereskan pembukuan bisnis kecil saya. Penjelasannya mudah dipahami orang awam.",
    author: {
      name: 'Anita Wijaya',
      handle: '@anita_w',
      imageUrl: 'https://i.pravatar.cc/150?u=anita',
    },
  },
  {
    content: "Sistem belajarnya fleksibel. Saya bisa tetap bekerja sambil ikut kelas malam. Komunitasnya juga supportif, sering berbagi info lowongan kerja.",
    author: {
      name: 'Deni Setiawan',
      handle: '@denis_code',
      imageUrl: 'https://i.pravatar.cc/150?u=deni',
    },
  },
  {
    content: "Investasi terbaik untuk karir saya tahun ini. Sertifikat dari Aksademy benar-benar ditanyakan dan dihargai saat interview kerja.",
    author: {
      name: 'Putri Maharani',
      handle: '@putrimhrn',
      imageUrl: 'https://i.pravatar.cc/150?u=putri',
    },
  },
];

export default function Testimonial() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Helper to chunk array for masonry columns
  const chunkArray = (arr, numChunks) => {
    const chunks = Array.from({ length: numChunks }, () => []);
    arr.forEach((item, index) => {
      chunks[index % numChunks].push(item);
    });
    return chunks;
  };

  const desktopColumns = chunkArray(testimonials, 3);
  const tabletColumns = chunkArray(testimonials, 2);

  const TestimonialCard = ({ testimonial }) => (
    <motion.div 
      variants={itemVariants}
      className="bg-[#181E29] rounded-2xl p-6 shadow-md border border-white/5"
    >
      <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-4">
        <img src={testimonial.author.imageUrl} alt={testimonial.author.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-gray-800" />
        <div>
          <div className="text-white font-medium text-sm md:text-base">{testimonial.author.name}</div>
          <div className="text-gray-400 text-xs md:text-sm">{testimonial.author.handle}</div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="testimoni" className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Background glow omitted for closer match to user's second screenshot which is flatter dark bg, or keep subtle */}
      <div className="absolute top-0 right-1/4 w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-primary-light font-semibold tracking-wide text-sm md:text-base mb-3 text-[#14427D]">Testimoni</h2>
          <p className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Kami telah belajar bersama ribuan orang hebat
          </p>
        </motion.div>

        {/* Masonry Grid Setup */}
        <motion.div 
          className="hidden lg:grid grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {desktopColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {col.map((item, idx) => (
                <TestimonialCard key={idx} testimonial={item} />
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="hidden md:grid lg:hidden grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tabletColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {col.map((item, idx) => (
                <TestimonialCard key={idx} testimonial={item} />
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="flex md:hidden flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} testimonial={item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
