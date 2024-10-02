import { useState } from "react";

import { Pencil, Camera, CirclePlus, FolderDown, Trash2 } from "lucide-react";
import ConfirmationDialog from "../dialog-components/ConfirmationDialog";
import UpdatePasswordDialog from "../dialog-components/UpdatePasswordDialog";
import InformationLogo from "./UserProfile";
import profile from "../../../../assets/admin-interface/icons/sidebar/tree.png";
// import 'react-phone-input-2/lib/style.css';

function InformationDetails() {

  const [activeTab, setActiveTab] = useState("barangay-details");

  // Edit state - barangay details
  const [isEditingDetail, setIsEditingDetail] = useState(false);

  // Confirmation dialog
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false);

  // Event Handlers
  const handleEditClick = () => setIsEditingDetail(true);
  const handleSave = () => setShowConfirmation(true);
  const handleCancel = () => setIsEditingDetail(false);
  const handleConfirmCancel = () => {
    setShowConfirmation(false);
    setShowUpdateConfirmation(false);
  }
  const handleUpdate = () => setShowUpdateConfirmation(true);
  const handleConfirmSave = () => {
    setShowUpdateConfirmation(false);
    setShowConfirmation(false);
    setIsEditingDetail(false);
  };


  const toggleCheckbox = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Logo
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const handleCameraClick = () => {
    setIsLogoVisible(true);
  };
  const handleCloseLogo = () => {
    setIsLogoVisible(false);
  };

  // Enable officials editing button
  const [isEditingOfficials, setIsEditingOfficials] = useState(false);

  const toggleEditOfficials = () => {
    setIsEditingOfficials(!isEditingOfficials);
  };

  // Content rendering based on active tab
  const PassSecu = () => {
    return (
      <>
        <div className="h-screen hide-scroll">
          <h3 className="font-bold text-sm ml-7 ">Login</h3>
        </div>
        <div className="w-fit flex items-start space-y-2 sm:space-y-0 sm:space-x-2  ">
                  <div className="grid grid-cols-2 pl-7 gap-36">
                      <div className="flex flex-col items-start justify-start">
                      <h3 className="font-bold text-[12px]">Password </h3>
                      <h3 className=" text-[8px] text-[#777E90]">Last updated 1 month ago</h3>
                      </div>
                      <div className="items-center justify-start ml-[90px]">
                      <button
                      onClick={handleUpdate}
                      className=" h-8 sm:w-36 py-1 font-bold bg-white text-[#3E5C76] text-xs px-4 border-2 border-slate-600 border-[#3E5C76] text-slate-100 bg-slate-600 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                    >
                      Save Changes
                    </button>
                        </div>
                  </div>
                </div>
                <hr/>
                <div>
        <h3 className="font-bold text-sm ml-7 ">Device History</h3>
        </div>
        <div className="flex items-start space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="grid grid-cols-2 pl-7 gap-36">
                      <div className="flex flex-col items-start justify-start">
                      <h3 className="font-bold text-[12px]">Session </h3>
                      <h3 className=" text-[8px] text-[#777E90]">April 14, 2024 at 03:36pm</h3>
                      </div>
                      <div className="items-center justify-start ml-[130px]">
                      <button
                      onClick={handleUpdate}
                      className="text-[13px] text-[#3E5C76]"
                    >
                     Log out device
                    </button>
                        </div>
                  </div>
                  
                </div>
                <hr/>
                <div className="flex items-start space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="grid grid-cols-2 pl-7 gap-36">
                      <div className="flex flex-col items-start justify-start">
                      <h3 className="font-bold text-[12px]">macOs Big Sur. Chrome </h3>
                      <h3 className=" text-[8px] text-[#777E90]">April 12, 2024 at 10:12am</h3>
                      </div>
                      <div className="items-center justify-start ml-[130px]">
                      <button
                      onClick={handleUpdate}
                      className="text-[13px] text-[#3E5C76]"
                    >
                     Log out device
                    </button>
                        </div>
                  </div>
                  
                </div>
                <hr/>
                <div className="flex items-start space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="grid grid-cols-2 pl-7 gap-36">
                      <div className="flex flex-col items-start justify-start">
                      <h3 className="font-bold text-[12px]">Session </h3>
                      <h3 className=" text-[8px] text-[#777E90]">April 1, 2024 at 02:36pm</h3>
                      </div>
                      <div className="items-center justify-start ml-[130px]">
                      <button
                      onClick={handleUpdate}
                      className="text-[13px] text-[#3E5C76]"
                    >
                     Log out device
                    </button>
                        </div>
                  </div>
                  
                </div>
                
      </>
    )

  }

  
  const renderContent = () => {
    switch (activeTab) {
      case "barangay-details":
        return (
          <>
            {isEditingDetail ? (
              
              <div className="grid grid-cols-3 p-4 gap-9">
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">First Name: <span className="text-red-500">*</span> </h3>
                  <input
                    type="text"
                    defaultValue="Angela"
                    required
                    className="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Middle Name: <span className="text-red-500">*</span> </h3>
                  <input
                    type="text"
                    defaultValue=""
                    required
                    className="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Last Name: <span className="text-red-500">*</span> 
                  </h3>
                  <input
                    type="text"
                    defaultValue="Decena"
                    required
                    className="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                <h3 className="font-bold text-xs">Date of Birth:
                   <span className="text-red-500">*</span> 
                   </h3>
                  <input
                    type="date"
                    defaultValue="1998-06-10"
                    required
                    className="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                <h3 className="font-bold text-xs">Email Address: 
                  <span className="text-red-500">*</span> 
                </h3>
                  <input
                    type="email"
                    defaultValue="decena.a@gmail.com"
                    required
                    className="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Contact Number: <span className="text-red-500">*</span></h3>      
                  <input type="text" id="phone-input" 
                  aria-describedby="helper-text-explanation" 
                  class="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm" 
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                  placeholder="123-456-7890" 
                  required />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">House No:</h3>
                  <input
                    type="text"
                    defaultValue="456"
                    required
                    className="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                <h3 className="font-bold text-xs">Street:</h3>
                  <input
                    type="text"
                    defaultValue="Oak Street"
                    required
                    className="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm"
                  />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Subd/Village:</h3>
                  <input
                    type="text"
                    defaultValue=""
                    required
                    className="border border-[#667085] p-0.5 w-40 sm:w-32 ml-0 sm:ml-2 text-sm"
                  />
                  
                  </div>
                  <div></div>
                  <div>
                  <button
                      onClick={handleCancel} // Remove Warning
                      className=" h-8 sm:w-36 py-1 px-4 border-2 text-[#3E5C76] text-xs border-slate-600 border-[#3E5C76] text-slate-100 bg-slate-600 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                
                  </div>
                  <div>
                    
                  <button
                      onClick={handleSave} // Remove Warning
                      className=" h-8 sm:w-36 py-1 bg-[#3E5C76] text-snow text-xs px-4 border-2 border-slate-600 border-[#3E5C76] text-slate-100 bg-slate-600 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                    >
                      Save Changes
                    </button>
                </div>                    
              </div>       
            ) : (
              <div className="relative grid grid-cols-3 p-7 gap-12">
                <div
                  className="absolute top-2 right-0 cursor-pointer"
                  onClick={handleEditClick}
                >
                  <Pencil size={20} color="#6C6C6C" strokeWidth={0.8} />
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">First Name: <span className="text-red-500">*</span> </h3>
                  <h3 className=" text-sm">Angela</h3>
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Middle Name: </h3>
                  <h3 className=" text-sm"></h3>
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Last Name: <span className="text-red-500">*</span> </h3>
                  <h3 className=" text-sm">Decena</h3>
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Date of Birth: <span className="text-red-500">*</span> </h3>
                  <h3 className=" text-sm">1998-06-10</h3>
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Email Address: <span className="text-red-500">*</span> </h3>
                  <h3 className=" text-sm">decena.a@gmail.com</h3>
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Contact Number: </h3>
                  <h3 className=" text-sm">+63 978 143 5649</h3>
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">House No:</h3>
                  <h3 className=" text-sm">456</h3>
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Street: </h3>
                  <h3 className=" text-sm">Oak Street</h3>
                </div>
                <div className="flex flex-col items-start justify-left space-y-2 sm:space-y-0 sm:space-x-2">
                  <h3 className="font-bold text-xs">Subd/Village:</h3>
                  <h3 className=" text-sm"></h3>
                </div>

              </div>
            )}
          </>
        );

    }
  };

  return (
    <>
      <div className="h-screen w-screen flex pl-28 pr-10 pt-28 *:gap-4 gap-10 overflow-hidden bg-[#F7F7F7] text-left justify-end">
        <div className="fixed left-28 w-1/3 h-auto md:h-[80vh] flex flex-col items-center justify-center bg-white">
          <div className="relative inline-block mb-8 group">
            <img
              src={profile}
              alt="AdminProfile"
              className="block w-[150px] md:w-[200px] transition-opacity duration-300 group-hover:opacity-50 rounded-full"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-90"></div>
            <Camera
              className="absolute bottom-0 right-0 translate-x-[-50%] translate-y-[-50%] bg-[#f2eeee] rounded-full border-3 border-[#f2eeee] text-black cursor-pointer"
              onClick={handleCameraClick}
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold text-lg">Angela Decena</h2>
            <h3 className="font text-xm">Adminstrator</h3>
            <div className="text-left">
            <p className="text-xs text-[#667085] mt-4 md:mt-[80px]">
            Access ID: Admin_ADecena2019 <br/>
            Account Creation Date : 12 September 2019          
            </p>
            </div>
          </div>
        </div>
        <div className="p-2 w-[60%] h-auto md:h-[80vh] bg-[#ffffff] flex flex-col overflow-hidden">
          <div className="flex flex-col gap-2 py-3 px-5 bg-[#ffffff] border-t-2 border-[#ffffff] rounded-b-md overflow-y-auto">
            <div className="flex flex-col h-8 justify-center items-start">
            <h1 className="font-bold">Profile Information</h1>
            </div>
            <hr/>
            {renderContent()}
            
            <div className="flex flex-col h-8 justify-center items-start">
            <h1 className="font-bold">Password & Security</h1>
            
            </div>
            <hr/>
            {PassSecu()}
            <hr/>


          </div>
        </div>
      </div>
      {showConfirmation && (
        <ConfirmationDialog
          onCancel={handleConfirmCancel}
          onConfirm={handleConfirmSave}
        />
      )}
            {showUpdateConfirmation && (
        <UpdatePasswordDialog
        onCancel={handleConfirmCancel}
        onConfirm={handleConfirmSave}
        />
      )}

      {isLogoVisible && <InformationLogo onClose={handleCloseLogo} />}
    </>
  );
}

export default InformationDetails;
