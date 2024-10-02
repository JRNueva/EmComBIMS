function RolesAccess() {
    return (
      <>
        {/* Account Access */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-medium text-gray-700 text-center font-inter">
            Account Access: SAMPLE <span className="text-red-500">*</span>
          </label>
          <div className="mt-2 space-y-2">
            {/* Admin */}
            <div className="flex items-start">
              <input
                id="admin"
                name="role"
                type="radio"
                className="cursor-pointer focus:ring-lowestBlue h-4 w-4 text-lowestBlue border-gray-300 accent-lowestBlue"
                required
              />
              <label htmlFor="admin" className="ml-3 block text-sm text-gray-700">
                <span className="font-semibold">Admin</span>
                <br />
                <span className="text-gray-500 text-xs">
                  Manage specific modules or sections of the system (e.g., user accounts, reports, official records).
                </span>
              </label>
            </div>
  
            {/* Content Manager */}
            <div className="flex items-start">
              <input
                id="content-manager"
                name="role"
                type="radio"
                className="cursor-pointer focus:ring-lowestBlue h-4 w-4 text-lowestBlue border-gray-300 accent-lowestBlue"
                required
              />
              <label htmlFor="content-manager" className="ml-3 block text-sm text-gray-700">
                <span className="font-semibold">Content Manager</span>
                <br />
                <span className="text-gray-500 text-xs">
                  Limited to managing content like news, announcements, and public documents on the barangay website.
                </span>
              </label>
            </div>
  
            {/* System Auditor */}
            <div className="flex items-start">
              <input
                id="system-auditor"
                name="role"
                type="radio"
                className="cursor-pointer focus:ring-lowestBlue h-4 w-4 text-lowestBlue border-gray-300 accent-lowestBlue"
                required
              />
              <label htmlFor="system-auditor" className="ml-3 block text-sm text-gray-700">
                <span className="font-semibold">System Auditor</span>
                <br />
                <span className="text-gray-500 text-xs">
                  Read-only access to logs, user activity, and other audit-related information.
                </span>
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default RolesAccess;
  