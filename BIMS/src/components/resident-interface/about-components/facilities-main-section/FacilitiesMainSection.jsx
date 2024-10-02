import { useState, useRef } from 'react';

import FacilitiesMasonryGallery from './FacilitiesMasonryGallery.jsx';
import ImageModal from '../../basic-components/ImageModal.jsx';

import { FACILITIES_GALLERY } from '../../../../util/resident-interface/BarangayGallery.js';

export default function FacilitiesMainSection() {
    const dialog = useRef(null);
    const [imageSelected, setImageSelected] = useState({ src: '', alt: '' });

    function onClickImage(image) {
        setImageSelected(image);
        if (dialog.current) {
            dialog.current.open(); 
        }
    }

    return (
        <section id="FacilitiesMainPage" 
                 className="flex-col pt-40 pb-72             
                             px-8 md:px-12 lg:px-24 bg-lightGray">
            <div className="flex-col font-inter my-auto text-wrap">
                <h3 className="font-semibold text-4xl">
                    Barangay Facilities Gallery
                </h3>
                <p className="py-5 font-light leading-8">
                    Discover our Barangay Gallery, showcasing facilities 
                    and community highlights through captivating photos.
                </p>
            </div>

            <div className="min-h-screen pt-20">
                <ImageModal 
                    image={imageSelected}
                    ref={dialog} />

                <FacilitiesMasonryGallery 
                    gallery={FACILITIES_GALLERY}
                    handleClick={onClickImage} />
            </div>
        </section>
    );
}
