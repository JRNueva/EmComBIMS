import { useNavigate } from 'react-router-dom';

import ButtonDefault from '../../basic-components/ButtonDefault.jsx';
import FacilitiesGallery from './FacilitiesQuadGallery.jsx';

export default function FacilitiesSection() {
    const navigate = useNavigate();

    return <section id="FacilitiesSection" 
                className="flex lg:flex-row flex-col
                        lg:py-32 py-20 
                        px-8 md:px-12 lg:px-24
                        lg:gap-5 gap-20 bg-white">

        <div className="flex-1 font-inter my-auto 
                        text-start text-wrap">
            
            <h3 className="font-semibold text-4xl text-balance">
                Barangay Facilities Gallery
            </h3>

            <p className="font-light py-10 leading-8">
                Explore our barangay's community spaces in our Facilities Gallery.
                See health center, sports facilities, and more, fostering community well-being.
            </p>

            <ButtonDefault 
                type="home"
                className="bg-lowBlue"
                onClick={() => navigate("about/barangay-facilities", { relative: 'path' })}>
                Explore Facilities Gallery
            </ButtonDefault>
        </div>

        <div className="flex-1">
            <FacilitiesGallery />
        </div>
    </section>
}