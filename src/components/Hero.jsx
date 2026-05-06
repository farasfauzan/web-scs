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
  const [isVideoOpen, setIsVideoOpen] = useState(false);
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
      const introTl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      
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
          { y: 0, opacity: 1, duration: 1.8, ease: 'expo.out' }, "-=1.2"
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
      if (bottomPanelRef.current) {
        scrollTl.fromTo(bottomPanelRef.current, 
          { y: 300, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }, 
          0
        );
      }

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
        duration: 1.5,
        ease: 'expo.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[250vh] bg-white dark:bg-slate-950">
      
      {/* Sticky wrapper stays in view while outer container scrolls */}
      <div className="sticky top-0 w-full h-screen flex flex-col overflow-hidden">
        
        {/* HEADER AREA (White, exactly like Astra) */}
        <header className="w-full h-24 bg-white dark:bg-slate-950 flex items-center justify-between px-6 md:px-12 z-40 flex-shrink-0 transition-colors duration-700">
          
          {/* Logo Area */}
          <div ref={logoRef} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-14 h-14 overflow-hidden drop-shadow-sm">
              <LogoSVG />
            </div>
            <div className="flex flex-col text-blue-900 dark:text-blue-400 border-l-4 border-red-500 pl-3 transition-colors duration-700">
              <span className="font-extrabold text-2xl leading-none tracking-tight">SCS</span>
              <span className="text-[8px] font-bold uppercase tracking-widest mt-0.5 whitespace-nowrap">Sinar Cerah Sempurna</span>
            </div>
          </div>

          {/* Navigation Area */}
          <div ref={navRef} className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
              className="interactive bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm px-4 py-2 rounded-full flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm font-bold hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-700"
            >
              <span className={lang === 'ID' ? 'text-blue-600' : 'text-gray-400'}>ID</span>
              <span className="text-gray-300">|</span>
              <span className={lang === 'EN' ? 'text-blue-600' : 'text-gray-400'}>EN</span>
            </button>
            
            <button 
              onClick={() => setIsNavOpen(true)}
              className="interactive bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 w-11 h-11 rounded-full flex flex-col items-center justify-center gap-1.5 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-700 z-50"
            >
              <span className="w-5 h-0.5 bg-gray-800 dark:bg-white rounded-full transition-colors duration-700"></span>
              <span className="w-5 h-0.5 bg-gray-800 dark:bg-white rounded-full transition-colors duration-700"></span>
            </button>
          </div>
        </header>

        {/* MAIN HERO CONTENT (Apple-Style Full Bleed Minimalist) */}
        <div 
          ref={cardRef}
          className="relative w-full flex-1 mx-0 flex flex-col items-center justify-center bg-transparent overflow-hidden"
        >
          
          {/* Main Text Content (Massive Typography) */}
          <div ref={textWrapperRef} className="absolute inset-0 w-full h-full z-20 flex flex-col items-center justify-center text-center pointer-events-auto mt-[-10vh]">
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter text-slate-900 dark:text-white leading-[0.9] drop-shadow-2xl transition-colors duration-700">
              {lang === 'ID' ? (
                <>Masa Depan<br/>Indonesia.</>
              ) : (
                <>Future of<br/>Indonesia.</>
              )}
            </h1>
            
            <p className="mt-8 text-xl md:text-3xl text-slate-500 dark:text-slate-400 font-medium max-w-3xl mx-auto leading-tight tracking-tight transition-colors duration-700">
              {lang === 'ID' 
                ? "Sinar Cerah Sempurna. Membangun infrastruktur kelas dunia dengan harmoni dan keberlanjutan."
                : "Sinar Cerah Sempurna. Building world-class infrastructure with harmony and sustainability."
              }
            </p>

            <div className="mt-12 flex items-center justify-center gap-6">
              <button 
                onClick={() => window.scrollBy({ top: window.innerHeight * 2.5, left: 0, behavior: 'smooth' })}
                className="interactive bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center gap-3"
              >
                {lang === 'ID' ? "Jelajahi" : "Explore"} 
              </button>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="interactive bg-transparent text-slate-900 dark:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                {lang === 'ID' ? "Tonton Video" : "Watch Film"} <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* 3D Interactive Building Image (Product Reveal Style) */}
          <div className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 w-full md:w-[80vw] lg:w-[60vw] h-[70vh] z-10 pointer-events-none flex items-end justify-center">
            <div 
              ref={buildingRef} 
              className="relative w-full h-full flex items-end justify-center origin-bottom"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img 
                src="/gedung-transparan.png" 
                alt="Gedung SCS" 
                className="w-full h-full object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_40px_80px_rgba(255,255,255,0.05)] transition-all duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200";
                  e.target.className = "w-[80%] h-[80%] object-cover rounded-[3rem] shadow-2xl opacity-90 mix-blend-luminosity mb-10";
                }}
              />
            </div>
          </div>

        </div>

        {/* FULLSCREEN NAVIGATION OVERLAY */}
        {isNavOpen && (
          <div className="fixed inset-0 z-50 bg-white dark:bg-slate-950 flex flex-col transition-colors duration-700">
            {/* Modal Header */}
            <div className="w-full h-24 bg-white dark:bg-slate-950 flex items-center justify-between px-6 md:px-12 flex-shrink-0 border-b border-gray-100 dark:border-slate-800 transition-colors duration-700">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 overflow-hidden drop-shadow-sm">
                  <LogoSVG />
                </div>
              </div>
              
              <button 
                onClick={() => setIsNavOpen(false)}
                className="interactive bg-gray-100 dark:bg-slate-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-700 text-gray-800 dark:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-12 md:px-24">
              <nav className="flex flex-col gap-8 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-700">
                {[
                  {name: 'Beranda', id: 'home'}, 
                  {name: 'Tentang Kami', id: 'about'}, 
                  {name: 'Layanan', id: 'services'}, 
                  {name: 'Portofolio', id: 'portfolio'}, 
                  {name: 'Keberlanjutan', id: 'sustainability'},
                  {name: 'Hubungan Investor', id: 'investor'},
                  {name: 'Pusat Media', id: 'news'},
                  {name: 'Kontak', id: 'contact'}
                ].map((item, i) => (
                  <button 
                    key={i} 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsNavOpen(false); 
                      document.getElementById(item.id)?.scrollIntoView({behavior: 'smooth'});
                    }}
                    className="interactive hover:text-orange-500 hover:translate-x-4 transition-all duration-500 w-max text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Modal Footer */}
            <div className="p-8 md:p-12 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between text-gray-500 dark:text-gray-400 font-medium transition-colors duration-700">
              <p>&copy; 2024 PT Sinar Cerah Sempurna</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-600">LinkedIn</a>
                <a href="#" className="hover:text-blue-600">Instagram</a>
                <a href="#" className="hover:text-blue-600">Twitter</a>
              </div>
            </div>
          </div>
        )}

        {/* VIDEO MODAL OVERLAY */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-700">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-8 right-8 interactive bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 text-white"
            >
              <X size={32} />
            </button>
            
            <div className="w-11/12 md:w-3/4 max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Company Profile Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
