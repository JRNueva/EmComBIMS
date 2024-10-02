import { useNavigate } from 'react-router-dom';

import ButtonDefault from "../../../basic-components/ButtonDefault.jsx"

export default function ServiceButton({ btn }) {
    const navigate = useNavigate();

    return <div className="flex flex-col 
                    lg:w-3/4 p-10 w-full
                    justify-evenly items-center gap-4">
                        
        <div className="flex flex-col
                     min:h-10 
                    font-inter text-lowBlue gap-5">
            <h4 className="font-semibold text-1xl" >{btn.label}</h4>
            <p className="min-h-10 my-auto text-sm italic" >{btn.desc}</p>
        </div>

        <ButtonDefault
            type="services"
            className="pt-2.5 text-white bg-lowBlue"
            onClick={() => navigate(`${btn.id}`, { relative: 'path' })} >
            Online Application
        </ButtonDefault>
    </div>
}