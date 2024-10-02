import { useNavigate } from "react-router-dom";  
import { Button } from "@material-tailwind/react";
import scrolltext from '../../../../assets/admin-interface/icons/form/scroll-text.svg';
import { SERVICES_BUTTONS } from '../../../../util/admin-interface/BarangayForms.js';

export default function DocumentRequest({searchValue}) {
    const navigate = useNavigate();  // Initialize useNavigate

    const filteredButtons = SERVICES_BUTTONS.filter(({ label }) => 
      label.toLowerCase().includes(String(searchValue).toLowerCase())
    );

    return (
        <section className="hide-scroll flex flex-wrap h-full overflow-y-auto pl-28 p-20 justify-evenly gap-y-10 gap-x-20">
            {filteredButtons.map(({ id, label }) => (
                <Button
                    key={id}
                    className="flex flex-col w-72 h-44 p-5 justify-around items-center 
                               rounded-lg bg-softGray text-gray-900"
                    onClick={() => navigate(`/admin/requests/${id}`)}  // Navigate on click
                >
                    <img src={scrolltext} alt="Scroll Icon" className="h-20" />
                    <p className="capitalize font-poppin font-semibold text-base text-black opacity-50">
                        {label}
                    </p>
                </Button>
            ))}
        </section>
    );
}