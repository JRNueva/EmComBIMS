import { NavLink } from 'react-router-dom';
import {
  PopoverGroup,
} from '@headlessui/react';
import PopoverDefault from './PopoverDefault';

export default function Menu({ activePage, policies, about, ...props }) {

  const menuActiveStyle = `h-12 font-semibold 
                        border-b-[6.5px] border-lowestBlue  
                        transition duration-300 ease-in-out`;
  const linkStyle = `leading-6 text-gray-900 px-2 text-nowrap`;
  const menuStyle = `h-12 font-thin border-b-4 
                  border-transparent 
                  transition duration-300 ease-in-out`;

  return (
    <PopoverGroup className={`hidden lg:flex lg:gap-x-8 w-full 
      py-8 px-5 justify-around ${props.className}`} >
      <div className={activePage === '/' ? menuActiveStyle : menuStyle} >
        <NavLink to="/" className={linkStyle}>Home</NavLink> 
      </div>

      <div className={activePage === '/announcement' ? menuActiveStyle : menuStyle} >
        <NavLink to="announcement" className={linkStyle}>Announcement</NavLink> 
      </div>
 
      <div className={activePage.startsWith('/services') ? menuActiveStyle : menuStyle} >
        <NavLink to="services" className={linkStyle}>Services</NavLink> 
      </div>

      <div className={activePage.startsWith('/policies') ? menuActiveStyle : menuStyle} >
        <PopoverDefault 
          linkStyle={linkStyle} 
          items={policies} 
          onClose={() => setOpenPopover(null)} >
          Policies
        </PopoverDefault>
      </div>

      <div className={activePage.startsWith('/about') ? menuActiveStyle : menuStyle} >
        <PopoverDefault 
          linkStyle={linkStyle} 
          items={about} 
          onClose={() => setOpenPopover(null)} >
          About
        </PopoverDefault>
      </div>
    </PopoverGroup>
  );
}
