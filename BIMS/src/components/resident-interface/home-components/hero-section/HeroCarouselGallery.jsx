import { Carousel } from "@material-tailwind/react";

import { HERO_GALLERY } from '../../../../util/resident-interface/BarangayGallery.js';

export default function HeroCarousel() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
      prevArrow={() => {}}
      nextArrow={() => {}}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )} >

      {HERO_GALLERY.map((image, index) => (
        <div key={index} 
          className="h-full w-full object-fill">
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
            style={{ aspectRatio: '3/2' }}
          />
        </div>
      ))}
    </Carousel>
  );
}