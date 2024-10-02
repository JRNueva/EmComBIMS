import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from './basic-components/ScrollToTop.jsx';
import NavBar from './navbar-components/Navbar.jsx';
import FacebookMsg from './FacebookMsg.jsx';
import Footer from './footer-components/Footer.jsx';

function RootLayoutResident() {
  const location = useLocation();
  const currentPath = location.pathname;

  const hideComponent = currentPath.startsWith('/services/');

  return (
    <>
      <ScrollToTop />
      <NavBar active={currentPath} />
      <Outlet />
      {!hideComponent && (
        <>
          <div className="fixed w-20 h-20 bottom-5 right-5 m-5 bg-blue-gray-400">
            {/* <FacebookMsg /> */}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default RootLayoutResident;