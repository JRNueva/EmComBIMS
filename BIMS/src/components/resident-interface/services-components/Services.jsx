import ServicesTopSection from './services-main-components/ServicesTopSection.jsx';
import ServicesMidSection from './services-main-components/ServicesMidSection.jsx';
import ServicesBotSection from './services-main-components/ServicesBotSection.jsx';

import { BARANGAY_DETAILS } from '../../../util/resident-interface/BarangayDetails.js';
import { SERVICES_BUTTONS } from '../../../util/resident-interface/BarangayForms.js';

export default function Services() {
    return <section id="ServicePage" >
        
        <div className="flex-col pt-40 
                    px-8 md:px-12 lg:px-24          
                    font-inter my-auto text-wrap" 
        >
            <h3 className="font-semibold text-4xl text-balance">
                Barangay Forms and Permits Issuance
            </h3>
            <p className="py-5 font-light">
                For personal applications, please fill up and submit 
                the form to the {BARANGAY_DETAILS.name}'s office.
            </p>
        </div>

        <div className="lg:flex flex-col py-20 gap-10 pt-20">
            <ServicesTopSection buttons={SERVICES_BUTTONS.slice(0, 2)} />
            <ServicesMidSection buttons={SERVICES_BUTTONS.slice(2, 4)} />
            <ServicesBotSection buttons={SERVICES_BUTTONS.slice(4)} />
        </div>
    </section>
}