import { useState, useRef, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import './DatePickerDefault.css';
import { Input } from '@material-tailwind/react';

import calendar from '../../../../../assets/resident-interface/icons/input/calendar.svg'

export default function DatePickerDefault({ obj, onChange, value, error }) {

  const { label, placeholder, required } = obj;

  const [date, setDate] = useState(value || ''); 
  const flatpickrRef = useRef(null);
  const inputRef = useRef(null);

  const handleFormattedValue = (dates) => {
    const dateObject = dates[0];
    const month = dateObject.toLocaleString('default', { month: '2-digit' });
    const day = dateObject.getDate().toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    const monthName = dateObject.toLocaleString('default', { month: 'long' });
    const formattedDateInput = `${monthName} ${day}, ${year}`;

    const formattedDate = `${year}-${month}-${day}`;
    setDate(formattedDateInput);
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
    <div className="relative w-full font-inter">
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
      <div className="absolute top-0 left-0 w-full">
        <Input
          ref={inputRef}
          color="blue-gray"
          label={label}
          placeholder={placeholder}
          value={date} 
          onChange={() => {}}
          onClick={handleInputClick}
          icon={
            <img src={calendar} alt="Calendar icon" className="cursor-pointer" />
          }
          className="cursor-pointer caret-transparent"
          required={required}
          error={!!error}
        />
      </div>
    </div>
  );
};
