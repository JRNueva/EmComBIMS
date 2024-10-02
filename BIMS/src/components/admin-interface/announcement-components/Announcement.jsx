import { useState } from 'react';
import { Calendar, Edit3, Trash2, PlusCircle } from 'lucide-react';
import AddAnnouncement from './announcment-sub-componets/AddAnnouncement';
import EditAnnouncement from './announcment-sub-componets/EditAnnouncement'; 

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([
    {
      title: "Community Cleanup",
      subtitle: "Join us for a neighborhood cleanup!",
      description: "We are organizing a community cleanup event this Saturday. Volunteers are needed to help clean up the local park and surrounding areas. All supplies will be provided.",
      startDate: "2024-09-15",
      endDate: "2024-09-15",  
      allDay: true,
      imgSrc: "/path/to/cleanup-placeholder.jpg",
      upcoming: true
    },
    {
      title: "Monthly Barangay Meeting",
      subtitle: "Important updates and discussions.",
      description: "The monthly barangay meeting will be held this Monday. We will discuss upcoming events, community issues, and other important topics.",
      startDate: "2024-09-18",
      endDate: "2024-09-18",
      allDay: false,
      imgSrc: "/path/to/meeting-placeholder.jpg",
      upcoming: false
    },
    {
      title: "Health and Wellness Fair",
      subtitle: "A day dedicated to health and wellness.",
      description: "Join us for a Health and Wellness Fair featuring free health screenings, fitness classes, and wellness workshops. A fun and informative day for the whole family.",
      startDate: "2024-09-22",
      endDate: "2024-09-22",
      allDay: true,
      imgSrc: "/path/to/fair-placeholder.jpg",
      upcoming: true
    }
  ]);

  // State to track the toggled status of each announcement
  const [toggled, setToggled] = useState(announcements.map(() => false));

  // State to manage modal 
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [announcementToEdit, setAnnouncementToEdit] = useState(null); // Track the announcement being edited

  // Toggle function for each announcement
  const handleToggle = (index) => {
    const updatedToggled = [...toggled];
    updatedToggled[index] = !updatedToggled[index];
    setToggled(updatedToggled);
  };

  // Function to delete an announcement
  const deleteAnnouncement = (index) => {
    const updatedAnnouncements = announcements.filter((_, i) => i !== index);
    setAnnouncements(updatedAnnouncements);
  };

  // Function to add a new announcement
  const addAnnouncement = (newAnnouncement) => {
    setAnnouncements([...announcements, newAnnouncement]);
  };

  // Function to open the edit modal with selected announcement data
  const openEditModal = (index) => {
    setAnnouncementToEdit({ ...announcements[index], index });
    setShowEditModal(true);
  };

  // Function to edit an announcement
  const editAnnouncement = (updatedAnnouncement) => {
    const updatedAnnouncements = [...announcements];
    updatedAnnouncements[announcementToEdit.index] = updatedAnnouncement;
    setAnnouncements(updatedAnnouncements);
  };

  // Format the date 
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center font-inter pt-28 pl-20">
      {/* Main container */}
      <div className="max-w-8xl w-full p-4">
        {/* Scrollable container */}
        <div className="bg-transparent rounded-lg p-4 h-[480px] overflow-y-scroll hide-scroll">
          {announcements.length > 0 ? (
            announcements.map((announcement, index) => (
              <div key={index} className="bg-white rounded-lg mb-5 p-3 flex">
                <div className="w-1/8">
                  <img
                    className="rounded-lg w-60 h-28 object-cover"
                    src={announcement.imgSrc}
                    alt={announcement.title}
                  />
                </div>

                <div className="w-4/5 pl-3">
                  <h3 className="text-lg font-semibold text-left">{announcement.title}</h3>
                  <p className="text-gray-700 mt-1 text-left text-sm">{announcement.description}</p>

                  <div className="flex items-center mt-2">
                    <span className="text-[#3E5C76] flex items-center text-sm">
                      <Calendar className="mr-1" size={14} /> {formatDate(announcement.startDate)}
                    </span>
                    {announcement.upcoming && (
                      <span className="ml-2 text-[#3E5C76] text-xs">(Upcoming)</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3 ml-auto">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={toggled[index]}
                      onChange={() => handleToggle(index)}
                    />
                    <div
                      className={`w-6 h-3 rounded-full transition-colors duration-300 relative 
                        ${toggled[index] ? 'bg-[#748CAB]' : 'bg-gray-300'}` }
                    >
                      <div
                        className={`w-2.5 h-2.5 bg-white rounded-full absolute top-[1px] left-[1px] transition-transform duration-300 
                        ${toggled[index] ? 'translate-x-[12px]' : ''}` }
                      ></div>
                    </div>
                  </label>

                  {/* Edit Button */}
                  <button className="text-[#748CAB] hover:text-blue-600" onClick={() => openEditModal(index)}>
                    <Edit3 size={18} />
                  </button>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => deleteAnnouncement(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No current announcements.</p>
          )}
        </div>

        {/* Add Announcement Button */}
        <div className="flex justify-center text-center mt-6">
          <button
            className="text-[#3E5C76] font-semibold hover:underline flex items-center text-center"
            onClick={() => setShowModal(true)}
          >
            <PlusCircle className="mr-2" /> Add Announcement
          </button>
        </div>
      </div>

      {/* Add Announcement Modal */}
      <AddAnnouncement
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={addAnnouncement}
      />

      {/* Edit Announcement Modal */}
      <EditAnnouncement
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onEdit={editAnnouncement}
        announcement={announcementToEdit}
      />
    </div>
  );
};

export default Announcements;
