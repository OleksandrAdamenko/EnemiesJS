// src/components/ui/Modal.jsx
import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children 
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Оверлей (для desktop) */}
      <div 
        className="hidden sm:block fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      
      {/* Модальное окно */}
      <div className={`
        fixed 
        top-0 
        mt-16
        sm:mt-0
        sm:top-1/2
        left-0
        sm:left-1/2
        w-full
        sm:w-[600px]
        h-screen
        sm:h-auto
        sm:-translate-x-1/2 
        sm:-translate-y-1/2
        bg-white 
        dark:bg-gray-800
        border-t
        sm:border-t-0
        sm:rounded-lg
        shadow-xl
        z-50
      `}>
        {/* Заголовок */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <button 
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            onClick={onClose}
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        {/* Контент */}
        <div className="p-6 overflow-y-auto sm:max-h-[calc(90vh-8rem)]">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;