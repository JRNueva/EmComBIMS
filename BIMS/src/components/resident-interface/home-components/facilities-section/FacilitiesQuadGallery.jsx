import { FACILITIES_GALLERY } from '../../../../util/resident-interface/BarangayGallery.js';

export default function FacilitiesGallery(){

    const gallery = FACILITIES_GALLERY.flatMap((imageGroup) => {
        return imageGroup.images;
    })

    const randomImages = gallery.sort(() => 0.5 - Math.random()).slice(0, 4);

    return <div className="grid h-full w-full place-items-center
                        lg:overflow-visible bg-transparent">
        <div className="grid grid-cols-2 gap-4">
            {randomImages.slice(0,4).map((image, index) => (
                <div key={index} >
                    <img 
                        className="object-cover object-center h-full w-full"
                        src={image.src}
                        alt={image.alt} 
                        style={{ aspectRatio: '3/2' }}
                    />
                </div>
            ))}
        </div>
    </div>
}

