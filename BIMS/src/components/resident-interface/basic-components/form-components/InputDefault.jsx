import React from 'react';
import { Input, Textarea } from "@material-tailwind/react";

export default function InputDefault({ obj, onChange, value, error }) {

  const { label, inputType, placeholder, required } = obj;

  const Component = inputType === 'textarea' ? Textarea : Input;
  const formattedValue = inputType === 'num' ? value.replace(/[^\d\s]/g, '') : value;

  return (
    <Component
      color="blue-gray"
      className="w-full font-inter"
      label={label}
      placeholder={placeholder} 
      value={formattedValue} 
      onChange={onChange} 
      required={required}
      error={!!error}
    />
  );
};