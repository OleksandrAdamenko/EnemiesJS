// src/components/ui/ImageGrid.jsx
import { useState } from 'react';
import { X } from 'lucide-react';

const ImageGrid = ({ images, category = 'all' }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState({});

  const filteredImages = category === 'all' 
    ? images 
    : images.filter(img => img.category.toLowerCase() === category.toLowerCase());

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(image)}
          >
            {/* Используем picture для поддержки WebP */}
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
                onLoad={() => setIsImageLoading(prev => ({ ...prev, [index]: false }))}
              />
            </picture>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-white bg-blue-600 rounded">
                {image.category}
              </span>
              <h3 className="text-white font-medium">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно для полноразмерного изображения */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          <picture>
            <source 
              srcSet={selectedImage.fullWebp} 
              type="image/webp" 
            />
            <img
              src={selectedImage.full}
              alt={selectedImage.title}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              loading="lazy"
            />
          </picture>
          <div className="absolute bottom-4 left-4 right-4 text-center text-white">
            <span className="inline-block px-2 py-1 mb-2 text-sm font-semibold bg-blue-600 rounded">
              {selectedImage.category}
            </span>
            <h3 className="text-lg font-medium">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;