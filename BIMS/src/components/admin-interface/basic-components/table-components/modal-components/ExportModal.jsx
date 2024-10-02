import React from 'react';
import { Download, X } from 'lucide-react';
function ExportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center font-inter z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Export Data</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
           <X className="h-7 w-7" />
          </button>
        </div>
        <p className="mb-4 text-sm">
          Choose the format you want to export the data in:
        </p>
        <div className="flex flex-col gap-4 ">
          <button className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-900">
            Export as PDF  
          </button>
          <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-900">
            Export as Excel
          </button>
          <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-900">
            Export as CSV
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExportModal;
