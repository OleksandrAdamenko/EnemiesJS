import { useState } from 'react';
import { Info, Mail, Linkedin } from 'lucide-react';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import About from '../modals/About';
import Feedback from '../modals/Feedback';

import avatar from '../../assets/aleks_adams.jpg';

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="h-full container mx-auto px-4 flex justify-between items-center">
        {/* Left section - Avatar and Name */}
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt="AA"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Aleksandr Adamenko
          </span>
        </div>

        {/* Right section - Action buttons */}
        <div className="flex items-center gap-2">
          {/*
          <button 
            onClick={() => setIsAboutOpen(true)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <Info className="h-[20px] w-[20px]" />
          </button>

          <button 
            onClick={() => setIsFeedbackOpen(true)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <Mail className="h-[20px] w-[20px]" />
          </button>
          */}

          <a 
            href="https://www.linkedin.com/in/aleksandr-adamenko-81620a28b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <Linkedin className="h-[20px] w-[20px]" />
          </a>

          <ThemeSwitcher />
        </div>
      </div>

      {/* Модальные окна */}
      <About 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
      <Feedback 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />
    </header>
  );
};

export default Header;