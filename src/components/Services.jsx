import React, { useEffect, useRef } from 'react';
import { Building, HardHat, Zap, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <HardHat size={40} />,
    title: "Konstruksi Infrastruktur",
    desc: "Membangun jalan tol, jembatan, dan pelabuhan berstandar global dengan teknologi mutakhir."
  },
  {
    icon: <Building size={40} />,
    title: "Pengembangan Properti",
    desc: "Merancang kawasan hunian, komersial, dan gedung pencakar langit bernilai estetik dan fungsional tinggi."
  },
  {
    icon: <Zap size={40} />,
    title: "Manajemen Energi",
    desc: "Solusi elektrifikasi cerdas untuk fasilitas berskala besar guna efisiensi optimal."
  },
  {
    icon: <Leaf size={40} />,
    title: "Solusi Berkelanjutan",
    desc: "Implementasi standar bangunan hijau (Green Building) dan panel surya pada semua proyek strategis."
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-[#000000] relative overflow-hidden transition-colors duration-700">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-10 transition-opacity duration-700" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 transition-colors duration-700">Layanan &<br/>Keahlian.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-700">Kami memberikan layanan end-to-end terintegrasi dengan standar keselamatan dan kualitas tertinggi di industri.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, i) => (
            <div key={i} className="interactive service-card bg-[#f5f5f7] dark:bg-[#1d1d1f] p-10 rounded-[3rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 transition-colors duration-700">{srv.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed transition-colors duration-700">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
