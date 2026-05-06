import { useState, useEffect } from 'react';

const KEY = 'scs-theme';

// Apply theme immediately on module load (before React renders)
const getInitialDark = () => {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem(KEY);
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const applyTheme = (dark) => {
  const root = document.documentElement;
  if (dark) {
    root.classList.add('dark');
    root.classList.remove('light');
    localStorage.setItem(KEY, 'dark');
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem(KEY, 'light');
  }
};

// Apply theme immediately before React hydrates
applyTheme(getInitialDark());

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return [isDark, toggleTheme];
};
