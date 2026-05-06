import React, { useEffect, useRef, useState } from 'react';
import { Globe, ArrowRight, Leaf, Droplets, Wind, Zap, Factory, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoSVG from './LogoSVG';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const buildingRef = useRef(null);
  const textWrapperRef = useRef(null);
  const bottomPanelRef = useRef(null);
  
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [lang, setLang] = useState('ID');

  // Lock body scroll when nav is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isNavOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Reveal Animation
      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      introTl.fromTo(logoRef.current, 
          { y: -20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, delay: 0.2 }
        )
        .fromTo(navRef.current, 
          { y: -20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1 }, "-=0.8"
        )
        .fromTo(textWrapperRef.current, 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2 }, "-=0.6"
        )
        .fromTo(buildingRef.current, 
          { y: 100, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out' }, "-=1.2"
        );

      // 2. Scroll Parallax Animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });

      // Move main text up and fade out (using fromTo to ensure it starts at 1 and doesn't conflict with introTl)
      scrollTl.fromTo(textWrapperRef.current, 
        { y: 0, opacity: 1, scale: 1 },
        { y: -150, opacity: 0, scale: 0.95, duration: 1 }, 
        0
      );

      // Bring bottom panel up
      scrollTl.fromTo(bottomPanelRef.current, 
        { y: 300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }, 
        0
      );

      // Parallax effect on building
      scrollTl.fromTo(buildingRef.current, 
        { y: 0 },
        { y: -50, duration: 1 }, 
        0
      );

    }, sectionRef);

    // 3. Interactive 2D Hover / Tilt effect
    const handleMouseMove = (e) => {
      if (!buildingRef.current) return;
      const xPos = (e.clientX / window.innerWidth) - 0.5;
      const yPos = (e.clientY / window.innerHeight) - 0.5;
      gsap.to(buildingRef.current, {
        rotationY: xPos * 5,
        rotationX: -yPos * 5,
        ease: 'power2.out',
        duration: 1.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[250vh] bg-white">
      
      {/* Sticky wrapper stays in view while outer container scrolls */}
      <div className="sticky top-0 w-full h-screen flex flex-col overflow-hidden">
        
        {/* HEADER AREA (White, exactly like Astra) */}
        <header className="w-full h-24 bg-white flex items-center justify-between px-6 md:px-12 z-40 flex-shrink-0">
          
          {/* Logo Area */}
          <div ref={logoRef} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 overflow-hidden drop-shadow-sm">
              <LogoSVG />
            </div>
            <div className="flex flex-col text-blue-900 border-l-4 border-red-500 pl-3">
              <span className="font-extrabold text-2xl leading-none tracking-tight">SCS</span>
              <span className="text-[8px] font-bold uppercase tracking-widest mt-0.5 whitespace-nowrap">Sinar Cerah Sempurna</span>
            </div>
          </div>

          {/* Navigation Area */}
          <div ref={navRef} className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
              className="bg-gray-100 border border-gray-200 shadow-sm px-4 py-2 rounded-full flex items-center gap-2 text-gray-700 text-sm font-bold hover:bg-gray-200 transition-all"
            >
              <span className={lang === 'ID' ? 'text-blue-600' : 'text-gray-400'}>ID</span>
              <span className="text-gray-300">|</span>
              <span className={lang === 'EN' ? 'text-blue-600' : 'text-gray-400'}>EN</span>
            </button>
            
            <button 
              onClick={() => setIsNavOpen(true)}
              className="bg-white border-2 border-gray-200 w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 hover:bg-gray-50 transition-all z-50"
            >
              <span className="w-5 h-0.5 bg-gray-800 rounded-full"></span>
              <span className="w-5 h-0.5 bg-gray-800 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* MAIN BLUE CARD (Full bleed width, rounded top corners) */}
        <div 
          ref={cardRef}
          className="relative w-full flex-1 rounded-t-[40px] md:rounded-t-[60px] mx-0 md:mx-4 mb-4 overflow-hidden flex bg-blue-500 shadow-inner"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&q=80&w=2000')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.1)'
          }}
        >
          {/* Overlay gradient untuk memastikan teks terbaca jelas dengan warna biru dominan seperti Astra */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a66cc]/95 via-[#2b88eb]/80 to-transparent z-0"></div>
          
          {/* 2D Interactive Building Image (Cutout style) */}
          <div className="absolute bottom-0 right-0 md:right-12 w-full md:w-5/12 h-5/6 z-10 pointer-events-none flex items-end justify-center">
            <div 
              ref={buildingRef} 
              className="relative w-full h-full flex items-end justify-center origin-bottom"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src="/gedung-transparan.png" 
                alt="Gedung SCS" 
                className="w-full h-[110%] object-contain object-bottom drop-shadow-2xl"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800";
                  e.target.className = "w-full h-full object-cover rounded-t-[40px] opacity-80 mix-blend-luminosity";
                }}
              />
            </div>
          </div>

          {/* Main Text Content (Scrolls Up) */}
          <div ref={textWrapperRef} className="absolute top-0 left-0 w-full md:w-7/12 h-full z-20 flex flex-col justify-center px-8 md:px-20 pointer-events-auto">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8 drop-shadow-sm">
              {lang === 'ID' ? (
                <>Untuk Hari Ini<br/>dan Masa<br/>Depan<br/>Indonesia</>
              ) : (
                <>For Today<br/>and the<br/>Future of<br/>Indonesia</>
              )}
            </h1>
            
            {/* Merah Putih Flag Accent */}
            <div className="flex flex-col w-48 mb-10 shadow-lg">
              <div className="h-4 bg-red-600 w-full"></div>
              <div className="h-4 bg-white w-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-white font-medium max-w-xl mb-12 leading-snug drop-shadow-sm">
              {lang === 'ID' 
                ? "Melalui Sinar Cerah 2030 Sustainability Aspirations, kami melangkah pasti dalam perjalanan untuk menjadi perusahaan yang lebih sustainable dan resilient pada tahun 2030 dan ke depannya."
                : "Through Sinar Cerah 2030 Sustainability Aspirations, we are taking decisive steps on our journey to become a more sustainable and resilient company by 2030 and beyond."
              }
            </p>

            <div>
              <button 
                onClick={() => window.scrollBy({ top: window.innerHeight * 2.5, left: 0, behavior: 'smooth' })}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 border border-orange-400/30"
              >
                {lang === 'ID' ? "Baca Selengkapnya" : "Read More"} 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Bottom Panel (Scrolls Up from bottom) */}
          <div ref={bottomPanelRef} className="absolute -bottom-10 left-0 w-full md:w-7/12 z-20 flex flex-col justify-end px-8 md:px-20 pb-20 pointer-events-auto">
            
            {/* Floating Icons with Logo Colors on Hover */}
            <div className="flex flex-wrap gap-4 md:gap-6 mb-10 pl-4">
              {[
                { icon: <Leaf size={28}/>, color: "hover:text-blue-400 hover:border-blue-400" },
                { icon: <Droplets size={28}/>, color: "hover:text-orange-400 hover:border-orange-400" },
                { icon: <Wind size={28}/>, color: "hover:text-yellow-400 hover:border-yellow-400" },
                { icon: <Zap size={28}/>, color: "hover:text-red-400 hover:border-red-400" },
                { icon: <Factory size={28}/>, color: "hover:text-blue-400 hover:border-blue-400" }
              ].map((item, i) => (
                <div key={i} className={`w-16 h-16 bg-white/10 backdrop-blur-md border-2 border-white/40 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
              ))}
            </div>

            {/* Solar Panel Image */}
            <div className="w-full bg-white/10 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-1e97f52ce88b?auto=format&fit=crop&q=80&w=1200" 
                alt="Solar Panels" 
                className="w-full h-48 md:h-72 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* FULLSCREEN NAVIGATION OVERLAY */}
        {isNavOpen && (
          <div className="fixed inset-0 z-50 bg-white flex flex-col">
            {/* Modal Header */}
            <div className="w-full h-24 bg-white flex items-center justify-between px-6 md:px-12 flex-shrink-0 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 overflow-hidden drop-shadow-sm">
                  <LogoSVG />
                </div>
              </div>
              
              <button 
                onClick={() => setIsNavOpen(false)}
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all text-gray-800"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-12 md:px-24">
              <nav className="flex flex-col gap-8 text-4xl md:text-6xl font-bold tracking-tight text-blue-900">
                {['Beranda', 'Tentang Kami', 'Portofolio', 'Hubungan Investor', 'Karir', 'Kontak'].map((item, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setIsNavOpen(false); }}
                    className="hover:text-orange-500 hover:translate-x-4 transition-all duration-300 w-max"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Modal Footer */}
            <div className="p-8 md:p-12 border-t border-gray-100 flex flex-col md:flex-row justify-between text-gray-500 font-medium">
              <p>&copy; 2024 PT Sinar Cerah Sempurna</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-600">LinkedIn</a>
                <a href="#" className="hover:text-blue-600">Instagram</a>
                <a href="#" className="hover:text-blue-600">Twitter</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
