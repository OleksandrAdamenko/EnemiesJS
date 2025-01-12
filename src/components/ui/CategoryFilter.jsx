// src/components/ui/CategoryFilter.jsx
const CategoryFilter = ({ currentCategory, onCategoryChange }) => {
    const categories = ['All', 'Mapping', 'Technical', 'Analysis', 'Reserves'];
  
    return (
      <div className="flex justify-end gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category.toLowerCase())}
            className={`
              px-4 
              py-2 
              rounded-md 
              font-medium 
              text-sm
              whitespace-nowrap
              transition-colors
              ${currentCategory === category.toLowerCase()
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryFilter;