// src/hooks/index.js
import { useTheme } from '../contexts/ThemeContext';
import { useContext } from 'react';

// Хук для работы с темой
export const useAppTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
};

// Хук для работы с настройками приложения
export const useAppSettings = () => {
  const { t, currentLanguage, toggleLanguage } = useLocalization();
  const { theme, toggleTheme, isDark } = useAppTheme();

  return {
    // Тема
    theme,
    toggleTheme,
    isDark,
    
    // Вспомогательные функции можно добавлять здесь
  };
};