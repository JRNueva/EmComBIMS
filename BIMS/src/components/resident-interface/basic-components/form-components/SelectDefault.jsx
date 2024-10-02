import React from 'react';
import { Select, Option } from "@material-tailwind/react";

export default function SelectDefault({ obj, value, onChange, error }) {
  const { label, options, required } = obj;
  const displayLabel = required ? `${label} *` : label;

  return (
    <Select
      color="blue-gray"
      className="font-inter"
      label={displayLabel}
      value={value}
      onChange={onChange}
      required={required}
      error={!!error}
    >
      {options.map((option, index) => (
        <Option key={index} value={option.toLowerCase()}>
          {option}
        </Option>
      ))}
    </Select>
  );
}
