import { X } from 'lucide-react';
import RolesAccess from './RolesAccess';
import RolesPosition from './RolesPosition';

function RolesAddModal({ isModalOpen, onClose }) {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-4/5 md:w-2/3 lg:w-1/2 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="w-full text-2xl py-2 font-bold font-inter text-center">Add Account</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <form>
              {/* First and Last Name input */}
              <div className="mb-5 flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">
                    First Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lowestBlue focus:border-lowestBlue sm:text-sm"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">
                    Last Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lowestBlue focus:border-lowestBlue sm:text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email Address and Confirm Email Address input */}
              <div className="mb-5 flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">
                    Email Address: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lowestBlue focus:border-lowestBlue sm:text-sm"
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700 font-inter">
                    Confirm Email Address: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lowestBlue focus:border-lowestBlue sm:text-sm"
                    required
                  />
                </div>
              </div>

              {/* Position Dropdown */}
              <div className="mb-8">
                <RolesPosition />
              </div>

              {/* Account Access */}
              <div className="mb-8">
                <RolesAccess />
              </div>

              {/* Note */}
              <p className="text-gray-700 text-center text-xs font-inter italic mt-8 mb-8">
                A password setup email will be sent to the new user.
              </p>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-lowBlue text-white px-4 py-2 rounded-lg font-inter font-medium"
              >
                Add Account
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default RolesAddModal;
