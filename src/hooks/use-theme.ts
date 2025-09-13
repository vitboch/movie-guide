'use client';

import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateResolvedTheme = () => {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setResolvedTheme(systemPrefersDark ? 'dark' : 'light');
    };

    updateResolvedTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      updateResolvedTheme();
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [resolvedTheme]);

  return {
    resolvedTheme,
  };
};
