import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ButtonDefault from '../../../basic-components/ButtonDefault.jsx';
import StepperDefault from "../form-sub-components/Stepper.jsx";
import FormDefault from '../form-sub-components/FormDefault.jsx';
import Error from "../form-sub-components/Error.jsx";
import SuccessModal from "../form-sub-components/form-modal/SuccessModal.jsx";

import { ORGANIZED_PAGE, VALIDATE_FORM } from '../../../../../util/admin-interface/BarangayForms.js';


export default function FormModal({ barangayForm, disabled = false }) {
  const navigate = useNavigate(); 
  const successModal = useRef(null);

  const [pages, setPages] = useState(ORGANIZED_PAGE(barangayForm));
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);

  useEffect(() => {
    const organizedPages = ORGANIZED_PAGE(barangayForm);
    setPages(organizedPages);
    setIsFirstStep(activeStep === 0);
    setIsLastStep(activeStep === organizedPages.length - 1);
  }, [barangayForm, activeStep]);

  function handleChange(id, value) {
    setFormData(prevValues => ({
      ...prevValues,
      [id]: value,
    }));
  }

  function handleCancel() { 
    navigate(".."); 
  }
  
  function handlePrev() {
    if (!isFirstStep) {
      setErrors({});
      setActiveStep(cur => cur - 1);
    }
  }

  function handleNext() {
    const formErrors = VALIDATE_FORM(pages[activeStep], formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      if (!isLastStep) {
        setActiveStep(cur => cur + 1);
      }
    } else {
      console.log("Validation failed with errors:", formErrors);
    }
  }

  function handleSubmit() {
    const formErrors = VALIDATE_FORM(pages[activeStep], formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form passed validation, submitting...");

      const allValues = Object.keys(formData).map(key => ({
        id: key,
        value: formData[key]?.trim() === '' ? null : formData[key],
      }));

      const values = allValues.reduce((acc, current) => {
        const existingItem = acc.find(item => item.id === current.id);
        if (!existingItem) {
          return acc.concat([current]);
        }
        return acc;
      }, []);

      console.log("Unique Values:", values);
      successModal.current.open();
    } else {
      console.log("Validation failed with errors:", formErrors);
    }
  }

  return <>
    <div className="mx-auto pb-3" style={{ width: `${(pages.length / 6) * 40}%` }}>
      <StepperDefault activeStep={activeStep} pages={pages} />
    </div>

    <div className="flex flex-col w-full h-full border border-lightGray">
      <div className="flex w-full h-12 bg-softGray">
        <span className="pl-5 my-auto font-inter text-base font-medium">
          {pages[activeStep]?.title || 'Part'}
        </span>
      </div>

      <div className="flex flex-col my-auto p-10 justify-center items-center gap-4">
        <div className="flex flex-wrap justify-center gap-10">
          <FormDefault 
            pages={pages[activeStep]?.items || []}
            values={formData}
            onChange={handleChange}
            errors={errors}
            disabled={disabled}
          />
        </div>

        <div className="flex flex-col items-center text-red-700">
          {Object.keys(errors).length > 0 && (
            <Error>
              {Object.values(errors).some(error => error === 'Fill all the required details.') && (
                <span>Fill all the required details.</span>
              )}
              
              {Object.keys(errors).filter(id => id.includes('sms')).map(id => 
                errors[id] && errors[id] !== 'Fill all the required details.' && (
                  <span key={id}>{errors[id]}</span>
                )
              )}
              
              {Object.keys(errors).filter(id => id.includes('email')).map(id => 
                errors[id] && errors[id] !== 'Fill all the required details.' && (
                  <span key={id}>{errors[id]}</span>
                )
              )}
            </Error>
          )}
        </div>
      </div>
    </div>

    <div className="flex flex-row w-full py-2 justify-end gap-10">
      <ButtonDefault
        type="forms"
        className="pt-2.5 text-lowBlue bg-transparent border border-lowBlue" 
        onClick={isFirstStep ? handleCancel : handlePrev} 
      >
        {isFirstStep ? 'Cancel' : 'Back'}
      </ButtonDefault>

      <ButtonDefault
        type="forms"
        className="pt-2.5 bg-lowBlue" 
        onClick={isLastStep ? handleSubmit : handleNext} 
      >
        {isLastStep ? 'Submit' : 'Next'}
      </ButtonDefault>
    </div>

    <SuccessModal 
      ref={successModal}
      onClose={() => {
        successModal.current.close(); 
      }} 
    />
  </>
}
