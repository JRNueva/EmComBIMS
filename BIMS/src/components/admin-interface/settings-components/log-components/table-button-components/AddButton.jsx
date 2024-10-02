import React from 'react';
import { Plus } from 'lucide-react';

function AddButton({ onAdd, buttonName }) {
  return (
    <button
      onClick={onAdd}
      className="
        text-white 
        p-2 sm:p-2.5 md:p-3  /* Responsive padding */
        rounded-lg flex items-center 
        font-medium font-inter 
        text-xs sm:text-sm md:text-base  /* Responsive text size */
      "
      style={{ backgroundColor: '#3E5C76' }} // Custom color
    >
      <Plus 
        className="
          h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6  /* Responsive icon size */
          mr-1 sm:mr-2  /* Responsive margin */
        " 
      />
      {buttonName}
    </button>
  );
}

export default AddButton;
