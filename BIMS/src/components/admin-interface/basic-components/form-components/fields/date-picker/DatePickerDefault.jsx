import { useState, useRef, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import './DatePickerDefault.css';
import { Input } from '@material-tailwind/react';
import calendar from '../../../../../../assets/resident-interface/icons/input/calendar.svg';

export default function DatePickerDefault({ 
  obj, 
  onChange, 
  value, 
  error,
  disabled = false 
}) {
  const { label, placeholder, required } = obj;

  const displayLabel = required ? (
    <span>
      {label} <span className="text-red-500">*</span>
    </span>
  ) : label;

  const [date, setDate] = useState(value || ''); 
  const flatpickrRef = useRef(null);
  const inputRef = useRef(null);

  // Utility function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const dateObject = new Date(dateString);
    const month = dateObject.toLocaleString('default', { month: 'long' });
    const day = dateObject.getDate().toString().padStart(2, '0');
    const year = dateObject.getFullYear();

    return `${month} ${day}, ${year}`; // Return formatted date
  };

  // Update local state when the external value changes
  useEffect(() => {
    setDate(formatDate(value)); // Format and set the date on value change
  }, [value]);

  const handleFormattedValue = (dates) => {
    const dateObject = dates[0];
    const month = dateObject.toLocaleString('default', { month: '2-digit' });
    const day = dateObject.getDate().toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    const formattedDateInput = formatDate(`${year}-${month}-${day}`);
    const formattedDate = `${year}-${month}-${day}`;
    
    setDate(formattedDateInput); // Update the display value
    onChange && onChange(formattedDate); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && flatpickrRef.current 
      && flatpickrRef.current.element) {
        if (!(inputRef.current.contains(event.target) 
        || flatpickrRef.current.element.contains(event.target))) {
          if (flatpickrRef.current) {
            const fp = flatpickrRef.current.flatpickr;
            fp.close(); 
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputClick = () => {
    if (flatpickrRef.current) {
      const fp = flatpickrRef.current.flatpickr;
      fp.open(); 
    }
  };

  return (
    <div className="relative w-72 font-inter">
      <Flatpickr
        ref={flatpickrRef}
        value={value ? new Date(value) : ''}
        onChange={handleFormattedValue} 
        options={{
          clickOpens: true,
          altInput: true,
          altInputClass: 'invisible',
          dateFormat: 'Y-m-d',
          todayButton: true,
        }}
      />
      <div className="absolute top-0 left-0 w-full flex flex-col h-fit gap-1 font-inter">
        <label className={`text-sm ${error ? 'text-red-500' : 'text-blue-gray-800'}`}>
          {displayLabel}
        </label>
        <Input
          ref={inputRef}
          color="blue-gray"
          className={`border ${error ? '!border-red-500' : '!border-blue-gray-200'} 
            focus:border-2 focus:${error ? '!border-red-500' : '!border-blue-gray-600'} 
            cursor-pointer caret-transparent`}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          placeholder={placeholder}
          value={date} 
          onChange={() => {}} // No-op since we control value with Flatpickr
          onClick={handleInputClick}
          icon={
            <img 
              src={calendar} 
              alt="Calendar icon" 
              className="cursor-pointer"
            />
          }
          disabled={disabled}
        />
      </div>
    </div>
  );
}
