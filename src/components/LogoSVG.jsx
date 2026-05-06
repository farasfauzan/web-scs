import React from 'react';

const LogoSVG = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Red Rays */}
      {/* Top Ray */}
      <path d="M45,35 L25,10 L20,13 L40,38 Z" fill="#FF0000" stroke="#000000" strokeWidth="0.5"/>
      {/* Middle Ray */}
      <path d="M40,48 L15,35 L12,39 L37,52 Z" fill="#FF0000" stroke="#000000" strokeWidth="0.5"/>
      {/* Bottom Ray */}
      <path d="M38,62 L10,58 L9,62 L35,66 Z" fill="#FF0000" stroke="#000000" strokeWidth="0.5"/>

      {/* Yellow Head */}
      <circle cx="75" cy="25" r="10" fill="#FFFF00" stroke="#000000" strokeWidth="1"/>

      {/* Blue Body (Belly) */}
      <path 
        d="M60,40 C40,50 35,75 50,85 C45,65 55,50 65,45 Z" 
        fill="#2563EB" 
        stroke="#000000" 
        strokeWidth="1"
      />

      {/* Orange Back/Legs (Wraps around) */}
      <path 
        d="M60,35 C75,45 80,75 35,95 C60,90 70,60 55,40 Z" 
        fill="#F97316" 
        stroke="#000000" 
        strokeWidth="1"
      />
    </svg>
  );
};

export default LogoSVG;
