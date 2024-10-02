import { useParams, Navigate } from 'react-router-dom';

import FormModal from "./form-component/FormModal.jsx";

import { INSTRUCTIONS, BARANGAY_FORMS } from "../../../../util/resident-interface/BarangayForms.js";

export default function ServiceForm() {
    const { formId } = useParams();
    const form = BARANGAY_FORMS.find((form) => form.id === formId);

    let isInquiry;

    if (!form) {
        console.log("Form not found. Available form IDs:", BARANGAY_FORMS.map(f => f.id));
        return <Navigate to="/services" replace />;
    } else {
        isInquiry = (form.id === 'inquiry-form' ? true : false);
    }

    return <section id="Form"
                className={`fixed top-0 left-0 right-0 bottom-0 h-screen text-start
                        ${!isInquiry ? 'bg-mediumBlue' : `bg-snow`}`} 
        >
        <div className={`w-full h-[55%] rounded-b-[50px]
                    ${!isInquiry ? 'bg-snow' : `bg-mediumBlue`}`} 
        />
        <div className="absolute top-0 left-0
                    flex flex-row w-full h-full
                    lg:px-24 gap-10" 
        >
            <div className="lg:flex flex-col hidden
                            w-1/2 h-full py-32 mt-10
                            font-inter text-wrap" 
            >
                <div className={`flex-1 flex flex-col
                            justify-center gap-5
                            ${isInquiry && 'text-snow'}`}
                >
                    <h4 className="text-4xl font-bold pt-20
                                leading-snug text-balance">
                        {form.title}
                    </h4>
                    <p className="font-light text-ellipsis line-clamp-2">
                        {form.desc}
                    </p>
                </div>

                <div className={`flex-1 flex flex-col gap-2
                            justify-center leading-7
                            ${!isInquiry && 'text-snow'}`} 
                >
                    <h5 className="text-lg pt-10" >
                        Instructions:
                    </h5>
                    <ol className="px-2 font-extralight 
                                text-clip line-clamp-2" 
                    >
                        {INSTRUCTIONS.map((list, index) => (
                        <li key={index} className="line-clamp-2" >
                            {list}
                        </li>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="lg:items-end mx-auto" >
                <FormModal barangayForm={form} />
            </div>
        </div>
    </section>
}