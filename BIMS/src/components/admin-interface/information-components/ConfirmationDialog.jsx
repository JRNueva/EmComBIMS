import PropTypes from "prop-types";

import "./ConfirmationDialog.css";

function ConfirmationDialog({ onCancel, onConfirm }) {
  if (typeof onCancel !== "function") {
    throw new Error("onCancel prop must be a function");
  }

  if (typeof onConfirm !== "function") {
    throw new Error("onConfirm prop must be a function");
  }

  return (
    <div
      id="confirmation_dialog__overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[9999]"
    >
      <div className="bg-white p-5 shadow-lg w-[400px] max-w-[90%]">
        <h3 className="mb-5 font-bold">
          Please enter the password to confirm these changes
        </h3>
        <div className="flex items-center mt-10 mb-5">
          <img
            src="https://th.bing.com/th/id/OIP.NPDNdHvvOcmDPORhdUrGCwAAAA?rs=1&pid=ImgDetMain"
            alt="User Profile"
            className="w-[50px] h-[50px] rounded-full mr-4"
          />
          <div>
            <h4 className="m-0 text-[16px]">Angela Decena</h4>
            <p className="m-0 text-gray-600">Administrator</p>
          </div>
        </div>
        <div className="mt-5">
          <input
            type="password"
            placeholder="Type your password"
            className="w-full p-2 border border-gray-300 rounded-md mb-5"
          />
        </div>
        <div className="mt-10 flex justify-evenly">
          <button
            onClick={onCancel}
            className="px-5 py-2 bg-slate-100 border-2 border-slate-600 rounded-lg text-slate-600 w-[150px] hover:bg-slate-700 hover:text-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-slate-600 text-slate-100 rounded-md w-[150px] hover:bg-slate-800 hover:text-slate-200 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmationDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
