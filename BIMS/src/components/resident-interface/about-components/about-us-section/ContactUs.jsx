import Maps from './Maps.jsx';

import { CONTACT_DETAILS } from '../../../../util/resident-interface/BarangayDetails.js';

import homeIcon from '../../../../assets/resident-interface/icons/about/home.svg';
import phoneIcon from '../../../../assets/resident-interface/icons/about/phone.svg';
import mailIcon from '../../../../assets/resident-interface/icons/about/mail.svg';

export default function ContactUs() {

    const { address, phone, landline, email, location } = CONTACT_DETAILS();
    const icons = [homeIcon, phoneIcon, mailIcon];
    const labels = ["Address", "Phone", "Email"];

    const details = [
        { label: address.label, url: address.url },
        { label: `${phone} / ${landline}`, url: null },
        { label: email.label, url: email.url }
    ];

    const { longitude, latitude } = location;

    return (
        <section className="flex lg:flex-row flex-col
                    py-24 px-8 md:px-12 lg:px-246 text-start">

            <div className="flex-1 my-auto">
                <div className="flex flex-col gap-7">
                    <h4 className="font-semibold text-3xl">
                        Contact Us
                    </h4>
                    <p className="font-light leading-7">
                        Get in touch with the Barangay Hall Office! We're here to 
                        assist you with any inquiries or concerns you may have. Reach out to us today!
                    </p>
                </div>

                <div className="flex flex-col py-10 gap-5">
                    {icons.map((icon, index) => (
                        <div key={index} className="flex flex-row pl-10 gap-2">
                            <a href={details[index].url} target="_blank" rel="noopener noreferrer" 
                                className="min-w-16 min-h-16 flex justify-center rounded-full bg-mediumBlue">
                                <img src={icon} alt={labels[index]} className="w-8 h-8 my-auto" />
                            </a>
                            <div className="my-auto mx-5">
                                <a href={details[index].url} 
                                    target="_blank" rel="noopener noreferrer" >
                                    {details[index].label}
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <div className="flex-1">
                <Maps latitude={latitude} longitude={longitude} />
            </div>
            
        </section>
    );
}
