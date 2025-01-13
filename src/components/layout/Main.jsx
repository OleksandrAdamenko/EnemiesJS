// src/components/layout/Main.jsx
import { useState, useEffect } from 'react';
import ImageGrid from '../ui/ImageGrid';
import CategoryFilter from '../ui/CategoryFilter';
import { images, categories } from '../../data/images';

const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-[calc(100vh-64px)] pt-[12px] max-w-7xl mx-auto flex flex-col"> {/* h-[calc(100vh-64px)] для вычета высоты header */}
      {/* Фиксированный блок с фильтрами */}
      <div className={`
        sticky pt-[12px] 
        bg-white dark:bg-gray-900 
        z-30 
        transition-colors duration-200
        ${isScrolled ? 'shadow-md' : ''}
      `}>
        <div className="container mx-auto px-4">
          <CategoryFilter 
            categories={categories}
            currentCategory={currentCategory}
            onCategoryChange={setCurrentCategory}
          />
        </div>
      </div>

      {/* Прокручиваемый контент с карточками */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-4">
          <ImageGrid 
            images={images} 
            category={currentCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;