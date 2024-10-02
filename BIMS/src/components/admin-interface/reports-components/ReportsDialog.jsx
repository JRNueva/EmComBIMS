import PropTypes from "prop-types";
import "./ReportsDialog.css";

function ReportsDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      id="reports_dialog__reports"
    >
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold">Generate New Report</h2>
        </div>

        {/* Close button placed at the top-right corner */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>

        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Report Source:
              <span className="text-red-500"> *</span>
            </label>
            <select className="w-full text-xs mt-1 px-3 py-2 border rounded-md">
              <option>Registry</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Table for Report:
              <span className="text-red-500"> *</span>
            </label>
            <select className="w-full text-xs mt-1 px-3 py-2 border rounded-md">
              <option>Incidents</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Time Frame:
              <span className="text-red-500"> *</span>
            </label>
            <select className="w-full text-xs mt-1 px-3 py-2 border rounded-md">
              <option>Last 30 Days</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Diagram or Chart Type:
              <span className="text-red-500"> *</span>
            </label>
            <select className="w-full text-xs mt-1 px-3 py-2 border rounded-md">
              <option>Pie Chart</option>
              <option>Bar Graph</option>
              <option>Line Graph</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Graph Dimensions:
              <span className="text-red-500"> *</span>
            </label>
            <select className="w-full text-xs mt-1 px-3 py-2 border rounded-md">
              <option value="Small">Small</option>
              <option>Default</option>
              <option value="Small">Large</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-48 mt-4 px-4 py-2 bg-lowBlue text-white rounded-md hover:bg-slate-700"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ReportsDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ReportsDialog;
