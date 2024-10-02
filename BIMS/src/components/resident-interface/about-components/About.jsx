import StatementSection from './about-us-section/StatementSection.jsx';
import BarangayOfficialsGallery from './about-us-section/barangay-officials-components/BarangayOficialsGallery.jsx';
import ContactUs from './about-us-section/ContactUs.jsx';

import { ABOUT_BARANGAY } from '../../../util/resident-interface/BarangayDetails.js';
import { ABOUT_US_GALLERY } from '../../../util/resident-interface/BarangayGallery.js';

export default function About() {

    const heroImage = ABOUT_US_GALLERY.hero;
    const visionImage = ABOUT_US_GALLERY.vision;
    const missionImage = ABOUT_US_GALLERY.mission;

    return <div id='AboutUsSection' 
                className="font-inter">

        <section className="w-full h-full">

            <div className="absolute top-0 w-full h-[30rem]
                        flex flex-col justify-center pt-10
                        gap-5 text-white 
                        bg-mediumBlue opacity-85" >
                <h3 className="font-semibold text-4xl">
                    About Us
                </h3>
                <p className="lg:w-1/2 md:w-2/3 w-4/5 
                        mx-auto text-justify
                        text-sm font-light leading-7">
                    {ABOUT_BARANGAY.about}
                </p>  
            </div>

            <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-[30rem] object-cover"
                style={{ aspectRatio: '2/3' }}
            />

        </section>


        <section className="flex flex-col w-full full
                        py-12 ">

            <StatementSection 
                title="Our Vision"
                text={ABOUT_BARANGAY.vision}
                img={visionImage.src} />

            <StatementSection 
                title="Our Mission"
                text={ABOUT_BARANGAY.mission}
                img={missionImage.src} />

        </section>

        <BarangayOfficialsGallery />

        <ContactUs />

    </div>
}