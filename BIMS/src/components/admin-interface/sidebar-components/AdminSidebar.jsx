import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';
import { 
    LayoutDashboard, FolderClosed, BellRing, Table2, 
    UsersRound, FilePenLine, Megaphone, FilePlus, 
    Settings, ChartLine, Archive 
} from "lucide-react";

// Get DB the available records
const recordsData = [
    {
        "id": "barangay-indigency-form",
        "label": "Barangay Indigency"
    },
    {
        "id": "business-clearance-form",
        "label": "Business Clearance"
    },
    {
        "id": "cedula-form",
        "label": "Cedula Form"
    },
    {
        "id": "barangay-accreditation-form",
        "label": "Barangay Accreditation Form"
    },
    {
        "id": "barangay-clearance-form",
        "label": "Barangay Clearance"
    }
];

function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col font-poppins">
      <Sidebar>

        <SidebarItem 
          id="Dashboard" 
          icon={<LayoutDashboard size={20} />} 
          text="Dashboard" 
          onClick={() => navigate("/admin/dashboard")}
        />

        <SidebarItem 
          id="Notification" 
          icon={<BellRing size={20} />} 
          text="Notification" 
          onClick={() => navigate("/admin/notification")}
        />

        <SidebarItem 
          id="Barangay Information" 
          icon={<Table2 size={20} />} 
          text="Barangay Information" 
          onClick={() => navigate("/admin/barangay-information")}
        />

        {/* Roles Section */}
        <SidebarItem 
          id="Roles" 
          icon={<UsersRound size={20} />} 
          text="Roles" 
          to="/admin/roles"
          onClick={() => navigate("/admin/roles")}
          isDropdown 
        >
          <SidebarItem 
            id="Roles_All" 
            text="All" 
            to="/admin/roles"
            onClick={() => navigate("/admin/roles")}
          />
          <SidebarItem 
            id="Administrators" 
            text="Administrators" 
            to="/admin/roles/administrators"
            onClick={() => navigate("/admin/roles/administrators")}
          /> 
          <SidebarItem 
            id="Barangay_Officials" 
            text="Barangay Officials" 
            to="/admin/roles/barangay-officials"
            onClick={() => navigate("/admin/roles/barangay-officials")}
          /> 
        </SidebarItem>

        {/* Registry Section */}
        <SidebarItem 
          id="Registry" 
          icon={<FilePenLine size={20} />} 
          text="Registry" 
          isDropdown 
          to="/admin/registry/residents-information"
        >
          <SidebarItem 
            id="Residents" 
            text="Residents" 
            to="/admin/registry/residents-information"
            onClick={() => navigate("/admin/registry/residents-information")}
          />
          <SidebarItem 
            id="Business" 
            text="Business" 
            to="/admin/registry/business-information"
            onClick={() => navigate("/admin/registry/business-information")}
          /> 
          <SidebarItem 
            id="Incidents" 
            text="Incidents" 
            to="registry/incidents-reports" 
            onClick={() => navigate("registry/incidents-reports")}
          /> 
        </SidebarItem>

        {/* Records Section */}
        <SidebarItem 
          id="Records" 
          icon={<FolderClosed size={20} />} 
          text="Records" 
          isDropdown 
          to="/admin/records/all"
          onClick={() => navigate("/admin/records/all")}
        >
          <SidebarItem 
            id="R_All" 
            text="All" 
            to="/admin/records/all"
            onClick={() => navigate("/admin/records/all")}
          />
          {recordsData.map(record => {
            return <SidebarItem 
              key={record.id} 
              id={record.id} 
              text={record.label} 
              to={`/admin/records/${record.id}`} 
              onClick={() => navigate(`/admin/records/${record.id}`)} 
            />
          })}
        </SidebarItem>

        <SidebarItem 
          id="Archives" 
          icon={<Archive size={20} />} 
          text="Archives" 
          onClick={() => navigate("/admin/archives")}
        />

        <SidebarItem 
          id="Announcement" 
          icon={<Megaphone size={20} />} 
          text="Announcements" 
          onClick={() => navigate("/admin/announcements")}
        />

        <SidebarItem 
          id="Requests" 
          icon={<FilePlus size={20} />} 
          text="Requests" 
          onClick={() => navigate("/admin/requests")}
        />

        <SidebarItem 
          id="Reports" 
          icon={<ChartLine size={20} />} 
          text="Reports" 
          onClick={() => navigate("/admin/reports")}
        />

        {/* Settings Section */}
        <SidebarItem 
          id="Settings" 
          icon={<Settings size={20} />} 
          text="Settings" 
          isDropdown 
          to="/admin/settings/log-history"
          onClick={() => navigate("/admin/settings/log-history")}
        > 
          <SidebarItem 
            id="Log_History" 
            text="Log History" 
            to="/admin/settings/log-history"
            onClick={() => navigate("/admin/settings/log-history")}
          />
          <SidebarItem 
            id="Import_Records" 
            text="Import Records" 
            to="/admin/settings/import-records"
            onClick={() => navigate("/admin/settings/import-records")}
          />
          <SidebarItem 
            id="Backup" 
            text="Backup" 
            to="/admin/settings/backup"
          />
        </SidebarItem>
      </Sidebar>
    </div>
  );
}

export default AdminSidebar;
