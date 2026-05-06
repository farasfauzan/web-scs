import { useEffect } from 'react';
import gsap from 'gsap';

const useMagneticCursor = (cursorRef) => {
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Smooth follow using GSAP ticker
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      gsap.set(cursor, { x: cursorX, y: cursorY });
    };

    gsap.ticker.add(animateCursor);

    // Magnetic effect for interactables
    const magneticElements = document.querySelectorAll('button, a, .magnetic-item');
    
    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 2, duration: 0.3, ease: 'power2.out' });
      });
      
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Attract element slightly towards mouse
        const distX = (e.clientX - centerX) * 0.3;
        const distY = (e.clientY - centerY) * 0.3;
        
        gsap.to(el, { x: distX, y: distY, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)', overwrite: 'auto' });
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(animateCursor);
    };
  }, [cursorRef]); // Added dependency to re-run if ref changes
};

export default useMagneticCursor;
