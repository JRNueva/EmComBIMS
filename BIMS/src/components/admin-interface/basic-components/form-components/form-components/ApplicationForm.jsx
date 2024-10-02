import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormModal from './FormModal.jsx';
import editIcon from '../../../../../assets/admin-interface/icons/form/edit.svg';

import { BARANGAY_DEFAULT_INPUT, BARANGAY_FORMS } from '../../../../../util/admin-interface/BarangayForms.js';

const statusInput = BARANGAY_DEFAULT_INPUT.find((input) => input.id.includes('status'));

export default function ApplicationForm() {
  const {recordType} = useParams(); 
  const form = BARANGAY_FORMS.find((form) => form.id === recordType);

  const [status, setStatus] = useState();

  if (!form) {
    console.log("Form not found. Available form IDs:", BARANGAY_FORMS.map(f => f.id));
  }

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0'); 
    const time = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const formattedDate = `${month}-${day}-${year}`;
    return { date: formattedDate, time };
  };

  const [requestDetails, setRequestDetails] = useState([
    { label: 'Form ID', value: '00000' },
    { label: 'Version', value: '1.0' },
    { label: 'Date', value: '' },
    { label: 'Time', value: '' },
  ]);

  useEffect(() => {
    const updateDateTime = () => {
      const { date, time } = getCurrentDateTime();
      setRequestDetails(prevDetails => [
        prevDetails[0], 
        prevDetails[1], 
        { label: 'Date', value: date }, 
        { label: 'Time', value: time },
      ]);
    };

    updateDateTime(); 

    const intervalId = setInterval(updateDateTime, 50000); 
    return () => clearInterval(intervalId); 
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'text-[#05398C]';
      case 'Approve': return 'text-[#05398C]';
      case 'Reject': return 'text-[#D85353]';
      default: return 'text-[#037847]';
    }
  };

  return (
    <main className="w-screen h-screen bg-gray pt-28 pb-8 pl-24 pr-8 font-inter text-left bg-gray97">
      <div className="flex flex-col h-full py-5 px-10 gap-5 bg-white">
        <h2 className="text-3xl font-bold">{form.title}</h2>        
          <div className="flex justify-between">
          <div className="flex flex-row gap-10">
            {requestDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col text-black font-medium opacity-30" >
                <p className="text-sm">{detail.label}:</p>
                <p className="flex h-full items-center text-lg">{detail.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-10">
              <div className="flex flex-col font-medium gap-2">
                <div className="flex justify-between">
                  <p className="text-sm opacity-30">Status:</p>
                </div>
                <p className={`flex h-full items-center text-lg ${getStatusClass('In Progress')}`}>
                  In Progress
                </p>
              </div>
            </div>
        </div>

        <FormModal barangayForm={form} />
      </div>
    </main>
  );
}
