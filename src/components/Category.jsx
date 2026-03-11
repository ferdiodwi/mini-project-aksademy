import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Web App Development',
    desc: 'Mulai dari Front-end hingga Back-end menggunakan teknologi modern.',
    icon: '/web-app-icon.webp'
  },
  {
    title: 'Graphic Design',
    desc: 'Kembangkan kreativitas visualmu dengan tools desain profesional.',
    icon: '/graphic-design-icon.webp'
  },
  {
    title: 'Data Science',
    desc: 'Analisis data dan Machine Learning untuk keputusan bisnis.',
    icon: '/data-science-icon.webp'
  },
  {
    title: 'Accounting & Tax',
    desc: 'Pelajari pembukuan, laporan keuangan, dan perpajakan dasar.',
    icon: '/accounting-tax-icon.webp'
  }
];

export default function Category() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="kategori" className="section bg-[#F8FAFC] px-6">
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          className="max-w-[600px] mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-4">Pilih Kategori Belajar</h2>
          <p className="text-gray-600">Kuasai skill yang paling dicari perusahaan saat ini.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              className="bg-white rounded-[16px] shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              {/* Image Section */}
              <div className="w-full overflow-hidden bg-[#0A1A3A]">
                 <img 
                    src={cat.icon} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                 />
              </div>
              
              {/* Text Section */}
              <div className="p-6 text-center flex-grow flex flex-col justify-start">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{cat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
