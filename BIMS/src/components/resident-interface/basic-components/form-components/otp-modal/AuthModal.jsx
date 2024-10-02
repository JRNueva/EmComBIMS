import { forwardRef, useImperativeHandle, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import ButtonDefault from '../../ButtonDefault.jsx';
import SuccessModal from './SuccessModal.jsx';  
import ErrorModal from './ErrorModal.jsx';  

import image from '../../../../../assets/resident-interface/icons/modal/shield.svg';

const AuthModal = forwardRef(({ formData }, ref) => {

  const navigate = useNavigate();

  const successModal = useRef(null);
  const errorModal = useRef(null);

  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const inputsRef = useRef([]);

  useEffect(() => {
    if (open) {
      inputsRef.current[0].focus();
    }
  }, [open]);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    },
  }));

  function handleInput(e, index) {
    const { value } = e.target;
    if (/^[0-9]{1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      inputsRef.current[inputsRef.current.length - 1].focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const enteredOTP = otp.join('');
    console.log("OTP Entered: ", enteredOTP);

    const isValidOtp = enteredOTP === '000000'; 

    if (isValidOtp) {
      console.log("OTP Verified. Form Data: ", formData);
      successModal.current.open(); 
    } else {
      errorModal.current.open(); 
    }

    setOpen(false); 
  }

  return (
    <>
      <Dialog open={open} size="sm" aria-modal
        handler={() => setOpen(!open)} className="relative z-50"
        dismiss={{
          enabled: false,
          escapeKey: false,
          referencePress: false,
          referencePressEvent: null,
          outsidePress: false,
          outsidePressEvent: null,
          ancestorScroll: false,
          bubbles: false,
        }}
      >
        <div className="relative p-6 rounded-lg bg-white shadow-lg">
          <DialogHeader className="flex flex-col gap-3 font-inter text-blue-gray-900">
            <img src={image} className="h-24" />
            <p className="text-xl font-semibold">Please check your {formData['contact-preferences']}</p>
            <p className="text-sm font-normal">
              We’ve sent a code to your {formData['sms'] || formData['email']}
            </p>
          </DialogHeader>

          <DialogBody>
            <div className="flex items-center justify-center gap-3">
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-14 h-18 text-center text-2xl p-4 font-extrabold text-slate-900 text-lowBlue
                    rounded-lg border-2 border-lowBlue appearance-none outline-none focus:bg-white focus:ring-2 focus:ring-lowestBlue"
                  value={otp[index]}
                  maxLength="1"
                  ref={(el) => (inputsRef.current[index] = el)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>

            <p className="w-full p-6 text-center text-blue-gray-900 font-inter text-sm font-normal">
              Didn’t get the code?{' '}
              <a href="#0" className="underline underline-offset-1 text-lowestBlue hover:text-mediumBlue">
                Click to resend.
              </a>
            </p>
          </DialogBody>

          <DialogFooter className="flex justify-evenly">
            <ButtonDefault type="forms" 
              className="w-40 pt-2.5 text-lowBlue bg-snow border border-lowBlue" 
              onClick={() => setOpen(false)}
            >
              Cancel
            </ButtonDefault>

            <ButtonDefault type="modal" 
              className="w-40 bg-lowBlue" 
              onClick={handleSubmit}
            >
              Verify
            </ButtonDefault>
          </DialogFooter>
        </div>
      </Dialog>

      <SuccessModal 
        ref={successModal}
        onClose={() => {
          successModal.current.close(); 
          navigate("/services", { relative: 'path' });
        }} 
      />

      <ErrorModal 
        ref={errorModal}
        onClose={() => {
          errorModal.current.close(); 
          navigate("/services", { relative: 'path' });
        }} 
      />
    </>
  );
});

export default AuthModal;
