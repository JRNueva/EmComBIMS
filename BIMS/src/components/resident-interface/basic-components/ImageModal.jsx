import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ImageModal = forwardRef(function ImageModal({ image }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useImperativeHandle(ref, () => ({
    open() {
      setIsOpen(true);
      dialog.current.showModal();
    },
    close() {
      setIsOpen(false);
      dialog.current.close();
    }
  }));

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      {createPortal(
        <dialog
          ref={dialog}
          className="fixed inset-0 z-50 border-none bg-transparent p-0 hide-scroll"
          onClose={() => setIsOpen(false)}
        >
          <div className="flex items-center justify-center w-full h-full p-4">
            <div className="relative max-w-full max-h-full object-center overflow-hidden">
              <img
                className="object-cover max-w-full max-h-[35rem]"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4
                            bg-darkestBlue opacity-80
                            uppercase font-inter font-semibold text-lg
                            tracking-widest text-white text-center">
                {image.alt}
              </div>

              <button
                type="button"
                className="absolute top-2 right-2 bg-transparent p-2 text-white"
                onClick={() => {
                  setIsOpen(false);
                  dialog.current.close();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </dialog>,
        document.getElementById("modal")
      )}
    </>
  );
});

export default ImageModal;
