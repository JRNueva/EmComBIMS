import React from 'react';
import { RotateCw } from 'lucide-react'; // Import a 'Restore' icon

function RestoreButton({ onRestore, isDisabled }) {
  return (
    <button
      onClick={onRestore}
      disabled={isDisabled}
      className={`
        text-white bg-[#3E5C76]
        p-1.5 sm:p-2 md:p-3   /* Responsive padding */
        rounded-lg
        flex items-center 
        font-medium font-inter 
        text-xs sm:text-sm md:text-base   /* Responsive text size */
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2d4a5c]'} /* Disabled styles */
      `}
    >
      <RotateCw 
        className={`
          h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6   /* Responsive icon size */
          mr-1 sm:mr-2   /* Responsive margin */
          ${isDisabled ? 'text-gray-400' : ''}  /* Icon color when disabled */
        `} 
      />
      Restore
    </button>
  );
}

export default RestoreButton;
