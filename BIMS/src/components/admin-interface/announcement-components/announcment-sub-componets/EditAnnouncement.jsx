import React, { useState, useEffect } from 'react';
import { Image } from 'lucide-react'; 

const EditAnnouncement = ({ show, onClose, onEdit, announcement }) => {
  // Define state variables for form fields and image handling
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [image, setImage] = useState(null); // Holds uploaded image
  const [imagePreview, setImagePreview] = useState(""); // Preview for uploaded image
  const [alertMessage, setAlertMessage] = useState(""); // Alert for validation messages

  // This hook runs when the 'announcement' prop changes
  // It pre-fills the form fields with the announcement data
  useEffect(() => {
    if (announcement) {
      setTitle(announcement.title || "");
      setSubtitle(announcement.subtitle || "");
      setDescription(announcement.description || "");
      setStartDate(announcement.startDate || "");
      setEndDate(announcement.endDate || "");
      setAllDay(announcement.allDay || false);
      setImagePreview(announcement.imgSrc || ""); // Set the image preview
    }
  }, [announcement]);

  // Handles form submission for editing the announcement
  const handleEdit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!title || !description || !startDate || !endDate) {
      setAlertMessage("Please fill out all required fields.");
      return;
    }
    setAlertMessage(""); // Clear alert message if valid

    // Trigger the onEdit callback with the updated announcement data
    onEdit({
      title,
      subtitle,
      description,
      startDate,
      endDate,
      allDay,
      imgSrc: imagePreview // Use the preview URL as the image source
    });
    onClose(); // Close the modal after editing
  };

  // Handles image file selection and preview generation
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Generate preview URL
      e.target.value = ''; // Clear file input to allow re-upload
      setAlertMessage(""); // Clear alert message after valid image
    } else {
      setAlertMessage("Please upload a valid image file.");
    }
  };

  if (!show) return null; // Do not render modal if 'show' is false

  return (
    <div>
      {/* Background overlay */}
      <div
        className="fixed inset-0 z-[9998]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      ></div>
      
      {/* Modal container */}
      <div className="fixed inset-0 z-[9999] flex justify-center items-center">
        <div className="bg-white rounded-lg px-16 py-5 w-[600px] h-[650px] relative">
          {/* Close button */}
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
            &times;
          </button>
          
          {/* Form to edit the announcement */}
          <form onSubmit={handleEdit}>
            {/* Display alert message for form validation */}
            {alertMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                {alertMessage}
              </div>
            )}

            {/* Image upload section */}
            <div className="mb-4">
              <p className="text-left text-sm font-semibold mb-2">Upload Photo</p>
              <div className="border-2 border-dashed border-gray-300 rounded-md w-[300px] h-[150px] flex items-center justify-center relative bg-gray-100 mx-auto">
                {imagePreview ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover rounded-md" 
                    />
                    {/* Button to remove the selected image */}
                    <button 
                      type="button" 
                      onClick={() => { setImage(null); setImagePreview(""); }} 
                      className="absolute top-2 right-2 bg-white text-gray-500 hover:text-gray-700 rounded-full p-1"
                    >
                      &times;
                    </button>
                  </div>
                ) : (
                  // Placeholder for image upload input
                  <label htmlFor="imageUpload" className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden"
                      id="imageUpload"
                      onChange={handleImageUpload} 
                    />
                    <div className="flex flex-col items-center text-center">
                      <Image color="#748CAB" size={24} />
                      <p className="text-sm mt-2">Drop your image here, or <span className="text-blue-600 underline">browse</span></p>
                      <p className="text-gray-500 text-xs">Supports PNG, JPG, JPEG. Max 10MB</p>
                      <p className="text-gray-500 text-xs">800 x 800 Pixels Recommended</p>
                    </div>
                  </label>
                )}
              </div>
            </div>

            {/* Form fields */}
            <label className="block mb-2 text-left text-sm">
              Title: <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              className="border-b w-full p-2 mb-4 text-sm outline-none" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />

            <label className="block mb-2 text-left text-sm">Subtitle:</label>
            <input 
              type="text" 
              className="border-b w-full p-2 mb-4 text-sm outline-none" 
              value={subtitle} 
              onChange={(e) => setSubtitle(e.target.value)} 
            />

            <label className="block mb-2 text-left text-sm">
              Description: <span className="text-red-500">*</span>
            </label>
            <textarea 
              className="border border-gray-300 p-2 mb-4 w-full text-sm outline-none rounded" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
            ></textarea>

            {/* Date inputs for start and end dates */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block mb-2 text-left text-sm">
                  Start Date: <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date" 
                  className="border-b p-2 w-full text-sm outline-none" 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)} 
                  required 
                />
              </div>

              <div className="w-1/2">
                <label className="block mb-2 text-left text-sm">
                  End Date: <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date" 
                  className="border-b p-2 w-full text-sm outline-none" 
                  value={endDate} 
                  onChange={(e) => setEndDate(e.target.value)} 
                  required 
                />
              </div>
            </div>

            {/* Checkbox for all-day event */}
            <div className="flex items-center mb-4">
              <label className="flex items-center cursor-pointer text-sm">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={allDay}
                  onChange={() => setAllDay(!allDay)}
                />
                <div
                  className={`w-5 h-3 rounded-full transition-colors duration-300 relative 
                    ${allDay ? 'bg-[#748CAB]' : 'bg-gray-300'}` }
                >
                  <div
                    className={`w-2 h-2 bg-white rounded-full absolute top-[1px] left-[1px] transition-transform duration-300 
                    ${allDay ? 'translate-x-[12px]' : ''}` }
                  ></div>
                </div>
                <span className="ml-2">All Day</span>
              </label>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-[#3E5C76] text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-[150px] font-bold text-sm"
              >
                Save Changes
              </button>
              <button 
                type="button" 
                onClick={onClose} 
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAnnouncement;
