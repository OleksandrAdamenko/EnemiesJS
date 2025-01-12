// src/components/layout/Main.jsx
import { useState } from 'react';
import ImageGrid from '../ui/ImageGrid';
import CategoryFilter from '../ui/CategoryFilter';

const Main = () => {
  const [currentCategory, setCurrentCategory] = useState('all');

  const images = [
    {
      thumb: 'src/assets/images/thumbnails/map1-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/map1-thumb.webp',
      full: 'src/assets/images/optimized/map1.jpg',
      fullWebp: 'src/assets/images/optimized/map1.webp',
      title: 'Geological Map of Region A',
      category: 'Mapping'
    },
    {
      thumb: 'src/assets/images/thumbnails/map2-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/map2-thumb.webp',
      full: 'src/assets/images/optimized/map2.jpg',
      fullWebp: 'src/assets/images/optimized/map2.webp',
      title: 'Geological Map of Region B',
      category: 'Mapping'
    },
    {
      thumb: 'src/assets/images/thumbnails/tech1-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/tech1-thumb.webp',
      full: 'src/assets/images/optimized/tech1.jpg',
      fullWebp: 'src/assets/images/optimized/tech1.webp',
      title: 'Geological Map of Region A',
      category: 'Technical'
    },
    {
      thumb: 'src/assets/images/thumbnails/tech2-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/tech2-thumb.webp',
      full: 'src/assets/images/optimized/tech2.jpg',
      fullWebp: 'src/assets/images/optimized/tech2.webp',
      title: 'Geological Map of Region A',
      category: 'Technical'
    },
    {
      thumb: 'src/assets/images/thumbnails/plan1-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/plan1-thumb.webp',
      full: 'src/assets/images/optimized/plan1.jpg',
      fullWebp: 'src/assets/images/optimized/plan1.webp',
      title: 'Geological Map of Region A',
      category: 'Reserves'
    },
    {
      thumb: 'src/assets/images/thumbnails/plan2-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/plan2-thumb.webp',
      full: 'src/assets/images/optimized/plan2.jpg',
      fullWebp: 'src/assets/images/optimized/plan2.webp',
      title: 'Geological Map of Region A',
      category: 'Reserves'
    },  
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <CategoryFilter 
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
      />
      <ImageGrid 
        images={images} 
        category={currentCategory}
      />
    </div>
  );
};

export default Main;