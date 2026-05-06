import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
      
      // Animate numbers
      const counters = document.querySelectorAll('.counter-val');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        gsap.to(counter, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          ease: "power2.out"
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="about-item text-4xl md:text-5xl font-bold text-slate-900 mb-6">Membangun Fondasi untuk Masa Depan</h2>
            <div className="about-item w-20 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8"></div>
            <p className="about-item text-lg text-slate-600 mb-6 leading-relaxed">
              PT Sinar Cerah Sempurna didirikan dengan visi menjadi pilar utama dalam pembangunan infrastruktur berskala internasional di Indonesia. Selama lebih dari dua dekade, kami telah menorehkan rekam jejak yang solid dalam menghasilkan proyek-proyek inovatif.
            </p>
            <p className="about-item text-lg text-slate-600 leading-relaxed">
              Kami tidak hanya membangun gedung atau jalan; kami membangun kehidupan. Setiap mahakarya kami dirancang dengan mengedepankan fungsionalitas, estetika, dan standar keberlanjutan lingkungan yang ketat.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: 25, label: "Tahun Pengalaman", suffix: "+" },
              { num: 150, label: "Proyek Selesai", suffix: "+" },
              { num: 98, label: "Kepuasan Klien", suffix: "%" },
              { num: 3000, label: "Pekerja Ahli", suffix: "+" }
            ].map((stat, i) => (
              <div key={i} className="about-item bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 flex items-center">
                  <span className="counter-val" data-target={stat.num}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
