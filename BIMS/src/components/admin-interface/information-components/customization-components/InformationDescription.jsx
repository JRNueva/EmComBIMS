import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import ConfirmationDialog from "../ConfirmationDialog";

function InformationDescription() {
  // State for editable fields specific to barangay-description
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [description, setDescription] = useState("Enter description here.");
  const [vision, setVision] = useState("Vision statement goes here.");
  const [mission, setMission] = useState("Mission statement goes here.");
  const [about, setAbout] = useState("About information goes here.");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Temporary state for handling unsaved changes
  const [tempDescription, setTempDescription] = useState(description);
  const [tempVision, setTempVision] = useState(vision);
  const [tempMission, setTempMission] = useState(mission);
  const [tempAbout, setTempAbout] = useState(about);

  const handleEditDescriptionClick = () => {
    setTempDescription(description);
    setTempVision(vision);
    setTempMission(mission);
    setTempAbout(about);
    setIsEditingDescription(true);
  };

  const handleSaveDescription = () => setIsDialogOpen(true);

  const handleCancelDescription = () => {
    setIsEditingDescription(false);
    // Reset temporary state to original values
    setTempDescription(description);
    setTempVision(vision);
    setTempMission(mission);
    setTempAbout(about);
  };

  // Handlers for the confirmation dialog
  const handleDialogCancel = () => setIsDialogOpen(false);
  const handleDialogConfirm = () => {
    // Save the temporary state to the original state
    setDescription(tempDescription);
    setVision(tempVision);
    setMission(tempMission);
    setAbout(tempAbout);
    setIsEditingDescription(false);
    setIsDialogOpen(false);
  };

  // Details - Quick Links
  const [quickLinks, setQuickLinks] = useState([
    { label: "Homepage", url: "https://example.com" },
    // Add more initial links here if needed
  ]);

  const [newLink, setNewLink] = useState({ label: "", url: "" });
  const [isEditingLinks, setIsEditingLinks] = useState(false);
  const [editLinkIndex, setEditLinkIndex] = useState(null);

  // Function to handle adding a new quick link
  const handleAddQuickLink = () => {
    setQuickLinks([...quickLinks, newLink]);
    setNewLink({ label: "", url: "" });
  };

  // Function to handle editing an existing quick link
  const handleEditLink = (index) => {
    setIsEditingLinks(true);
    setEditLinkIndex(index);
    setNewLink(quickLinks[index]);
  };

  // Function to handle updating an edited link
  const handleUpdateLink = () => {
    const updatedLinks = [...quickLinks];
    updatedLinks[editLinkIndex] = newLink;
    setQuickLinks(updatedLinks);
    setIsEditingLinks(false);
    setNewLink({ label: "", url: "" });
  };

  // Function to handle deleting a quick link
  const handleDeleteLink = (index) => {
    const updatedLinks = quickLinks.filter((_, i) => i !== index);
    setQuickLinks(updatedLinks);
  };

  return (
    <>
      {isEditingDescription ? (
        <div className="flex flex-col space-y-6 font-inter">
          {/* Editable fields */}
          <div>
            <div className="flex justify-start mb-4">
              <div className="flex-initial w-64">
                <h3 className="font-bold">
                  Barangay Description:
                  <span className="text-red-500"> *</span>
                </h3>
              </div>
              <textarea
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                className="border rounded grow"
              />
            </div>

            <div className="flex justify-start mb-4">
              <div className="flex-initial w-64">
                <h3 className="font-bold">
                  Vision:
                  <span className="text-red-500"> *</span>
                </h3>
              </div>
              <textarea
                value={tempVision}
                onChange={(e) => setTempVision(e.target.value)}
                className="border rounded grow"
              />
            </div>

            <div className="flex justify-start mb-4">
              <div className="flex-initial w-64">
                <h3 className="font-bold">
                  Mission:
                  <span className="text-red-500"> *</span>
                </h3>
              </div>
              <textarea
                value={tempMission}
                onChange={(e) => setTempMission(e.target.value)}
                className="border rounded grow"
              />
            </div>

            <div className="flex justify-start mb-4">
              <div className="flex-initial w-64">
                <h3 className="font-bold">
                  About:
                  <span className="text-red-500"> *</span>
                </h3>
              </div>
              <textarea
                value={tempAbout}
                onChange={(e) => setTempAbout(e.target.value)}
                className="border rounded grow"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6 flex-wrap">
            <button
              onClick={handleCancelDescription}
              className="w-full sm:w-40 py-1 px-4 border-2 border-slate-600 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-800 hover:text-slate-100 transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveDescription}
              className="w-full sm:w-40 py-1 px-4 border-2 border-slate-600 text-slate-100 bg-slate-600 rounded-lg hover:bg-slate-800 transition-colors duration-300"
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-6 font-inter">
          <div className="flex flex-col space-y-6">
            {/* Displayed Information */}
            <div className="pt-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="flex-initial w-64 font-bold">
                  Barangay Description:
                </h3>
                <span className="flex-1 whitespace-pre-line">
                  {description}
                </span>
                <div
                  className="cursor-pointer"
                  onClick={handleEditDescriptionClick}
                >
                  <Pencil size={20} color="#6C6C6C" strokeWidth={0.8} />
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="flex-initial w-64 font-bold">Vision:</h3>
                <span className="flex-1 whitespace-pre-line">{vision}</span>
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="flex-initial w-64 font-bold">Mission:</h3>
                <span className="flex-1 whitespace-pre-line">{mission}</span>
              </div>

              <div className="flex justify-between items-start">
                <h3 className="flex-initial w-64 font-bold">About:</h3>
                <span className="flex-1 whitespace-pre-line">{about}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2 font-inter">
            <h3 className="font-bold">Quick Links:</h3>
            <div className="p-2">
              <table className="min-w-full table-auto border border-slate-300">
                <thead>
                  <tr className="border-b">
                    <th className="text-left px-4 py-2">Label</th>
                    <th className="text-left px-4 py-2">URL</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {quickLinks.map((link, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{link.label}</td>
                      <td className="px-4 py-2">{link.url}</td>
                      <td className="flex justify-center py-2">
                        <button
                          className="text-slate-500 px-2"
                          onClick={() => handleEditLink(index)}
                        >
                          <Pencil />
                        </button>
                        <button
                          className="text-red-500 px-2"
                          onClick={() => handleDeleteLink(index)}
                        >
                          <Trash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Form for Adding or Editing Quick Links */}
              <div className="flex justify-center items-center mt-4">
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Label"
                    value={newLink.label}
                    onChange={(e) =>
                      setNewLink({ ...newLink, label: e.target.value })
                    }
                    className="border p-2 rounded mb-2 mr-2"
                  />
                  <input
                    type="text"
                    placeholder="URL"
                    value={newLink.url}
                    onChange={(e) =>
                      setNewLink({ ...newLink, url: e.target.value })
                    }
                    className="border p-2 rounded mb-2"
                  />
                  {isEditingLinks ? (
                    <button
                      className="ml-2 bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
                      onClick={handleUpdateLink}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="ml-2 bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
                      onClick={handleAddQuickLink}
                    >
                      + Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {isDialogOpen && (
        <ConfirmationDialog
          onCancel={handleDialogCancel}
          onConfirm={handleDialogConfirm}
        />
      )}
    </>
  );
}

export default InformationDescription;
