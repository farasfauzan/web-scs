import React, { useState } from 'react';
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
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
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
