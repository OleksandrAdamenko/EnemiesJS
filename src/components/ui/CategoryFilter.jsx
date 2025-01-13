// src/components/ui/CategoryFilter.jsx
const CategoryFilter = ({ categories, currentCategory, onCategoryChange }) => {
    return (
      <div className="flex justify-end gap-2 overflow-x-auto pb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-4 
              py-2 
              rounded-md 
              font-medium 
              text-sm
              whitespace-nowrap
              transition-colors
              ${currentCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }
            `}
          >
            {category.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryFilter;