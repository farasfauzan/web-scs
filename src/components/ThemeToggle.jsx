import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-90"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon (Visible in dark mode, slides down when switching to light) */}
        <Sun 
          className={`absolute text-yellow-400 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isDark ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-90'}`} 
          size={20} 
        />
        {/* Moon Icon (Visible in light mode, slides up when switching to dark) */}
        <Moon 
          className={`absolute text-slate-700 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isDark ? '-translate-y-10 opacity-0 -rotate-90' : 'translate-y-0 opacity-100 rotate-0'}`} 
          size={20} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
