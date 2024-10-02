import { useState, useEffect } from 'react';
import CategoryButton from "../button-components/CategoryButton";

function TableActions({ labeltxt, categories, filtervalue, InsertButton, onCategorySelect, activeCategory }) {
  const [localActiveCategory, setLocalActiveCategory] = useState("All");

  useEffect(() => {
    setLocalActiveCategory(activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setLocalActiveCategory(category);
    onCategorySelect(category);  
  };

  return (
    <div className="pt-4 pl-28 pr-10 bg-gray-100 flex flex-col sm:flex-row justify-between items-center h-[115px]">
      <div className="flex flex-col mb-4 sm:mb-0">
        <div className="flex space-x-2 items-start">
          <h3 className="font-semibold text-gray-700 font-inter ml-1 text-lg ">{labeltxt}</h3>
          <p className="text-gray-400 my-auto font-inter text-xs sm:text-sm xy-auto" style={{ fontSize: '10px' }} >{filtervalue}</p>
        </div>
        <div className="flex space-x-4 items-start ml-1">
          {categories.map((category, index) => (
            <CategoryButton 
              key={`${category}-${index}`} 
              categoryName={category} 
              isActive={category === localActiveCategory} 
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