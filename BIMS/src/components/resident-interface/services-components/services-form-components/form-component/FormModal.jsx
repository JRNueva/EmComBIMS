import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import ButtonDefault from '../../../basic-components/ButtonDefault.jsx';

import StepperDefault from "../../../basic-components/form-components/Stepper.jsx";
import FormDefault from './FormDefault.jsx';
import AuthModal from '../../../basic-components/form-components/otp-modal/AuthModal.jsx'; 
import Error from "./Error.jsx";

import { ORGANIZED_PAGE, validateForm } from '../../../../../util/resident-interface/BarangayForms.js';

export default function FormModal({ barangayForm }) {

  const navigate = useNavigate();
  const authModalRef = useRef();
  
  const [pages, setPages] = useState(ORGANIZED_PAGE(barangayForm.inputs));
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);
  
  const [uniqueValues, setUniqueValues] = useState({});

  useEffect(() => {
    setIsFirstStep(activeStep === 0);
    setIsLastStep(activeStep === pages.length - 1);
  }, [activeStep, pages.length]);

  useEffect(() => {
    setPages(ORGANIZED_PAGE(barangayForm.inputs));
  }, [barangayForm.inputs]);

  function handleChange(id, value) {
    setFormData((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }

  function handleCancel() { 
    navigate("..", { relative: 'path' });
  }
  
  function handlePrev() {
    if (!isFirstStep) {
      setErrors({}); 
      setActiveStep((cur) => cur - 1);
    }
  }

  function handleNext() {
    const formErrors = validateForm(pages, activeStep, formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      if (!isLastStep) {
        setActiveStep((cur) => cur + 1);
      }
    } else {
      console.log("Validation failed with errors:", formErrors);
    }
  }

  function handleSubmit() {
    const formErrors = validateForm(pages, activeStep, formData);
    setErrors(formErrors); 

    if (Object.keys(formErrors).length === 0) {
      console.log("Form passed validation, submitting...");

      const allValues = Object.keys(formData).map(key => {
          return {
              id: key,
              value: formData[key]?.trim() === '' ? null : formData[key],
          };
      });

      const values = allValues.reduce((acc, current) => {
        const existingItem = acc.find(item => item.id === current.id);
        if (!existingItem) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

      setUniqueValues(values);
      
      if (authModalRef.current) {
        authModalRef.current.open(); 
      }

    } else {
      console.log("Validation failed with errors:", formErrors);
    }
  }

  return (
    <>
      <AuthModal ref={authModalRef} formData={uniqueValues} />

      <div className="w-[35rem] h-3/4 flex flex-col 
                mt-40 px-20 py-14 justify-around
                drop-shadow-lg bg-snow"> 
        <div className="mx-auto" style={{ width: `${(pages.length / 6) * 100}%` }}>
          <StepperDefault 
            activeStep={activeStep}
            pages={pages} 
          />
        </div>

        <div className="flex flex-col w-full h-[25rem] py-10 gap-4">
          <FormDefault 
            pages={pages}
            activeStep={activeStep}
            values={formData}
            onChange={handleChange}
            errors={errors}
          />

          {Object.keys(errors).length > 0 && (
            <Error>
              {Object.values(errors).some(error => error === 'Fill all the required details.') && (
                <span>Fill all the required details.</span>
              )}

              {errors['sms'] && errors['sms'] !== 'Fill all the required details.' && (
                <span>{errors['sms']}</span>
              )}

              {errors['email'] && errors['email'] !== 'Fill all the required details.' && (
                <span>{errors['email']}</span>
              )}
            </Error>
          )}
        </div>

        <div className="flex flex-row w-full justify-between">
          <ButtonDefault
            type="forms"
            className="pt-2.5 text-lowBlue bg-snow border border-lowBlue" 
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
      </div>
    </>
  );
}
