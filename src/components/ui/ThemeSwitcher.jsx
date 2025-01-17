import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useAppTheme } from '../../hooks';

const ThemeSwitcher = () => {
  const { theme, toggleTheme, isDark } = useAppTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeSwitcher;