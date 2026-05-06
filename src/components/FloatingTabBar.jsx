import React, { useState, useEffect, useRef } from 'react';
import { Home, Info, HardHat, Briefcase, Leaf, TrendingUp, FileText, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const FloatingTabBar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  
  const tabsRef = useRef({});
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const activeEl = tabsRef.current[activeTab];
    if (!activeEl) return;

    // FLIP Trick to get exact final width of the expanding tab
    const spans = [];
    Object.keys(tabsRef.current).forEach(id => {
      const el = tabsRef.current[id];
      if (el) {
        const span = el.querySelector('.tab-label-container');
        if (span) {
          span.style.transition = 'none';
          if (id === activeTab) {
            span.style.maxWidth = '150px';
            span.style.opacity = '1';
            span.style.marginLeft = '0px';
          } else {
            span.style.maxWidth = '0px';
            span.style.opacity = '0';
            span.style.marginLeft = '-8px';
          }
          spans.push(span);
        }
      }
    });

    void activeEl.offsetWidth; // Force layout reflow

    setIndicatorStyle({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
      opacity: 1
    });

    // Revert inline styles to let CSS classes handle the smooth transition
    spans.forEach(span => {
      span.style.transition = '';
      span.style.maxWidth = '';
      span.style.opacity = '';
      span.style.marginLeft = '';
    });
  }, [activeTab, isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Cegah pill bergoyang/melompat-lompat (jiggle) saat transisi klik
      if (isClickScrolling.current) return;

      const sections = ['home', 'about', 'services', 'portfolio', 'sustainability', 'investor', 'news', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            if (activeTab !== id) {
              setActiveTab(id);
            }
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const tabs = [
    { id: 'home', icon: <Home size={20} />, label: 'Beranda' },
    { id: 'about', icon: <Info size={20} />, label: 'Tentang' },
    { id: 'services', icon: <HardHat size={20} />, label: 'Layanan' },
    { id: 'portfolio', icon: <Briefcase size={20} />, label: 'Portofolio' },
    { id: 'sustainability', icon: <Leaf size={20} />, label: 'ESG' },
    { id: 'investor', icon: <TrendingUp size={20} />, label: 'Investor' },
    { id: 'news', icon: <FileText size={20} />, label: 'Berita' },
    { id: 'contact', icon: <Phone size={20} />, label: 'Kontak' },
  ];

  const handleTabClick = (tabId) => {
    if (activeTab === tabId) return; // Ignore if already active
    
    setActiveTab(tabId);
    isClickScrolling.current = true;
    
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // Aktifkan kembali deteksi scroll setelah animasi smooth scroll selesai
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/50 dark:border-slate-800/50 shadow-2xl rounded-full p-1.5 flex items-center gap-1 overflow-hidden">
        
        {/* Sliding Apple-style Indicator (Flawless slide because tabs are fixed width) */}
        <div 
          className="absolute h-10 top-1.5 bottom-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg z-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ 
            left: `${indicatorStyle.left}px`, 
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity 
          }}
        />

        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={el => tabsRef.current[tab.id] = el}
              onClick={() => handleTabClick(tab.id)}
              className={`relative z-10 interactive flex items-center justify-center h-10 px-4 rounded-full transition-colors duration-500 group ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <div className="flex items-center gap-2 transition-transform duration-200 group-active:scale-90 group-active:opacity-80">
                {tab.icon}
                <span 
                  className={`tab-label-container font-bold text-sm tracking-wide whitespace-nowrap overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isActive ? 'max-w-[150px] opacity-100 ml-0' : 'max-w-0 opacity-0 -ml-2'}`}
                >
                  {tab.label}
                </span>
              </div>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-6 bg-slate-300 dark:bg-slate-700 mx-2 z-10" />
        
        {/* Theme Toggle Button */}
        <div className="relative z-10 interactive">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default FloatingTabBar;
