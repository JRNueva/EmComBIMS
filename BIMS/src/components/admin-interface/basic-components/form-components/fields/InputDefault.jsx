import React from 'react';
import { Input, Textarea } from "@material-tailwind/react";

export default function InputDefault({
  obj,
  onChange,
  value,
  error,
  disabled = false,
}) {
  const { 
    label, 
    inputType, 
    placeholder, 
    required,  
  } = obj;

  let Component;
  let formattedValue;

  if (inputType === 'textarea') {
    Component = Textarea;
  } else {
    Component = Input;
  }

  if (inputType === 'num') {
    formattedValue = value.replace(/[^\d\s]/g, '');
  } else {
    formattedValue = value;
  }

  const displayLabel = required ? (
    <span>
      {label} <span className="text-red-500">*</span>
    </span>
  ) : label;

  return (
    <div className="flex flex-col w-72 h-fit gap-1 font-inter">
      <label className={`text-sm ${error ? 'text-red-500' : 'text-blue-gray-800'}`}>
        {displayLabel}
      </label>
      <Component
        color="blue-gray"
        className={`border ${error ? '!border-red-500' : '!border-blue-gray-200'} focus:border-2 focus:${error ? '!border-red-500' : '!border-blue-gray-600'}`}
        labelProps={{
            className: "before:content-none after:content-none",
        }}
        placeholder={placeholder}
        value={formattedValue}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
