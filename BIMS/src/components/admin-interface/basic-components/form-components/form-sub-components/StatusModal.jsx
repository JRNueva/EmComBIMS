import { forwardRef, useState, useImperativeHandle, useEffect } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import ButtonDefault from '../../../basic-components/ButtonDefault.jsx';
import FormDefault from '../form-sub-components/FormDefault.jsx'; 
import Error from "./Error.jsx";
import { VALIDATE_FORM, BARANGAY_DEFAULT_INPUT } from '../../../../../util/admin-interface/BarangayForms.js';

const StatusModal = forwardRef(({ details, disabled = false }, ref) => {
  const [open, setOpen] = useState(false);
  const inputs = [
    BARANGAY_DEFAULT_INPUT.find((input) => input.id.includes('status-application'))
  ];
  
  const [formData, setFormData] = useState({
    'status-application': ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("Details received:", details);
    if (details.length) {
      const initialStatus = details.find(detail => detail.label === "Status")?.value?.toLowerCase() || '';
      console.log("Initial status value (lowercase):", initialStatus);
      setFormData({
        'status-application': initialStatus,
      });
    }
  }, [details]);

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
  }));

  function handleChange(id, value) {
    setFormData(prevValues => ({
      ...prevValues,
      [id]: value,
    }));
  }

  function handleSubmit() {
    const formErrors = VALIDATE_FORM({ items: inputs }, formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      console.log("Validation failed with errors:", formErrors);
      return;
    }

    console.log("Form passed validation, submitting...");
    const values = Object.keys(formData).map(key => ({
      id: key,
      value: formData[key]?.trim() === '' ? null : formData[key],
    })).filter((v, i, a) => a.findIndex(t => t.id === v.id) === i); 

    console.log("Unique Values:", values);
    // ADD THE OFFICER IN CHARGE
  }

  return (
    <Dialog open={open} size="sm" className="relative z-50">
      <div className="relative py-5 px-3 rounded-lg bg-white shadow-lg">
        <DialogHeader className="opacity-50">
          <div className="flex flex-wrap gap-10 justify-center">
            {details.map((info, index) => (
              info.label !== "Status" && ( 
                <div key={index} className="flex flex-col font-medium gap-2">
                  <p className="text-sm">{info.label}:</p>
                  <p className="flex h-full items-center text-lg">
                    {info.value || "N/A"}
                  </p>
                </div>
              )
            ))}

          </div>
        </DialogHeader>

        <DialogBody className="flex flex-col gap-3 pb-10 font-inter text-blue-gray-900">
          <FormDefault 
            pages={inputs}
            values={formData}
            onChange={handleChange}
            errors={errors}
            disabled={disabled}
          />
          
          <div className="flex flex-col items-center text-red-700">
            {Object.keys(errors).length > 0 && (
              <Error>
                {Object.keys(errors).map(id => errors[id] && <span key={id}>{errors[id]}</span>)}
              </Error>
            )}
          </div>
        </DialogBody>

        <DialogFooter>
          <div className="flex flex-row w-full py-2 justify-evenly gap-10">
            <ButtonDefault
              type="forms"
              className="pt-2.5 text-lowBlue bg-transparent border border-lowBlue" 
              onClick={() => setOpen(false)} 
            >
              Cancel
            </ButtonDefault>

            <ButtonDefault
              type="forms"
              className="pt-2.5 bg-lowBlue" 
              onClick={handleSubmit} 
            >
              Save
            </ButtonDefault>
          </div>
        </DialogFooter>
      </div>
    </Dialog>
  );
});

export default StatusModal;
