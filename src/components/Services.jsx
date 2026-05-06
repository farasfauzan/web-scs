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
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Layanan & Keahlian</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Kami memberikan layanan end-to-end terintegrasi dengan standar keselamatan dan kualitas tertinggi di industri.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, i) => (
            <div key={i} className="service-card bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {srv.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{srv.title}</h3>
              <p className="text-slate-500 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
