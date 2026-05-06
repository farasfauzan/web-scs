import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const dotRef = useRef(null);
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      }
    });

    // Initial dot appears
    tl.fromTo(dotRef.current, 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    )
    // Dot expands into a precise architectural line
    .to(dotRef.current, { scaleX: 0, opacity: 0, duration: 0.2, delay: 0.5 })
    .fromTo(lineRef.current,
      { scaleX: 0, opacity: 1 },
      { scaleX: 1, duration: 0.8, ease: "power4.inOut" }
    )
    // Line fades out / explodes
    .to(lineRef.current, { scaleY: 20, opacity: 0, duration: 0.4, ease: "power2.out" })
    .to(containerRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" });

  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-titanium flex items-center justify-center overflow-hidden"
    >
      <div 
        ref={dotRef}
        className="w-3 h-3 bg-space-grey rounded-full absolute"
      />
      <div 
        ref={lineRef}
        className="h-[1px] w-full max-w-3xl bg-space-grey absolute origin-center"
        style={{ scale: '0 1' }}
      />
    </div>
  );
};

export default Preloader;
