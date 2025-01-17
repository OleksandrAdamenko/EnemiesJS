// src/components/ui/ImageGrid.jsx
import { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

const ImageGrid = ({ images, category = 'all' }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const imageContainerRef = useRef(null);

  // Сброс позиции и масштаба при смене изображения
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [selectedImage]);

  const handleZoom = (delta) => {
    const newScale = Math.min(Math.max(scale + delta, 1), 3);
    setScale(newScale);
    
    // Сброс позиции, если масштаб близок к 1
    if (newScale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !imageContainerRef.current) return;
    const container = imageContainerRef.current;
    const image = container.querySelector('img');
    const containerRect = container.getBoundingClientRect();
    
    if (!image) return;
  
    // Вычисляем новую позицию
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
  
    // Стандартное ограничение по вертикали
    const scaledHeight = containerRect.height * (scale - 1) / 2;
    
    // Определяем ориентацию изображения
    const isLandscape = image.naturalWidth > image.naturalHeight;
  
    // Ограничение по горизонтали в зависимости от ориентации
    const scaledWidth = isLandscape 
      ? containerRect.width * (scale - 1) / 3
      : containerRect.width * (scale - 1) / 15;
  
    // Применяем ограничения
    const boundedX = Math.min(Math.max(newX, -scaledWidth), scaledWidth);
    const boundedY = Math.min(Math.max(newY, -scaledHeight), scaledHeight);
  
    setPosition({
      x: boundedX,
      y: boundedY
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Очистка обработчиков при размонтировании
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  const handleWheel = (e) => {
    if (!selectedImage) return;
  
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(scale + delta, 1), 3);
    setScale(newScale);
    
    // Сброс позиции, если масштаб близок к 1
    if (newScale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const filteredImages = category === 'all' 
    ? images 
    : images.filter(img => img.category.toLowerCase() === category.toLowerCase());

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-transparent"
            onClick={() => setSelectedImage(image)}
          >
            <picture>
              <source 
                srcSet={image.thumbWebp} 
                type="image/webp" 
              />
              <img 
                src={image.thumb} 
                alt={image.title}
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </picture>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
              <span className="inline-block px-2 py-1 mb-1 text-xs font-semibold text-white bg-blue-600 rounded">
                {image.category}
              </span>
              <h3 className="text-white font-medium">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно для полноразмерного изображения */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90">
          {/* Кнопки управления */}
          <div className="absolute top-4 right-4 bg-black/90 rounded-full z-50 flex items-center p-1 gap-2">
            <button 
              onClick={() => handleZoom(-0.2)}
              className="p-2 text-white hover:text-blue-500 rounded-full transition-colors"
            >
              <ZoomOut className="w-6 h-6" />
            </button>
            <button 
              onClick={() => handleZoom(0.2)}
              className="p-2 text-white hover:text-blue-500 rounded-full transition-colors"
            >
              <ZoomIn className="w-6 h-6" />
            </button>
            <button 
              onClick={() => {
                setSelectedImage(null);
                setScale(1);
                setPosition({ x: 0, y: 0 });
              }}
              className="p-2 text-white hover:text-blue-500 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Контейнер с изображением */}
          <div 
            ref={imageContainerRef}
            className="w-full h-full overflow-hidden flex items-center justify-center"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              style={{ 
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease-out'
              }}
            >
              <picture>
                <source srcSet={selectedImage.fullWebp} type="image/webp" />
                <img
                  src={selectedImage.full}
                  alt={selectedImage.title}
                  className="max-w-[90vw] max-h-[90vh] object-contain select-none"
                  draggable={false}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* Информация об изображении остается без изменений */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent">
            <div className="max-w-7xl mx-auto p-6">
              <div className="space-y-3">
                <span className="inline-block px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-medium text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 max-w-7xl">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;