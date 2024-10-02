import { forwardRef, useState, useImperativeHandle } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import ButtonDefault from '../../ButtonDefault.jsx';

const SuccessModal = forwardRef(({onClose}, ref) => {

  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    }
  }));

  return (
    <Dialog 
      open={open} size="xs" 
      {...(open ? {} : { inert: true })}
      className="relative z-50"
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
        <DialogHeader className="flex justify-center">
          <iframe 
            src="https://lottie.host/embed/7f4b01c3-67d0-46c6-aed9-7bcca8176b38/loc0osN2kO.json" 
            className="w-full h-48 border-0"
            title="Success Animation"
          />
        </DialogHeader>

        <DialogBody className="flex flex-col gap-3 pb-10 text-center font-inter text-blue-gray-900">
          <p className="text-xl font-semibold">Submission Confirmed</p>
          <p className="text-sm font-normal">
            We'll update you via your contact preference.<br /> Thank you!
          </p>
        </DialogBody>

        <DialogFooter className="flex justify-center">
          <ButtonDefault 
            type="modal" 
            className="w-full text-snow bg-lowBlue" 
            onClick={onClose}
          >
            Okay
          </ButtonDefault>
        </DialogFooter>
      </div>
    </Dialog>
  );
});

export default SuccessModal;
