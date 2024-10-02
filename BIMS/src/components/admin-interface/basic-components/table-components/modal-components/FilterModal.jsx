import React from 'react';
import { X } from 'lucide-react';

function FilterModal({ isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 font-inter">
      <div className="bg-white w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg">
        {/* Modal content */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Filter</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X className="h-7 w-7" />
          </button>
        </div>

        {/* Filter form - pwede pa dagdagan*/}
        <div className="mt-4 space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none shadow-sm focus:ring-lowestBlue focus:border-lowestBlue"
            />
          </div>
        </div>

        {/* Action button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-lowBlue text-white px-4 py-2 rounded-lg hover:bg-mediumBlue"
            /*onClick={onClose}*/>
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
