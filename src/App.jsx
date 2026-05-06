import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import Preloader from './components/Preloader';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Sustainability from './components/Sustainability';
import Investor from './components/Investor';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingTabBar from './components/FloatingTabBar';
import useZeroGravityEasterEgg from './hooks/useZeroGravityEasterEgg';
function App() {
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);
  useZeroGravityEasterEgg();

  return (
    <>
      {/* Custom Premium Cursor */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[99999] mix-blend-difference bg-white transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        aria-hidden="true"
      />
      <Preloader onComplete={() => setLoading(false)} />

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'} w-full min-h-screen dark:bg-[#000000]`}>
        <Routes>
          <Route path="/" element={
            <main className="relative">
              <Welcome />
              <div id="home"><Hero /></div>
              <div id="about"><About /></div>
              <div id="services"><Services /></div>
              <div id="portfolio"><Portfolio /></div>
              <div id="sustainability"><Sustainability /></div>
              <div id="investor"><Investor /></div>
              <div id="news"><News /></div>
              <div id="contact"><Contact /></div>
              <Footer />
              <FloatingTabBar />
            </main>
          } />
        </Routes>

      </div>
    </>
  );
}

export default App;
