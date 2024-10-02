import RootLayoutResident from '../components/resident-interface/Root.jsx';
import ErrorPageResident from '../components/resident-interface/ErrorPage.jsx';
import Home from '../components/resident-interface/home-components/Home.jsx';
import AnnouncementR from '../components/resident-interface/announcement-components/Announcement.jsx';
import Services from '../components/resident-interface/services-components/Services.jsx';
import ServiceForm from '../components/resident-interface/services-components/services-form-components/ServiceForm.jsx';
import RootLayoutPolicies from '../components/resident-interface/policies-components/Policies.jsx';
import Accordion from '../components/resident-interface/policies-components/Accordion.jsx';
import About from '../components/resident-interface/about-components/About.jsx';
import FacilitiesMainSection from '../components/resident-interface/about-components/facilities-main-section/FacilitiesMainSection.jsx';

import RootLayoutAdmin from '../components/admin-interface/Root.jsx';
import ErrorPageAdmin from '../components/admin-interface/ErrorPage.jsx';
import LoginPage from '../components/admin-interface/login-components/LoginPage.jsx';
import Dashboard from '../components/admin-interface/dashboard-components/Dashboard.jsx';
import Notification from '../components/admin-interface/notification-components/Notification.jsx';
import Roles from '../components/admin-interface/roles-components/Roles.jsx';
import Records from '../components/admin-interface/records-components/Records.jsx';
import RecordsForm from '../components/admin-interface/records-components/RecordsForm.jsx';
// Record Request Forms None 
import RegistryResidents from '../components/admin-interface/registry-components/RegistryResidents.jsx';
import RegistryBusiness from '../components/admin-interface/registry-components/RegistryBusiness.jsx';
import RegistryIncidents from '../components/admin-interface/registry-components/RegistryIncidents.jsx';
import Archives from '../components/admin-interface/archive-components/Archives.jsx';
import AnnouncementA from '../components/admin-interface/announcement-components/Announcement.jsx';
import Requests from '../components/admin-interface/requests-components/Requests.jsx';
import ApplicationForm from '../components/admin-interface/basic-components/form-components/form-components/ApplicationForm.jsx';
import ViewApplicationForm from '../components/admin-interface/basic-components/form-components/view-form-components/ViewApplicationForm.jsx';
import Reports from '../components/admin-interface/reports-components/Reports.jsx';
import LogHistory from '../components/admin-interface/settings-components/log-components/LogHistory.jsx';
import ImportRecord from '../components/admin-interface/settings-components/import-component/ImportRecord.jsx';
import Backup from '../components/admin-interface/settings-components/backup-components/Backup.jsx';
import UserInformation from '../components/admin-interface/settings-components/profile-components/UserInformation.jsx';
import InformationDetails from '../components/admin-interface/information-components/InformationDetails.jsx';

export const routes = [
  {
    path: '/', 
    element: <RootLayoutResident />,
    errorElement: <ErrorPageResident />,
    children: [
      { index: true, element: <Home /> },
      { path: 'announcement', element: <AnnouncementR /> },
      { 
        path: 'services', 
        children: [
            { index: true, element: <Services /> },        
            { path: ':formId', element: <ServiceForm/> }, 
          ]
      },
      {
        path: 'policies', 
        element: <RootLayoutPolicies />,
        children: [
          { path: 'executive-order', element: <Accordion /> },
          { path: 'barangay-resolution', element: <Accordion /> },
          { path: 'barangay-ordinance', element: <Accordion /> }
        ]
      },
      { 
        path: 'about', 
        children: [
          { index: true, element: <About /> },
          { path: 'barangay-facilities', element: <FacilitiesMainSection /> }
        ]
      },
    ],
  },
  { path: '/admin/login', element: <LoginPage /> }, // If already logged in direct to dashboard
  {
    path: '/admin', 
    element: <RootLayoutAdmin />,
    errorElement: <ErrorPageAdmin />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'notification', element: <Notification /> },
      { path: 'roles', 
        children: [
          { index: true, element: <Roles /> },
          { path: ':category', element: <Roles /> },
        ] 
      },
      { path: 'records', 
        children: [
          { path: 'all', 
            children: [
              { index: true, element: <Records /> },
              { path: ':status', element: <Records /> }
            ]
          },
          { path: ':category', 
            children: [
              { index: true, element: <RecordsForm /> },
              { path: ':status', element: <RecordsForm /> },
              // {path:':id', element: <ApplicationForm /> }, // Change Component
              // {path:':id/view', element: <ViewApplicationForm /> },
              // {path:':id/edit', element: <ApplicationForm /> },
            ]
          },
        ]
      },
      { path: 'registry', 
        children: [
          { path: 'residents-information', 
            children: [
              { index: true, element: <RegistryResidents /> },
              { path: ':status', element: <RegistryResidents /> },
              // {path:':id', element: <ApplicationForm /> }, // Change Component
              // {path:':id/view', element: <ViewApplicationForm /> },
              // {path:':id/edit', element: <ApplicationForm /> },
            ]
          }
        ]
      },
      { path: 'business-information', 
        children: [
          { index: true, element: <RegistryBusiness /> },
          { path: ':status', element: <RegistryBusiness /> },
          // {path:':id', element: <ApplicationForm /> },
          // {path:':id/view', element: <ViewApplicationForm /> },
          // {path:':id/edit', element: <ApplicationForm /> },
        ]
      },
      { path: 'incidents-reports', 
        children: [
          { index: true, element: <RegistryIncidents /> },
          { path: ':status', element: <RegistryIncidents /> },
          // {path:':id', element: <ApplicationForm /> },
          // {path:':id/view', element: <ViewApplicationForm /> },
          // {path:':id/edit', element: <ApplicationForm /> },
        ]
      },
      { path: 'archives', 
        children: [
          { index: true, element: <Archives /> },
          { path: ':category', element: <Archives />},
          { path: ':recordType', 
            children: [
              // {path:':id/view', element: <ViewApplicationForm /> },
              // {path:':id/edit', element: <ApplicationForm /> },
            ]
          }
        ] 
      },
      { path: 'announcements', element: <AnnouncementA /> },
      { path: 'requests', 
        children : [
          { index: true, element: <Requests /> },
          { path: ':recordType', 
            children: [
              {index:true, element: <ApplicationForm /> },
              {path:':id/view', element: <ViewApplicationForm /> },
              // {path:':id/edit', element: <ApplicationForm /> },
            ]
          }
        ]
      },
      { path: 'reports', element: <Reports /> },
      { path: 'settings', 
        children: [
          { path: 'log-history', element: <LogHistory /> },
          { path: 'import-records', element: <ImportRecord /> },
          { path: 'backup', element: <Backup /> },
          { path: 'user-profile', element: <UserInformation /> },
        ]
      },
      { path: 'barangay-information', element: <InformationDetails /> },
    ],
  },
  {
    path: '/admin/*', 
    element: <ErrorPageAdmin />,
  },
];
