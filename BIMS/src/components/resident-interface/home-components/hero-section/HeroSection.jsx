import { useNavigate } from 'react-router-dom';

import HeroCarousel from './HeroCarouselGallery.jsx';
import ButtonDefault from '../../basic-components/ButtonDefault.jsx';

import { BARANGAY_DETAILS, BARANGAY_DESC } from '../../../../util/resident-interface/BarangayDetails.js';

export default function HeroSection() {
    const navigate = useNavigate();

    return <section id='HeroSection' 
                className="flex lg:flex-row flex-col-reverse
                            pt-40 px-8 md:px-12 lg:px-0 lg:pl-24
                            lg:gap-10 gap-20">

        <div className="lg:w-1/3 my-auto
                        font-inter text-darkestBlue 
                        text-start text-wrap">

            <h1 className="font-medium text-5xl leading-[3.5rem]"> 
                Sanguniang <br/> {BARANGAY_DETAILS.name}</h1>
                
            <p className="py-8 pr-5 font-light leading-8">
                {BARANGAY_DESC}
            </p>
            
            <ButtonDefault
                type='home'
                className="bg-lowBlue" 
                 onClick={() => navigate("services", { relative: 'path' })}>
                Explore Online Services
            </ButtonDefault>

        </div>

        <div className="lg:w-4/6 w-full h-full
                        overflow-hidden">
            <HeroCarousel />
        </div>

    </section>
}