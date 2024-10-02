import React, { useState } from 'react'; 
import { Image } from 'lucide-react'; 

const AddAnnouncement = ({ show, onClose, onAdd }) => {
  // States to manage form data for the announcement
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [allDay, setAllDay] = useState(false); // Handles the "All Day" checkbox
  const [image, setImage] = useState(null); // Stores the uploaded image file
  const [imagePreview, setImagePreview] = useState(null); // Stores the preview URL for the image

  // If the modal is not supposed to be shown, return null (doesn't render anything)
  if (!show) return null;

  // Handles the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Creates a new announcement object with the form data
    const newAnnouncement = {
      title,
      subtitle,
      description,
      startDate,
      endDate,
      allDay,
      imgSrc: image ? URL.createObjectURL(image) : "default.jpg", // Sets the image URL or a default one if none is uploaded
      upcoming: true,
    };

    // Calls the onAdd function passed via props to add the new announcement
    onAdd(newAnnouncement);

    // Resets the form fields after submission
    setTitle('');
    setSubtitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setAllDay(false);
    setImage(null);
    setImagePreview(null);

    // Closes the modal after submission
    onClose();
  };

  // Handles image upload and sets the preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Validates if the file is an image
    if (file && file.type.match('image.*')) {
      setImage(file); // Stores the uploaded image file
      setImagePreview(URL.createObjectURL(file)); // Sets the preview URL for the image
      e.target.value = ''; // Clears the file input value to allow re-uploading
    } else {
      alert("Please upload a valid image file."); // Alerts if the file is not an image
    }
  };

  return (
    <div>
      {/* Overlay for dark background when the modal is open */}
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

          {/* Form starts here */}
          <form onSubmit={handleSubmit} className="flex flex-col h-full">

            {/* Image upload section */}
            <div className="mb-4 flex-shrink-0">
              <p className="text-left text-sm font-semibold mb-2">Upload Photo</p>
              <div className="border-2 border-dashed border-gray-300 rounded-md w-[300px] h-[150px] flex items-center justify-center relative bg-gray-100 mx-auto">
                {imagePreview ? (
                  <div className="relative w-full h-full">
                    {/* Preview the uploaded image */}
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover rounded-md" 
                    />
                    {/* Button to remove the image */}
                    <button 
                      type="button" 
                      onClick={() => { setImage(null); setImagePreview(""); }} 
                      className="absolute top-2 right-2 bg-white text-gray-500 hover:text-gray-700 rounded-full p-1"
                    >
                      &times;
                    </button>
                  </div>
                ) : (
                  // File input for uploading the image
                  <label htmlFor="imageUpload" className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden"
                      id="imageUpload"
                      onChange={handleImageUpload} 
                    />
                    {/* Image upload instructions */}
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

            {/* Title input */}
            <div className="flex-grow">
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

              {/* Subtitle input */}
              <label className="block mb-2 text-left text-sm">Subtitle:</label>
              <input 
                type="text" 
                className="border-b w-full p-2 mb-4 text-sm outline-none" 
                value={subtitle} 
                onChange={(e) => setSubtitle(e.target.value)} 
              />

              {/* Description input */}
              <label className="block mb-2 text-left text-sm">
                Description: <span className="text-red-500">*</span>
              </label>
              <textarea 
                className="border border-gray-300 p-2 mb-4 w-full text-sm outline-none rounded" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
              ></textarea>

              {/* Start date and End date inputs */}
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

              {/* All Day toggle */}
              <div className="flex items-center mb-4">
                <label className="flex items-center cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={allDay}
                    onChange={() => setAllDay(!allDay)}
                  />
                  {/* Toggle Switch */}
                  <div
                    className={`w-5 h-3 rounded-full transition-colors duration-300 relative ${
                      allDay ? 'bg-[#748CAB]' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 bg-white rounded-full absolute top-[1px] left-[1px] transition-transform duration-300 ${
                        allDay ? 'translate-x-[12px]' : ''
                      }`}
                    ></div>
                  </div>
                  <span className="ml-2">All Day</span>
                </label>
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-[#3E5C76] text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-[150px] font-bold text-sm"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncement;
