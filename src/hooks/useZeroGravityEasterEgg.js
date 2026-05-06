import { useEffect } from 'react';
import gsap from 'gsap';

const useZeroGravityEasterEgg = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isZeroGravityActive = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollSpeed = lastScrollY - currentScrollY; // Positive means scrolling UP
      
      // If user scrolls up violently and hits top
      if (scrollSpeed > 100 && currentScrollY <= 0 && !isZeroGravityActive) {
        triggerZeroGravity();
      }
      
      lastScrollY = currentScrollY;
    };

    const triggerZeroGravity = () => {
      isZeroGravityActive = true;
      const elements = document.querySelectorAll('h1, h2, p, button, .glass-panel, img, .project-card');
      
      // Save original positions implicitly by GSAP from/to logic
      
      // Explode outwards
      elements.forEach((el) => {
        gsap.to(el, {
          y: (Math.random() - 0.5) * 500,
          x: (Math.random() - 0.5) * 500,
          rotation: (Math.random() - 0.5) * 90,
          duration: 1.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      });

      // Snap back after 2 seconds
      setTimeout(() => {
        elements.forEach((el) => {
          gsap.to(el, {
            y: 0,
            x: 0,
            rotation: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.3)",
          });
        });
        
        setTimeout(() => {
          isZeroGravityActive = false;
        }, 1200);
      }, 2000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useZeroGravityEasterEgg;
