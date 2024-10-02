import PropTypes from "prop-types";
import { useState } from "react";
import ConfirmationDialog from "../ConfirmationDialog";
import "./InformationPoliciesDialog.css";

function InformationPoliciesDialog({ closeDialog, initialData }) {
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  const handleSaveChanges = () => {
    // Open the confirmation dialog when "Save Changes" is clicked
    setConfirmationDialogOpen(true);
  };

  const handleConfirmChanges = () => {
    // Perform the save operation here
    // After saving, close both dialogs
    setConfirmationDialogOpen(false);
    closeDialog();
  };

  return (
    <div>
      <div
        id="information__policies-overlay"
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      >
        <div className="bg-white p-6 w-96 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">
            {initialData ? "Edit Barangay Policy" : "Add Barangay Policy"}
          </h2>
          <div className="mb-4 my-6">
            <label htmlFor="name" className="block mb-1 font-medium text-left">
              Title:
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue={initialData?.title || ""}
            />
          </div>
          <div className="mb-4 my-6">
            <label htmlFor="name" className="block mb-1 font-medium text-left">
              Description:
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue={initialData?.title || ""}
            />
          </div>
          <div className="mb-4 my-6">
            <label htmlFor="image" className="block mb-1 font-medium text-left">
              Upload a PDF file:
            </label>
            <input
              type="file"
              id="information__image"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="my-6 mt-10 flex justify-center gap-4 place-content-evenly">
            <button
              className="w-36 px-4 py-1 border-2 border-slate-700 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-800 hover:text-slate-100"
              onClick={closeDialog}
            >
              Cancel
            </button>
            {initialData ? (
              <button
                className="w-36 px-4 py-1 border-2 border-slate-700 rounded-md bg-slate-600 text-slate-100 hover:bg-slate-800 hover:text-slate-200"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            ) : (
              <button
                className="w-36 px-4 py-1 border-2 border-slate-700 rounded-md bg-slate-600 text-slate-100 hover:bg-slate-800 hover:text-slate-200"
                onClick={closeDialog} // Directly close the dialog without confirmation
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>

      {isConfirmationDialogOpen && (
        <ConfirmationDialog
          onCancel={() => setConfirmationDialogOpen(false)}
          onConfirm={handleConfirmChanges}
        />
      )}
    </div>
  );
}

InformationPoliciesDialog.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default InformationPoliciesDialog;
