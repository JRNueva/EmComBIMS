import { Pencil } from "lucide-react";
import { useState } from "react";
import ConfirmationDialog from "../ConfirmationDialog";

function InformationOfficial() {
  // Enable officials editing button
  const [isEditingOfficials, setIsEditingOfficials] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleEditOfficials = () => {
    setIsEditingOfficials(!isEditingOfficials);
  };

  const handleSaveChanges = () => {
    setIsDialogOpen(true); // Open the confirmation dialog
  };

  const handleCancel = () => {
    setIsEditingOfficials(false);
  };

  const handleConfirm = () => {
    // Logic to save changes goes here
    setIsEditingOfficials(false);
    setIsDialogOpen(false);
  };

  const handleDialogCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="">
      <div className="flex justify-end p-2">
        {!isEditingOfficials && (
          <div onClick={toggleEditOfficials} className="cursor-pointer">
            <Pencil size={20} color="#6C6C6C" strokeWidth={0.8} />
          </div>
        )}
      </div>
      <div>
        <table className="text-left w-full">
          <tbody>
            <tr className="bg-slate-200">
              <td className="w-1/4 py-4 font-bold">Barangay Captain:</td>
              <td className="w-1/4">
                {isEditingOfficials ? (
                  <input
                    className="border rounded p-1"
                    defaultValue="Captain's Name"
                  />
                ) : (
                  <p>Captain Name</p>
                )}
              </td>
              <td>
                {isEditingOfficials ? (
                  <input
                    type="file"
                    accept=".jpg,.png"
                    className="file-input ml-4"
                  />
                ) : (
                  <p className="ml-4">captain_file.jpg</p>
                )}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 font-bold">Barangay Secretary:</td>
              <td>
                {isEditingOfficials ? (
                  <input
                    className="border rounded p-1"
                    defaultValue="Secretary's Name"
                  />
                ) : (
                  <p>Secretary Name</p>
                )}
              </td>
              <td>
                {isEditingOfficials ? (
                  <input
                    type="file"
                    accept=".jpg,.png"
                    className="file-input ml-4"
                  />
                ) : (
                  <p className="ml-4">secretary_file.png</p>
                )}
              </td>
            </tr>
            <tr className="bg-slate-200">
              <td className="py-4 font-bold">Barangay Treasurer:</td>
              <td>
                {isEditingOfficials ? (
                  <input
                    className="border rounded p-1 w-full"
                    defaultValue="Treasurer's Name"
                  />
                ) : (
                  <p>Treasurer Name</p>
                )}
              </td>
              <td>
                {isEditingOfficials ? (
                  <input
                    type="file"
                    accept=".jpg,.png"
                    className="file-input ml-4"
                  />
                ) : (
                  <p className="ml-4">treasurer_file.jpg</p>
                )}
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <p className="font-bold">Barangay Councilors</p>
              </td>
            </tr>
            {Array.from({ length: 7 }).map((_, i) => (
              <tr key={i} className="">
                <td className="py-2 pl-8">Councilor:</td>
                <td>
                  {isEditingOfficials ? (
                    <input
                      className="border rounded p-1 w-full"
                      defaultValue={`Councilor ${i + 1}`}
                    />
                  ) : (
                    <p>{`Councilor ${i + 1}`}</p>
                  )}
                </td>
                <td>
                  {isEditingOfficials ? (
                    <input
                      type="file"
                      accept=".jpg,.png"
                      className="file-input ml-4"
                    />
                  ) : (
                    <p className="ml-4">{`councilor_${i + 1}_file.png`}</p>
                  )}
                </td>
              </tr>
            ))}
            <tr className="bg-slate-200">
              <td className="py-4 font-bold">SK Chairperson:</td>
              <td>
                {isEditingOfficials ? (
                  <input
                    className="border rounded p-1 w-full"
                    defaultValue="SK Chairperson's Name"
                  />
                ) : (
                  <p>SK Chairperson Name</p>
                )}
              </td>
              <td>
                {isEditingOfficials ? (
                  <input
                    type="file"
                    accept=".jpg,.png"
                    className="file-input ml-4"
                  />
                ) : (
                  <p className="ml-4">sk_chairperson_file.jpg</p>
                )}
              </td>
            </tr>
            <tr className="border-b">
              <td colSpan={3} className="py-4 text-right">
                {isEditingOfficials && (
                  <>
                    <button
                      onClick={handleCancel}
                      className="py-1 px-4 mr-4 w-40 border-2 border-slate-600 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-800 hover:text-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveChanges}
                      className="py-1 px-4 w-40 border-2 border-slate-600 text-slate-100 bg-slate-600 rounded-lg hover:bg-slate-800"
                    >
                      Save Changes
                    </button>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isDialogOpen && (
        <ConfirmationDialog
          onCancel={handleDialogCancel}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default InformationOfficial;
