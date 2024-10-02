import React, { createContext, useState, useContext } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import sidebarLogo from "../../../assets/admin-interface/icons/sidebar/sidebarLogo.png"; 
import profile from "../../../assets/admin-interface/icons/sidebar/Tree.png"; 
import { ChevronLeft, ChevronRight, Pencil } from "lucide-react"; 
import { Collapse } from "@material-tailwind/react"; 
import { ChevronDown, ChevronUp } from "lucide-react"; 

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(false); // Default to collapsed
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown((current) => (current === id ? null : id));
    };

    const setActive = (id) => {
        setActiveItem(id);
    };

    return (
        <aside className="fixed z-50 h-screen flex">
            <nav className="max-w-72 h-full flex flex-col bg-[#1D2D44] border-r shadow-sm relative text-left">
                <div className="p-4 pb-2 flex justify-between items-center h-16">
                    <div className={`flex items-center w-full font-poppins ${expanded ? "justify-center" : "justify-start"}`}>
                        <NavLink to="/admin/barangay-information">
                            <img 
                                src={sidebarLogo} 
                                className="rounded-full" 
                                style={{ width: '40px', height: '40px' }} 
                                alt="Sidebar Logo"
                            />
                        </NavLink>
                        <div className={`transition-all duration-300 ease-in-out ml-3 overflow-hidden ${expanded ? "w-52" : "hidden"}`}>
                            <h4 className="font-semibold text-lightGrayYellow text-lg">Barangay Mojon</h4> {/* Increased font size */}
                            <span className="text-sm text-gray-400">City of Malolos, Bulacan</span> {/* Increased font size */}
                        </div>
                    </div>

                    <button
                        onClick={() => setExpanded((curr) => !curr)} 
                        className="p-0.5 rounded-lg border-white bg-[#1D2D44] hover:bg-[#131d2c] transition-all duration-200 absolute right-[-15px] top-7"
                    >
                        {expanded ? <ChevronLeft className="stroke-white" /> : <ChevronRight className="stroke-white"/>}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded, openDropdown, toggleDropdown, activeItem, setActive }}>
                    <hr className="my-3 mx-2" />
                    <ul className="px-3 mb-20 h-full overflow-hidden overflow-y-auto hide-scroll">{children}</ul>
                </SidebarContext.Provider>
                
                <div className="absolute bottom-0 p-4 flex justify-start items-center font-poppins">
                    <NavLink to="/admin/settings/user-profile" 
                        className="flex" >
                    <img src={profile} className="w-10 h-10 rounded-full" alt="Profile" />
                    <div className={`flex justify-start items-center overflow-hidden ${expanded ? "w-52 ml-3" : "hidden"}`}>
                        <div className="leading-4">
                            <h4 className="font-medium text-sm text-white">Angela Decena</h4>
                            <span className="text-xs text-gray-400">decena.a@gmail.com</span>
                        </div>
                    <Pencil size={20} className="text-gray-400 ml-12 cursor-pointer" />
                    </div>
                    </NavLink>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, id, children, isDropdown, to, onClick }) {
    const navigate = useNavigate();
    const { expanded, openDropdown, toggleDropdown, activeItem, setActive } = useContext(SidebarContext);
    const isOpen = openDropdown === id; 
    const isActive = activeItem === id;

    // Check if any child is active
    const hasActiveChild = children ? React.Children.toArray(children).some(child => {
        return activeItem === child.props.id;
    }) : false;

    // Determine if parent should be highlighted based on active state or hovering over dropdown items
    const highlightParent = isActive || hasActiveChild;

    const handleClick = (e) => {
        e.preventDefault();
        setActive(id);

        if (isDropdown) {
            toggleDropdown(id); // Toggle dropdown immediately
            // Only navigate if the sidebar is closed
            if (!expanded) {
                navigate(to); // Navigate if the sidebar is closed
            }
        } else {
            if (expanded && to) {
                navigate(to); // Navigate to the specified route if expanded
            }
            onClick && onClick(); // Call onClick if provided
        }
    };

    return (
        <>
            {/* Ensure the entire <li> element is clickable */}
            <li
                className={`flex w-full items-center py-2 px-3 my-1 font-normal rounded-md cursor-pointer transition-colors group ${highlightParent ? "bg-lightGrayYellow text-black font-semibold" : "hover:bg-[#828a96] text-white"}`}
                onClick={handleClick} // Handle click for the entire list item
            >
                <div className={`flex items-center justify-center ${expanded ? "ml-3" : "w-full"}`}>
                    {icon}
                </div>

                {/* Removed button wrapping the text to prevent event conflicts */}
                <div className={`flex items-center justify-between w-full ml-3 ${expanded ? "w-52" : "hidden"}`}>
                    <span className={`w-full overflow-hidden flex flex-row justify-between pr-10`}>
                        <div className='text-sm'>
                            {text}
                        </div>
                        {isDropdown && (
                            <span className="ml-2 flex items-center">
                                {isOpen ? (
                                    <ChevronUp size={16} className={highlightParent ? "text-black" : "text-white"} />
                                ) : (
                                    <ChevronDown size={16} className={highlightParent ? "text-black" : "text-white"} />
                                )}
                            </span>
                        )}
                    </span>
            
                </div>

                {/* Tooltip when sidebar is collapsed */}
                {!expanded && (
                    <div className={`w-full absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo text-[#1D2D44] font-poppins text-sm invisible opacity-0 translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        {text} 
                    </div>
                )}
            </li>

            {isDropdown && (
                <Collapse open={isOpen}>
                    <div className={`flex justify-start items-start overflow-hidden text-xs ${expanded ? "" : "hidden"}`}>
                        <ul className="ml-8">
                            {React.Children.map(children, (child) =>
                                React.cloneElement(child, {
                                    onClick: () => {
                                        setActive(child.props.id);
                                        navigate(child.props.to); // Navigate to the child's URL
                                    }
                                })
                            )}
                        </ul>
                    </div>
                </Collapse>
            )}
        </>
    );
}


