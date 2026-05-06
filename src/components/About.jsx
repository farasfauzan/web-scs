import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Target, TrendingUp, Users, Lightbulb, ShieldCheck, Building, Briefcase, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out"
      });
      
      // Animate numbers
      const counters = document.querySelectorAll('.counter-val');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        gsap.to(counter, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          innerHTML: target,
          duration: 2,
          snap: { innerHTML: 1 },
          ease: "expo.out"
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const missions = [
    { icon: <Building size={24} />, text: "Menyediakan jasa konstruksi dan EPC dengan fokus pada pengembangan gedung dan infrastruktur yang berkelanjutan." },
    { icon: <TrendingUp size={24} />, text: "Menciptakan nilai tambah optimal bagi pemangku kepentingan melalui daya saing tinggi dan sinergi strategis." },
    { icon: <Users size={24} />, text: "Mewujudkan talenta unggul dan tangguh dengan proses pengembangan yang selaras dengan budaya Perusahaan." },
    { icon: <Lightbulb size={24} />, text: "Mencapai kinerja unggul berkelanjutan lewat pengoptimalan inovasi teknologi dan manajemen pengetahuan." },
    { icon: <ShieldCheck size={24} />, text: "Membangun Perusahaan yang berkelanjutan berlandaskan tata kelola yang baik dan keuangan yang sehat." }
  ];

  const pillars = [
    { title: "Konstruksi Gedung", desc: "Membangun mahakarya residensial dan komersial dengan standar kualitas internasional.", icon: <Building size={32} />, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { title: "Sipil & Infrastruktur", desc: "Menjadi agen pembangunan jalan tol, jembatan, dan infrastruktur krusial negara.", icon: <Wrench size={32} />, image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&q=80&w=800" },
    { title: "EPC", desc: "Engineering, Procurement, dan Construction untuk fasilitas energi dan industri berskala besar.", icon: <Briefcase size={32} />, image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800" },
    { title: "Investasi & Properti", desc: "Pengelolaan kawasan dan investasi strategis untuk menjamin nilai tambah jangka panjang.", icon: <TrendingUp size={32} />, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#f5f5f7] dark:bg-[#000000] relative overflow-hidden transition-colors duration-700">
      
      {/* Aesthetic Background Accents */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro & Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="about-item text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-700">Membangun<br/>Masa Depan.</h2>
            <div className="about-item w-20 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-8 shadow-sm"></div>
            <p className="about-item text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-700">
              Sebagai agen pembangunan nasional, PT Sinar Cerah Sempurna didirikan dengan visi menjadi pilar utama dalam pembangunan infrastruktur berskala internasional di Indonesia.
            </p>
            <p className="about-item text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-700">
              Lebih dari 60 tahun pengalaman, kami telah menorehkan rekam jejak yang solid dalam pelaksanaan konstruksi gedung, sipil, EPC, hingga pengelolaan investasi. Setiap karya kami dirancang untuk menyejahterakan masyarakat.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: 60, label: "Tahun Berdiri", suffix: "+" },
              { num: 350, label: "Proyek Selesai", suffix: "+" },
              { num: 98, label: "Kepuasan Klien", suffix: "%" },
              { num: 5000, label: "Pekerja Ahli", suffix: "+" }
            ].map((stat, i) => (
              <div key={i} className="about-item bg-white dark:bg-[#1d1d1f] p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-center items-center text-center hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 flex items-center drop-shadow-sm transition-colors duration-700">
                  <span className="counter-val" data-target={stat.num}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-2 transition-colors duration-700">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="about-item w-full bg-blue-900 rounded-[3rem] p-10 md:p-16 mb-24 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-blue-600/40 rounded-full blur-3xl z-0 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center">
            <Quote className="text-white/20 mb-6 rotate-180" size={64} />
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed max-w-4xl">
              "Sinergi dan Inovasi Meningkatkan Pelayanan Publik. Kami terus memberikan trademark kualitas terbaik dengan optimalisasi teknologi terdepan."
            </h3>
            <p className="text-blue-200 font-medium tracking-wide uppercase">Direksi PT Sinar Cerah Sempurna</p>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="about-item text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-700">Visi & Misi</h2>
            <p className="about-item text-slate-500 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-700">Landasan utama yang mengarahkan setiap langkah dan keputusan strategis perusahaan.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="about-item lg:col-span-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-[3rem] p-10 text-white shadow-xl flex flex-col justify-center relative overflow-hidden hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <Target size={48} className="text-white/30 absolute -top-4 -right-4 w-40 h-40" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Visi Kami</h3>
                <p className="text-xl leading-relaxed font-medium">
                  Menjadi Kontraktor Pilihan Utama yang Inovatif, Unggul dan Berkelanjutan Didukung Keuangan yang Sehat.
                </p>
              </div>
            </div>
            
            <div className="about-item lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {missions.map((m, i) => (
                <div key={i} className="bg-white dark:bg-[#1d1d1f] p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 flex items-start gap-4 hover:shadow-lg transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-700">
                    {m.icon}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium transition-colors duration-700">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pilar Bisnis */}
        <div>
          <div className="text-center mb-16">
            <h2 className="about-item text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-700">Pilar Bisnis Kami</h2>
            <p className="about-item text-slate-500 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-700">Empat fokus utama yang menjadi motor penggerak pertumbuhan dan keberlanjutan perusahaan di kancah global.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="interactive about-item group bg-white dark:bg-[#1d1d1f] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 border border-slate-100 dark:border-slate-800 flex flex-col">
                <div className={`w-full h-56 relative flex items-center justify-center text-white overflow-hidden`}>
                  <img src={pillar.image} alt={pillar.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
                  <div className="relative z-10 p-4 bg-white/20 backdrop-blur-md rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    {pillar.icon}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 transition-colors duration-700">{pillar.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed transition-colors duration-700">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
