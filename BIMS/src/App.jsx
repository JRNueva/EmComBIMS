import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { routes } from './config/routes.jsx'; 
import { BARANGAY_DETAILS, BARANGAY_LOGO } from './util/resident-interface/BarangayDetails.js';
import InformationDetails from "./components/admin-interface/information-components/InformationDetails.jsx"

const router = createBrowserRouter(routes); 

function App() {
  useEffect(() => {
    const faviconUrl = BARANGAY_LOGO.barangay; 

    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = faviconUrl;
    document.head.appendChild(link);

    document.title = `${BARANGAY_DETAILS.name}`;
  }, []); 

  return (
    <RouterProvider router={router} />
    // <InformationDetails/>
  );
}

export default App;
