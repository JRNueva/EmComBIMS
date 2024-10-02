import React from 'react';
import { DownloadCloud } from 'lucide-react';

function ExportButton({ onExport, isDisabled }) {
  return (
    <button
      onClick={onExport}
      disabled={isDisabled}
      className={`
        bg-gray-100 text-gray-800 
        p-1.5 sm:p-2 md:p-3  /* Responsive padding */
        rounded-lg 
        flex items-center 
        font-semibold font-inter 
        text-xs sm:text-sm md:text-base  /* Responsive text size */
        border-2 border-gray-300
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}  /* Disabled styles */
      `}
    >
      <DownloadCloud 
        className={`
          h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6  /* Responsive icon size */
          mr-1 sm:mr-2  /* Responsive margin */
          ${isDisabled ? 'text-gray-400' : ''}  /* Icon color when disabled */
        `} 
      />
      Export
    </button>
  );
}

export default ExportButton;
