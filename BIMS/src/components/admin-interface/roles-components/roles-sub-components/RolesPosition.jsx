import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const RolesPosition = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "Kagawad", label: "Kagawad" },
    { value: "Secretary", label: "Secretary" },
    { value: "Treasurer", label: "Treasurer" },
    { value: "SK-Chairman", label: "SK-Chairman" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 font-inter">
        Position in Barangay: SAMPLE <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="mt-1 flex w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-lowestBlue focus:border-lowestBlue text-left items-center justify-between font-inter"
        >
          <span>{selectedOption || "Select position"}</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>
        {isOpen && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className="cursor-pointer px-4 py-2 hover:bg-tableHover transition duration-150 ease-in-out"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RolesPosition;
