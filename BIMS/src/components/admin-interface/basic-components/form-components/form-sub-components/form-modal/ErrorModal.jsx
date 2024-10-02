import { forwardRef, useState, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import ButtonDefault from '../../../ButtonDefault.jsx';

const ErrorModal = forwardRef(({onClose}, ref) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    close() {
      setOpen(false);
    }
  }));

  const handleOkClick = () => {
    onClose();  
    navigate('/admin/requests');  
  };

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

        <DialogHeader className="flex flex-col gap-3">
          <iframe 
            src="https://lottie.host/embed/548b8b0d-4719-4aa2-a9ea-8bac9b98d0a5/ucOQlSur2B.json" 
            className="w-full h-48 border-0"
            title="Error Animation"
          />    
        </DialogHeader>

        <DialogBody className="flex flex-col gap-3 pb-10 text-center font-inter text-blue-gray-900">
          <p className="text-xl font-semibold">Submission Unsuccessful</p>
          <p className="text-sm font-normal">There is something wrong with the submission. <br/> Please try again.</p>
        </DialogBody>

        <DialogFooter className="flex justify-center">
          <ButtonDefault 
            type="modal" 
            className="w-full text-snow bg-lowBlue" 
            onClick={handleOkClick}
          >
            Okay
          </ButtonDefault>
        </DialogFooter>
      </div>
    </Dialog>
  );
});

export default ErrorModal;