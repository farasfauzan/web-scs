import React, { useState } from 'react';

const LiveProjectOrbit = ({ progress, projectName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div 
      className="relative flex items-center justify-center w-64 h-64 magnetic-item cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG Circular Progress */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#1D1D1F"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Center Content */}
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-4xl font-black text-space-grey">{progress}%</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1">Selesai</span>
      </div>

      {/* Hover Video Overlay */}
      <div 
        className={`absolute inset-0 rounded-full overflow-hidden transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Mockup video using a placeholder gradient since we don't have a video file */}
        <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold text-center p-4">
          [Drone Video Playing] <br/> {projectName}
        </div>
      </div>
    </div>
  );
};

export default LiveProjectOrbit;
