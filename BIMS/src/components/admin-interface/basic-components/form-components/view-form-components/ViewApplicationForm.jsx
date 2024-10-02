import { useState, useEffect, useRef } from 'react';
import ViewFormModal from './ViewFormModal.jsx';
import StatusModal from '../form-sub-components/StatusModal.jsx';

import editIcon from '../../../../../assets/admin-interface/icons/form/edit.svg';
import { BARANGAY_FORMS, GET_FORM_RESPONSE } from '../../../../../util/admin-interface/BarangayForms.js';

export default function ViewApplicationForm() {
  const statusModal = useRef(null);

  const form = BARANGAY_FORMS.find((form) => form.id === 'sample-form');
  const { formDetails, formResponse } = GET_FORM_RESPONSE();
  const len = form.parts?.length || 0;

  if (!form) {
    console.log("Form not found. Available form IDs:", BARANGAY_FORMS.map(f => f.id));
    return null;
  }

  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  const [requestDetails, setRequestDetails] = useState({
    applicationId: formDetails.application_id || "******",
    version: formDetails.version_id || "N/A",
    date: formDetails.datetime_submitted.split(' ')[0],
    time: formatTime(formDetails.datetime_submitted)
  });

  const [showCount, setShowCount] = useState(len);
  const [jumpTo, setJumpTo] = useState('');

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'text-[#05398C]';
      case 'Approve': return 'text-[#05398C]';
      case 'Reject': return 'text-[#D85353]';
      default: return 'text-[#037847]';
    }
  };

  const applicationDetails = [
    { label: "Application ID", value: requestDetails.applicationId },
    { label: "Version", value: requestDetails.version },
    { label: "Date", value: requestDetails.date },
    { label: "Time", value: requestDetails.time }
  ];

  const handleShowChange = (event) => {
    const newShowCount = Number(event.target.value);
    setShowCount(newShowCount);
    setJumpTo('');
  };

  const handleJumpToChange = (event) => {
    const newJumpTo = event.target.value;
    setJumpTo(newJumpTo);
    setShowCount(1);

    if (newJumpTo === '') {
      setShowCount(len);
    } else {
      const jumpToValue = Number(newJumpTo);
      setShowCount(jumpToValue);
    }
  };

  const displayParts = form.parts.slice(jumpTo ? jumpTo - 1 : 0, (jumpTo ? jumpTo - 1 : 0) + showCount);

  return (
    <>
      <main className="h-full bg-gray pt-28 pb-8 pl-24 pr-8 font-inter text-left bg-gray97">
        <div className="flex flex-col h-full py-5 px-10 gap-5 bg-white">
          <h2 className="text-3xl font-bold">{form.title}</h2>

          <div className="flex justify-between text-black">
            <div className="flex flex-row gap-10 opacity-30">
              {applicationDetails.map((detail, index) => (
                <div key={index} className="flex flex-col font-medium gap-2">
                  <p className="text-sm">{detail.label}:</p>
                  <p className="flex h-full items-center text-lg">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-10">
              <div className="flex flex-col font-medium gap-2">
                <p className="text-sm opacity-30">Officer In Charge:</p>
                <p className="flex h-full items-center text-lg text-[#667085]">{formDetails.approved_by}</p>
              </div>
              <div className="flex flex-col font-medium gap-2">
                <div className="flex justify-between">
                  <p className="text-sm opacity-30">Status:</p>
                  <img
                    src={editIcon}
                    alt="Edit Status"
                    className="cursor-pointer"
                    // onClick={() => statusModal.current.open()}
                  />
                </div>
                <p className={`flex h-full items-center text-lg ${getStatusClass(formDetails.status)}`}>
                  {formDetails.status}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-10 text-sm opacity-50 items-center">
            <p>{len} Part{len !== 1 ? 's' : ''}</p>
            <div className="flex gap-3 items-center">
              <p>Show:</p>
              <div
                className="w-12 h-8 px-2 border border-gray-300 rounded 
                  focus-within:border-black focus-within:shadow-outline"
                tabIndex={0}
              >
                <select
                  value={showCount}
                  onChange={handleShowChange}
                  className="w-full h-full text-xs text-center rounded focus:outline-none"
                >
                  {Array.from({ length: len }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <p>Jump To:</p>
              <div
                className="w-12 h-8 px-2 border border-gray-300 rounded 
                  focus-within:border-black focus-within:shadow-outline"
                tabIndex={0}
              >
                <select
                  value={jumpTo}
                  onChange={handleJumpToChange}
                  className="w-full h-full text-xs text-center rounded focus:outline-none"
                >
                  <option value="">--</option>
                  {Array.from({ length: len }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <ViewFormModal
            formParts={displayParts}
            response={formResponse}
            disabled={true}
          />
        </div>
      </main>

      <StatusModal
        ref={statusModal}
        details={[
          ...applicationDetails,
          { label: "Submitted By", value: formDetails.submitted_by || "N/A" },
          { label: "Status", value: formDetails.status || "N/A" },
          { label: "Officer In Charge:", value: formDetails.approved_by || "N/A"}
        ]} 
        onClose={() => {
          statusModal.current.close();
        }}
      />
    </>
  );
}
