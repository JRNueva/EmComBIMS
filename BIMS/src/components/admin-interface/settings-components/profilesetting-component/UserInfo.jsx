import Sidebar from "../../AdminSidebar";
import Topbar from "../../AdminTopbar";
import InformationDetails from "../profile-components/UserInformation";

import "./UserInfo.css";

const Information = () => { 
    const breadcrumbs = [
        { label: "Home", href: "#", isActive: false },
        { label: "Settings", href: "#", isActive: false },
        { label: "Profile Settings", href: "#", isActive: true },
    ];

    return (
        <div className="information-container w-screen h-screen flex flex-row">
            <Sidebar activeItem="Barangay_Information" /> {/* Pass activeItem as a prop */}
            <div>
                <Topbar title="Profile Settings" breadcrumbs={breadcrumbs} />
            </div>
            <div className="user_info w-full flex p-6 gap-4 overflow-hidden bg-[#F7F7F7]">
                <InformationDetails />
            </div>
        </div>
    );
};

export default Information;
