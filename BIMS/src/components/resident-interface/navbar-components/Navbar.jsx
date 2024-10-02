import { useState } from 'react';

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { NavLink, useNavigate } from 'react-router-dom';

import Menu from './menu-components/Menu.jsx';
import Logo from './Logo.jsx';
import ButtonDefault from '../basic-components/ButtonDefault.jsx';

const policies = [
  { name: 'Executive Order', href: 'policies/executive-order' },
  { name: 'Barangay Resolution', href: 'policies/barangay-resolution' },
  { name: 'Barangay Ordinance', href: 'policies/barangay-ordinance' },
];

const about = [
  { name: 'About Us', href: 'about' },
  { name: 'Barangay Facilities', href: 'about/barangay-facilities' },
];

export default function NavBar({ active }) {
  const navigate = useNavigate();
  const discloseStyle = `block rounded-lg 
                        -mx-3 px-3 py-2 
                        text-gray-900 text-base leading-7 
                        hover:font-semibold hover:bg-gray-50`;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  
                      font-poppins px-8 md:px-12 lg:px-24  
                      bg-snow drop-shadow-lg">
      <nav
        aria-label="Global"
        className="flex justify-between 
                  max-w-full h-20 mx-auto"
      >
        <Logo className="flex-1" />

        <div className="flex justify-end lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 p-2.5 
              inline-flex items-center justify-center 
              rounded-md text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <Menu
          activePage={active}
          policies={policies}
          about={about}
          className="flex-1 "
        />

        <div className="lg:flex flex-1 lg:justify-end hidden">
          <ButtonDefault
            type="menu"
            className="min-w-32 max-h-14 bg-mediumBlue 
                  hover:bg-hover-mediumBlue"
            onClick={() => navigate("services/inquiry-form", { relative: 'path' })} >
            Send Inquiry
          </ButtonDefault>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 bg-black/30" />

        <DialogPanel
          className="z-50 fixed inset-y-0 right-0  
            w-full sm:max-w-sm 
            px-6 py-6
            sm:ring-1 sm:ring-gray-900/10
            overflow-y-auto bg-snow"
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 p-2.5 
                rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink to="/" end className={discloseStyle} 
                  onClick={() => setMobileMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="announcement" className={discloseStyle} 
                  onClick={() => setMobileMenuOpen(false)}>
                  Announcement
                </NavLink>
                <NavLink to="services" className={discloseStyle} 
                  onClick={() => setMobileMenuOpen(false)}>
                  Services
                </NavLink>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className="group flex w-full 
                      py-2 pl-3 pr-3.5 
                      items-center justify-between rounded-lg 
                      text-gray-900 text-base leading-7
                      hover:font-semibold hover:bg-gray-50"
                  >
                    Policies
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180 transition-transform"
                    />
                  </DisclosureButton>

                  <DisclosurePanel className="mt-2 space-y-2">
                    {policies.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.href}
                        className="block rounded-lg  
                        py-2 pl-6 pr-3 
                        text-sm leading-7 text-gray-900 
                        hover:bg-gray-50 hover:font-semibold"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className="group flex w-full 
                      py-2 pl-3 pr-3.5 
                      items-center justify-between rounded-lg 
                      text-gray-900 text-base leading-7
                      hover:font-semibold hover:bg-gray-50"
                  >
                    About
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180 transition-transform"
                    />
                  </DisclosureButton>

                  <DisclosurePanel className="mt-2 space-y-2">
                    {about.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.href}
                        className="block rounded-lg 
                        py-2 pl-6 pr-3 text-sm leading-7 text-gray-900
                        hover:bg-gray-50 hover:font-semibold"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>

              <div className="py-6">
                <ButtonDefault type="menu" 
                  className="w-full h-12 bg-mediumBlue"
                  onClick={() => navigate("services/inquiry-form", { relative: 'path' })} >
                  Send Inquiry
                </ButtonDefault>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
