import React from 'react';
import { ListFilter } from 'lucide-react';

function FilterButton({ onFilter }) {
  return (
    <button
      onClick={onFilter}
      className="
        text-gray-800 
        p-1.5 sm:p-2 md:p-3  /* Responsive padding */
        flex items-center 
        font-semibold font-inter 
        text-xs sm:text-sm md:text-base  /* Responsive text size */
      "
    >
      <ListFilter 
        className="
          h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6  /* Responsive icon size */
          mr-1 sm:mr-2  /* Responsive margin */
        " 
      />
      Filter
    </button>
  );
}

export default FilterButton;
