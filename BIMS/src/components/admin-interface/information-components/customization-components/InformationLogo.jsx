import PropTypes from "prop-types";
import { useState } from "react";

import "./InformationLogo.css";

function InformationLogo({ onClose }) {
  if (typeof onClose !== "function") {
    throw new Error("onClose prop must be a function");
  }

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div
      id="information__logo_overlay"
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div className="bg-white p-4 w-11/12 md:w-1/3 relative">
        <div className="mb-4 flex justify-center">
          {file ? (
            <img src={file} alt="Preview" className="w-32" />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
              No Image Preview
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />
        {/* Cancel button */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={onClose}
            className="w-32 bg-slate-100 text-slate-600 border-2 border-slate-600 py-1 px-4 rounded-lg hover:bg-slate-800 hover:text-slate-200"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="w-32 bg-slate-600 text-slate-100 border-2 border-slate-600 py-1 px-4 rounded-lg hover:bg-slate-800 hover:text-slate-200"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

InformationLogo.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default InformationLogo;
