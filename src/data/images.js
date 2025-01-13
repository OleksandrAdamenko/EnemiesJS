// src/data/images.js
export const images = [
    {
      id: 'map1',
      thumb: 'src/assets/images/thumbnails/map1-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/map1-thumb.webp',
      full: 'src/assets/images/optimized/map1.jpg',
      fullWebp: 'src/assets/images/optimized/map1.webp',
      title: 'Geological Map of Region A',
      category: 'Mapping',
      description: 'Detailed geological map showing the stratigraphic units and structural features of Region A. The map includes cross-sections and a comprehensive legend explaining the geological formations and their relationships.'
    },
    {
      id: 'map2',
      thumb: 'src/assets/images/thumbnails/map2-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/map2-thumb.webp',
      full: 'src/assets/images/optimized/map2.jpg',
      fullWebp: 'src/assets/images/optimized/map2.webp',
      title: 'Geological Map of Region B',
      category: 'Mapping',
      description: 'Detailed geological map showing the stratigraphic units and structural features of Region A. The map includes cross-sections and a comprehensive legend explaining the geological formations and their relationships.'
    },
    {
      id: 'tech1',
      thumb: 'src/assets/images/thumbnails/tech1-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/tech1-thumb.webp',
      full: 'src/assets/images/optimized/tech1.jpg',
      fullWebp: 'src/assets/images/optimized/tech1.webp',
      title: 'Geological Map of Region A',
      category: 'Technical',
      description: 'Detailed geological map showing the stratigraphic units and structural features of Region A. The map includes cross-sections and a comprehensive legend explaining the geological formations and their relationships.'
    },
    {
      id: 'tech2',
      thumb: 'src/assets/images/thumbnails/tech2-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/tech2-thumb.webp',
      full: 'src/assets/images/optimized/tech2.jpg',
      fullWebp: 'src/assets/images/optimized/tech2.webp',
      title: 'Geological Map of Region A',
      category: 'Technical',
      description: 'Detailed geological map showing the stratigraphic units and structural features of Region A. The map includes cross-sections and a comprehensive legend explaining the geological formations and their relationships.'
    },
    {
      id: 'plan1',
      thumb: 'src/assets/images/thumbnails/plan1-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/plan1-thumb.webp',
      full: 'src/assets/images/optimized/plan1.jpg',
      fullWebp: 'src/assets/images/optimized/plan1.webp',
      title: 'Geological Map of Region A',
      category: 'Reserves',
      description: 'Detailed geological map showing the stratigraphic units and structural features of Region A. The map includes cross-sections and a comprehensive legend explaining the geological formations and their relationships.'
    },
    {
      id: 'plan2',
      thumb: 'src/assets/images/thumbnails/plan2-thumb.jpg',
      thumbWebp: 'src/assets/images/thumbnails/plan2-thumb.webp',
      full: 'src/assets/images/optimized/plan2.jpg',
      fullWebp: 'src/assets/images/optimized/plan2.webp',
      title: 'Geological Map of Region A',
      category: 'Reserves',
      description: 'Detailed geological map showing the stratigraphic units and structural features of Region A. The map includes cross-sections and a comprehensive legend explaining the geological formations and their relationships.'
    },
  ];
  
  // Вспомогательные функции для работы с изображениями
  export const getImagesByCategory = (category) => {
    if (category === 'all') return images;
    return images.filter(img => img.category.toLowerCase() === category.toLowerCase());
  };
  
  export const getImageById = (id) => {
    return images.find(img => img.id === id);
  };
  
  // Список доступных категорий
  export const categories = [
    { id: 'all', label: 'All' },
    { id: 'mapping', label: 'Mapping' },
    { id: 'technical', label: 'Technical' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'reserves', label: 'Reserves' }
  ];