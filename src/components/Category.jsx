import React from 'react';

const categories = [
  {
    title: 'Web App Development',
    desc: 'Mulai dari Front-end hingga Back-end menggunakan teknologi modern.',
    icon: '/web-app-icon.webp',
    bgClass: 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB]',
    delay: ''
  },
  {
    title: 'Graphic Design',
    desc: 'Kembangkan kreativitas visualmu dengan tools desain profesional.',
    icon: '/graphic-design-icon.webp',
    bgClass: 'bg-gradient-to-br from-[#EC4899] to-[#BE185D]',
    delay: 'delay-100' // Using tailwind utilities for delay if we build intersect observer, but for now simple setup
  },
  {
    title: 'Data Science',
    desc: 'Analisis data dan Machine Learning untuk keputusan bisnis.',
    icon: '/data-science-icon.webp',
    bgClass: 'bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]',
    delay: 'delay-200'
  },
  {
    title: 'Accounting & Tax',
    desc: 'Pelajari pembukuan, laporan keuangan, dan perpajakan dasar.',
    icon: '/accounting-tax-icon.webp',
    bgClass: 'bg-gradient-to-br from-[#10B981] to-[#059669]',
    delay: 'delay-300'
  }
];

export default function Category() {
  return (
    <section id="kategori" className="section bg-white px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[600px] mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Pilih Kategori Belajar</h2>
          <p>Kuasai skill yang paling dicari perusahaan saat ini.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className={`bg-white p-8 md:p-10 rounded-[24px] shadow-md border-t-0 border border-black/5 relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"
              ></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${cat.bgClass}`}>
                <img src={cat.icon} alt={cat.title} className="w-8 h-8 brightness-0 invert" />
              </div>
              <h3 className="text-xl mb-3">{cat.title}</h3>
              <p className="text-base text-text-muted">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
