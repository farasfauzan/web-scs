import React, { useState, useEffect } from 'react';
import { Home, Info, HardHat, Briefcase, Phone } from 'lucide-react';

const FloatingTabBar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show tab bar after scrolling past the Welcome screen
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Basic scroll spy logic
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is at or above the middle of the viewport
          if (rect.top <= window.innerHeight / 2) {
            setActiveTab(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'home', icon: <Home size={20} />, label: 'Beranda' },
    { id: 'about', icon: <Info size={20} />, label: 'Tentang' },
    { id: 'services', icon: <HardHat size={20} />, label: 'Layanan' },
    { id: 'portfolio', icon: <Briefcase size={20} />, label: 'Portofolio' },
    { id: 'contact', icon: <Phone size={20} />, label: 'Kontak' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full p-1.5 flex items-center gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative flex items-center justify-center h-12 px-4 md:px-5 rounded-full transition-all duration-500 overflow-hidden ${isActive ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full z-0"></div>
              )}
              <div className="relative z-10 flex items-center gap-2">
                {tab.icon}
                <span className={`font-bold text-sm tracking-wide whitespace-nowrap transition-all duration-500 ${isActive ? 'w-auto opacity-100' : 'w-0 opacity-0 hidden md:block md:w-0'}`}>
                  {isActive ? tab.label : ''}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingTabBar;
