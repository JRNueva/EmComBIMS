import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

import './Notification.css';

// Initial list of notifications
const initialNotifications = [
  {
    id: 1,
    title: 'New Resident Profile Submission',
    description: 'A new resident profile has been submitted and is pending approval.',
    timestamp: '2h ago',
    timestampDateTime: '2023-01-23T13:23Z',
    read: false,
  },
  {
    id: 2,
    title: 'Payment Received',
    description: 'Your payment for the barangay clearance has been received.',
    timestamp: '4h ago',
    timestampDateTime: '2023-01-23T11:23Z',
    read: true,
  },
  {
    id: 3,
    title: 'Barangay Event Scheduled',
    description: 'A new barangay event has been scheduled for next week.',
    timestamp: '1d ago',
    timestampDateTime: '2023-01-22T13:23Z',
    read: false,
  },
  {
    id: 4,
    title: 'Document Approval',
    description: 'Your request for document approval has been accepted.',
    timestamp: '3d ago',
    timestampDateTime: '2023-01-20T13:23Z',
    read: true,
  },
  {
    id: 5,
    title: 'Profile Update',
    description: 'Your resident profile has been successfully updated.',
    timestamp: '5d ago',
    timestampDateTime: '2023-01-18T13:23Z',
    read: false,
  },
  // Add more notifications as needed
];

export default function Notification() {
  // State to manage the list of notifications
  const [notifications, setNotifications] = useState(initialNotifications);

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <div className="h-screen w-screen pt-24 pl-10 bg-gray97">
      {/* Container centered below the header */}
      <div className="flex items-start mx-auto justify-center ">
        <div className="max-w-6xl w-full p-6 bg-white rounded-lg shadow-lg transform translate-y-16">
          {/* Header section with title and button */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#3E5C76]">New for you</h2>
            <button
              onClick={markAllAsRead}
              className="flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-gray-600"
            >
              <CheckCircle size={14} />
              <span>Mark all as read</span>
            </button>
          </div>
          {/* Notifications list container */}
          <div className="max-h-96 overflow-y-auto pr-4 custom-scrollbar hide-scroll">
            <ul role="list" className="divide-y divide-gray-300">
              {notifications.map((notification) => (
                <li key={notification.id} className="relative flex justify-between items-start gap-x-6 py-5">
                  <div className="relative flex items-start gap-x-4">
                    {/* Notification indicator circle */}
                    {!notification.read && (
                      <div className="absolute left-0 top-1 flex-none rounded-full bg-[#748CAB] p-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#748CAB]" />
                      </div>
                    )}
                    <div className="min-w-0 flex-auto pl-6">
                      {/* Notification title */}
                      <p className="text-sm font-bold leading-6 text-gray-900 text-left">{notification.title}</p>
                      {/* Notification description */}
                      <p className="mt-1 text-sm leading-5 text-gray-500 text-left">{notification.description}</p>
                    </div>
                  </div>
                  {/* Notification timestamp */}
                  <time className="text-xs leading-5 text-gray-500" dateTime={notification.timestampDateTime}>
                    {notification.timestamp}
                  </time>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
