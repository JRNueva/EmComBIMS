import React from 'react';
import { Select, Option } from "@material-tailwind/react";

export default function SelectDefault({
  obj,
  value,
  onChange,
  error,
  disabled = false,
}) {
  const {
    label,
    options,
    required,
    defaultValue,
  } = obj;

  const displayLabel = required ? (
    <span>
      {label} <span className="text-red-500">*</span>
    </span>
  ) : (
    label
  );

  const selectedValue = disabled ? defaultValue || value : value;

  return (
    <div className="flex flex-col w-72 h-fit gap-1 font-inter">
      <label className={`text-sm ${error ? 'text-red-500' : 'text-blue-gray-800'}`}>
        {displayLabel}
      </label>
      <Select
        color="blue-gray"
        className={`border ${error ? '!border-red-500' : '!border-blue-gray-200'} 
                focus:border-2 focus:${error ? '!border-red-500' : '!border-blue-gray-600'} 
                ${disabled ? 'bg-gray-200' : 'bg-white'}`}
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        value={selectedValue}
        onChange={disabled ? () => {} : onChange}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <Option
            key={index}
            value={option.replace(/\s+/g, '_').toLowerCase()}
          >
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
}
