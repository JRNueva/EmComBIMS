import { useState } from 'react';
import CategoryButton from "./table-button-components/CategoryButton";

function TableActions({ labeltxt, categories, filtervalue, InsertButton, onCategorySelect }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategorySelect(category);  // Pass the selected category up to the parent
  };

  return (
    <div className="mt-4 ml-20 bg-gray-100 flex flex-col sm:flex-row justify-between items-center h-[115px] p-4">
      <div className="flex flex-col space-y-1 mb-4 sm:mb-0">
        <div className="flex space-x-2 items-start">
          <h3 className="font-semibold text-gray-700 font-inter text-sm sm:text-base">{labeltxt}</h3>
          <p className="text-gray-400 py-1 font-inter text-xs sm:text-sm" style={{ fontSize: '10px' }} >{filtervalue}</p>
        </div>
        <div className="flex space-x-4 items-start">
          {categories.map((category, index) => (
            <CategoryButton 
              key={index} 
              categoryName={category} 
              isActive={category === activeCategory} 
              onCategory={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        {InsertButton}
      </div>
    </div>
  );
}

export default TableActions;
