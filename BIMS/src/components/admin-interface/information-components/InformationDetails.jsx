import { Pencil, Camera, Trash2 } from "lucide-react";
import ConfirmationDialog from "./ConfirmationDialog";
import InformationOfficial from "./customization-components/InformationOfficial";
import InformationPolicy from "./customization-components/InformationPolicy";
import InformationDescription from "./customization-components/InformationDescription";
import InformationGallery from "./customization-components/InformationGallery";
import InformationLogo from "./customization-components/InformationLogo";

import { useState } from "react";

function InformationDetails() {
  // State management
  // Setting active tab
  const [activeTab, setActiveTab] = useState("barangay-details");

  // Confirmation dialog
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Function to handle save and cancel for details
  const [isEditingDetail, setIsEditingDetail] = useState(false);
  const handleEditClick = () => setIsEditingDetail(true);
  const handleSave = () => setShowConfirmation(true);
  const handleCancel = () => setIsEditingDetail(false);
  const handleConfirmCancel = () => setShowConfirmation(false);
  const handleConfirmSave = () => {
    setShowConfirmation(false);
    // setIsEditingDetail(false);
    // Add save logic here
  };

  // State for editable fields
  const [barangayName, setBarangayName] = useState("Barangay Mojon");
  const [cityName, setCityName] = useState("City of Malolos");
  const [addressLine, setAddressLine] = useState(
    "Brgy Mojon Hall, VR69+82W, Malolos, Bulacan"
  );
  const [email, setEmail] = useState("brgy.mojon.malolos@gmail.com");
  const [landline, setLandline] = useState("816-7602");
  const [mobileNumber, setMobileNumber] = useState("0926 485 8202");
  const [officeDay, setOfficeDay] = useState("Monday - Friday");
  const [officeHour, setOfficeHour] = useState("8:00 AM - 5:00 PM");
  const [officeNote, setOfficeNote] = useState("Closed on holidays");

  // THIS IS FOR HOTLINES
  // Details - Emergency Hotlines
  const [hotlines, setHotlines] = useState([
    { label: "Rescue Team", hotline: "(123) 456-7980" },
    // Add more initial hotline here if needed
  ]);

  const [newHotlines, setNewHotlines] = useState({ label: "", hotline: "" });
  const [isEditingHotlines, setIsEditingHotlines] = useState(false);
  const [editHotlineIndex, setEditHotlineIndex] = useState(null);

  // Function to handle adding a new emergency hotline
  const handleAddHotline = () => {
    setHotlines([...hotlines, newHotlines]);
    setNewHotlines({ label: "", hotline: "" });
  };

  // Function to handle editing an existing emergency hotline
  const handleEditHotline = (index) => {
    setIsEditingHotlines(true);
    setEditHotlineIndex(index);
    setNewHotlines(hotlines[index]);
  };

  // Function to handle updating an edited emergency hotline
  const handleUpdateHotline = () => {
    const updatedHotlines = [...hotlines];
    updatedHotlines[editHotlineIndex] = newHotlines;
    setHotlines(updatedHotlines);
    setIsEditingHotlines(false);
    setNewHotlines({ label: "", hotline: "" });
  };

  // Function to handle deleting a emergency hotline
  const handleDeleteHotline = (index) => {
    const updatedLinks = hotlines.filter((_, i) => i !== index);
    setHotlines(updatedLinks);
  };
  // END OF HOTLINES FUNCTION

  // Function to handle logo image
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const handleCameraClick = () => {
    setIsLogoVisible(true);
  };
  const handleCloseLogo = () => {
    setIsLogoVisible(false);
  };

  // Content rendering based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "barangay-details":
        return (
          <>
            {isEditingDetail ? (
              <div className="flex flex-col space-y-6  hide-scroll">
                {/* Editable fields */}
                <div className="border-t-slate-900">
                  <h3 className="font-bold">Barangay Basic Information</h3>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">Barangay name:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="text"
                        value={barangayName}
                        onChange={(e) => setBarangayName(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{barangayName}</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">City name:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="text"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{cityName}</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">Address line:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="text"
                        value={addressLine}
                        onChange={(e) => setAddressLine(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{addressLine}</span>
                    )}
                  </div>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="font-bold">Contact Details</h3>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">Email:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{email}</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">Landline:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="text"
                        value={landline}
                        onChange={(e) => setLandline(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{landline}</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">Mobile number:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{mobileNumber}</span>
                    )}
                  </div>
                </div>

                {/* Office Hours */}
                <div>
                  <h3 className="font-bold">Office Hours</h3>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">Day:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="text"
                        value={officeDay}
                        onChange={(e) => setOfficeDay(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{officeDay}</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">Hour:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="text"
                        value={officeHour}
                        onChange={(e) => setOfficeHour(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{officeHour}</span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <span className="ml-8">Note:</span>
                    <span className="text-red-500"> *</span>
                    {isEditingDetail ? (
                      <input
                        type="text"
                        value={officeNote}
                        onChange={(e) => setOfficeNote(e.target.value)}
                        className="border rounded"
                      />
                    ) : (
                      <span>{officeNote}</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-6 flex-wrap">
                  <button
                    onClick={handleCancel}
                    className="w-full sm:w-40 py-1 px-4 border-2 border-slate-600 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-800 hover:text-slate-100 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="w-full sm:w-40 py-1 px-4 border-2 border-slate-600 text-slate-100 bg-slate-600 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-6 font-inter hide-scroll">
                <div className="flex flex-col space-y-6">
                  {/* Barangay Basic Information */}
                  <div className="pt-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">Barangay Basic Information</h3>
                      <div className="cursor-pointer" onClick={handleEditClick}>
                        <Pencil size={20} color="#6C6C6C" strokeWidth={0.8} />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">Barangay name:</span>
                      <span>Barangay Mojon</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">City name:</span>
                      <span>City of Malolos</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">Address line:</span>
                      <span>Brgy Mojon Hall, VR69+82W, Malolos, Bulacan</span>
                    </div>
                  </div>
                  {/* Contact Details */}
                  <div className="pt-1">
                    <h3 className="font-bold">Contact Details</h3>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">Email:</span>
                      <span>brgy.mojon.malolos@gmail.com</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">Landline:</span>
                      <span>816-7602</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">Mobile number:</span>
                      <span>0926 485 8202</span>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="pt-1">
                    <h3 className="font-bold">Office Hours</h3>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">Day:</span>
                      <span>Monday - Friday</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">Hour:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                      <span className="ml-8">Note:</span>
                      <span>Closed on holidays</span>
                    </div>
                  </div>

                  {/* Emergency Hotline */}
                  <div className="border-2 border-slate-50 border-t-slate-100 pt-1">
                    <h3 className="font-bold">Emergency Hotline</h3>
                    <div className="p-4">
                      <table className="min-w-full table-auto border border-slate-300">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left px-4 py-2">Label</th>
                            <th className="text-left px-4 py-2">Hotline</th>
                            <th className="px-4 py-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {hotlines.map((link, index) => (
                            <tr key={index} className="border-b">
                              <td className="px-4 py-2">{link.label}</td>
                              <td className="px-4 py-2">{link.hotline}</td>
                              <td className="flex justify-center py-2">
                                <button
                                  className="text-slate-500 px-2"
                                  onClick={() => handleEditHotline(index)}
                                >
                                  <Pencil />
                                </button>
                                <button
                                  className="text-red-500 px-2"
                                  onClick={() => handleDeleteHotline(index)}
                                >
                                  <Trash2 />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Form for Adding or Editing Emergency Hotlines */}
                      <div className="flex justify-center items-center mt-4">
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Label"
                            value={newHotlines.label}
                            onChange={(e) =>
                              setNewHotlines({
                                ...newHotlines,
                                label: e.target.value,
                              })
                            }
                            className="border p-2 rounded mb-2 mr-2"
                          />
                          <input
                            type="text"
                            placeholder="No."
                            value={newHotlines.hotline}
                            onChange={(e) =>
                              setNewHotlines({
                                ...newHotlines,
                                hotline: e.target.value,
                              })
                            }
                            className="border p-2 rounded mb-2"
                          />
                          {isEditingHotlines ? (
                            <button
                              className="ml-2 bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
                              onClick={handleUpdateHotline}
                            >
                              Update
                            </button>
                          ) : (
                            <button
                              className="ml-2 bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
                              onClick={handleAddHotline}
                            >
                              + Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );

      case "barangay-officials":
        return <InformationOfficial />;

      case "barangay-policies":
        return <InformationPolicy />;

      case "barangay-description":
        return <InformationDescription />;

      case "barangay-gallery":
        return <InformationGallery />;

      default:
        return <div>Barangay Details Content</div>;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-screen pt-20 pl-20 font-inter bg-gray97">
        <div className="m-auto  w-full md:w-[30%] h-auto md:h-[80vh] flex flex-col items-center justify-center bg-white ">
          <div className="relative inline-block mb-8 group">
            <img
              src="https://iconape.com/wp-content/png_logo_vector/barangay-logo.png"
              alt="barangay_logo"
              className="block w-[150px] md:w-[200px] transition-opacity duration-300 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-90"></div>
            <Camera
              className="absolute bottom-0 right-0 translate-x-[-50%] translate-y-[-50%] bg-[#f2eeee] rounded-full border-3 border-[#f2eeee] text-black cursor-pointer"
              onClick={handleCameraClick}
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg">Barangay Mojon</h2>
            <p className="text-xs text-[#667085] mt-4 md:mt-[80px]">
              City of Malolos, Bulacan
            </p>
          </div>
        </div>
        <div className="m-auto p-2 w-full md:w-[60%] h-auto md:h-[80vh] bg-white flex flex-col ">
          <div className="flex flex-wrap md:flex-nowrap ">
            <button
              className={`bg-white text-[#667085] py-1 px-2 mr-1 cursor-pointer transition-colors duration-300 ${
                activeTab === "barangay-details"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : ""
              }`}
              onClick={() => setActiveTab("barangay-details")}
            >
              Barangay Details
            </button>
            <button
              className={`bg-white text-[#667085] py-1 px-2 mr-1 cursor-pointer transition-colors duration-300 ${
                activeTab === "barangay-officials"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : ""
              }`}
              onClick={() => setActiveTab("barangay-officials")}
            >
              Barangay Officials
            </button>
            <button
              className={`bg-white text-[#667085] py-1 px-2 mr-1 cursor-pointer transition-colors duration-300 ${
                activeTab === "barangay-policies"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : ""
              }`}
              onClick={() => setActiveTab("barangay-policies")}
            >
              Barangay Policies
            </button>
            <button
              className={`bg-white text-[#667085] py-1 px-2 mr-1 cursor-pointer transition-colors duration-300 ${
                activeTab === "barangay-description"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : ""
              }`}
              onClick={() => setActiveTab("barangay-description")}
            >
              Description
            </button>
            <button
              className={`bg-white text-[#667085] py-1 px-2 mr-1 cursor-pointer transition-colors duration-300 ${
                activeTab === "barangay-gallery"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : ""
              }`}
              onClick={() => setActiveTab("barangay-gallery")}
            >
              Gallery
            </button>
          </div>
          <div className="flex-1 p-5 bg-white border-t-2 border-[#efefef] rounded-b-md overflow-y-auto  hide-scroll">
            {renderContent()}
          </div>
        </div>
      </div>
      {showConfirmation && (
        <ConfirmationDialog
          onCancel={handleConfirmCancel}
          onConfirm={handleConfirmSave}
        />
      )}

      {isLogoVisible && <InformationLogo onClose={handleCloseLogo} />}
    </>
  );
}

export default InformationDetails;
