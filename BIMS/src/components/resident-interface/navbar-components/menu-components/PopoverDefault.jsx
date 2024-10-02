import { Link } from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

export default function PopoverDefault({ open, onClose, linkStyle, children, items }) {
  return (
    <Popover className="relative">
      {({ open: isOpen, close }) => (
        <>
          <PopoverButton
            className={`flex items-center gap-x-1 ${linkStyle}`}
            aria-expanded={isOpen || open}
            onClick={() => {
              if (open) {
                onClose();
              } else {
                close();
              }
            }}
          >
            {children}
          </PopoverButton>

          {(isOpen || open) && (
            <PopoverPanel
              transition
              className="font-thin text-start 
                      absolute -left-8 top-full 
                      z-10 mt-3 w-64 
                      overflow-hidden rounded-3xl bg-snow
                      shadow-lg ring-1 ring-gray-900/5 
                      transition data-[closed]:translate-y-1 
                      data-[closed]:opacity-0 
                      data-[enter]:duration-200 data-[leave]:duration-150 
                      data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 w-15">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center 
                    gap-x-6 rounded-lg py-4 pl-10 text-sm 
                    leading-6 hover:bg-gray-300 hover:font-medium"
                  >
                    <div className="flex-auto">
                      <Link to={item.href} className="block text-gray-900">
                        {item.name}
                        <span className="absolute inset-0 " />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          )}
        </>
      )}
    </Popover>
  );
}
