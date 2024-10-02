import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from './sidebar-components/AdminSidebar.jsx';
import AdminTopbar from './topbar-components/AdminTopbar.jsx';
import { useEffect, useState } from 'react';
const generateBreadcrumbs = (pathname) => {
  const pathParts = pathname.replace('/admin', '').split('/').filter(Boolean);

  const formatLabel = (part) => {
    return part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const breadcrumbs = pathParts.map((part, index) => {
    const href = `/admin/${pathParts.slice(0, index + 1).join("/")}`;
    return { label: formatLabel(part), href };
  });

  return [{ label: "Home", href: "/admin" }, ...breadcrumbs];
};

function RootLayoutAdmin() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [title, setTitle] = useState('Admin Dashboard');
  const [isSmallScreen, setIsSmallScreen] = useState(false); 
  
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 900); 
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const generatedBreadcrumbs = generateBreadcrumbs(currentPath);
    setBreadcrumbs(generatedBreadcrumbs);

    if (generatedBreadcrumbs.length > 1) {
      setTitle(generatedBreadcrumbs[1].label); 
    } else {
      setTitle('Admin Dashboard');
    }
  }, [location]);

  return <>
    <AdminSidebar />
    <AdminTopbar title={title} breadcrumbs={breadcrumbs} />
    
    {isSmallScreen ? (
      <main className="admin-content h-screen pl-28 pr-10 bg-gray97 flex justify-center items-center">
        <div className="text-gray-500 text-center font-poppins text-base">
          This admin panel is best viewed on a larger screen. 
          For a better experience and full functionality, 
          please switch to a device with a larger display.
        </div>
      </main>
    ) : (
      <Outlet />
    )}
  </>
}

export default RootLayoutAdmin;
