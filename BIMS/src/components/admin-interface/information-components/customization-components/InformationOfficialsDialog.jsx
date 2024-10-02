import PropTypes from "prop-types";

import "./InformationOfficialsDialog.css";

function InformationOfficialsDialog({ closeDialog }) {
  return (
    <div
      id="information__officials-overlay"
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6  w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Add Barangay Official
        </h2>
        <div className="mb-4 my-6">
          <label htmlFor="role" className="block mb-1 font-medium text-left">
            Barangay role:
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md appearance-none bg-white bg-no-repeat bg-right bg-[url('data:image/svg+xml,%3Csvg width=\'10\' height=\'5\' viewBox=\'0 0 10 5\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0l5 5 5-5H0z\' fill=\'%23666\'/%3E%3C/svg%3E')] cursor-pointer">
            <option value="captain">Barangay Captain</option>
            <option value="councilor">Councilor</option>
            <option value="secretary">Secretary</option>
            <option value="treasurer">Treasurer</option>
          </select>
        </div>
        <div className="mb-4 my-6">
          <label htmlFor="name" className="block mb-1 font-medium text-left">
            Barangay official name:
          </label>
          <input
            type="text"
            id="information__dialog-name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 my-6">
          <label htmlFor="image" className="block mb-1 font-medium text-left">
            Upload a picture:
          </label>
          <input
            type="file"
            id="information__image"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="my-6 flex justify-center gap-4 place-content-evenly">
          <button
            className="w-32 px-4 py-1 border-2 border-slate-700 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-700 hover:text-slate-100"
            onClick={closeDialog}
          >
            Cancel
          </button>
          <button className="w-32 px-4 py-1 rounded-md bg-slate-700 text-slate-100 hover:bg-slate-900">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

InformationOfficialsDialog.propTypes = {
  closeDialog: PropTypes.func.isRequired,
};

export default InformationOfficialsDialog;
