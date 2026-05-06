import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import LogoSVG from './LogoSVG';

const Welcome = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for text
      gsap.fromTo(".welcome-text", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.5
        }
      );
      
      // Bouncing scroll indicator
      gsap.fromTo(".scroll-indicator", 
        { y: -15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut"
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-orange-50/50 z-0"></div>
      
      {/* Decorative Blur Circles representing logo colors */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-[20%] right-[-5%] w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-6 md:px-12 flex flex-col items-center">
        {/* Logo / Icon */}
        <div className="w-24 h-24 bg-white shadow-xl rounded-[2rem] flex items-center justify-center mb-8 welcome-text border border-slate-100 p-2">
          <LogoSVG />
        </div>

        <h2 className="welcome-text text-xs md:text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-6">
          Selamat Datang di
        </h2>
        
        <h1 className="welcome-text text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
          PT Sinar Cerah <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-500 to-red-500">
            Sempurna
          </span>
        </h1>
        
        <p className="welcome-text text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
          Membangun masa depan infrastruktur Indonesia dengan fondasi inovasi, kualitas, dan keberlanjutan.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="scroll-indicator absolute bottom-12 flex flex-col items-center gap-2 text-slate-400 cursor-pointer hover:text-orange-500 transition-colors" 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Welcome;
