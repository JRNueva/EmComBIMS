import { useEffect, useRef, useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Masonry from 'masonry-layout';

export default function FacilitiesMasonryGallery({ gallery, handleClick }) {
  const containerRefs = useRef({});
  const [reloadKey, setReloadKey] = useState(0); 
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setReloadKey(prevKey => prevKey + 1);
    }, 1000); 
    
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    Object.keys(containerRefs.current).forEach((key) => {
      const container = containerRefs.current[key];
      if (container) {
        const masonry = new Masonry(container, {
          transitionDuration: 0,
          gutter: 0,
          itemSelector: '.image-item',
        });

        masonry.on('layoutComplete', () => {
          setTimeout(() => {
            masonry.layout();
          }, 100);
        });
      }
    });
  }, [reloadKey]); 

  return (
    <Tabs value="all" className="w-full" key={reloadKey}> 
      <TabsHeader
        className="bg-snow h-16 mx-6 py-2 px-5 font-bold"
        indicatorProps={{
          className: "bg-lowBlue bg-opacity-60 shadow-none",
        }}>
        <Tab value="all" className="py-5 font-inter font-medium">All</Tab>
        {gallery.map(({ label, value }) => (
          <Tab key={value} value={value} className="py-5 font-inter font-medium">
            {label}
          </Tab>
        ))}
      </TabsHeader>

      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
        <TabPanel key="all" value="all" className="py-12 min-h-[50rem]">
          <div ref={(ref) => (containerRefs.current['all'] = ref)} className="flex justify-center mx-auto">
            <div className="masonry-container w-full">
              {gallery.map(({ id, images }) => (
                images?.length > 0 ? (
                  images.map(({ src, alt }, imgIndex) => (
                    <div key={src} className="image-item lg:w-1/3 w-1/2 p-2 
                      transition-opacity cursor-pointer hover:opacity-80">
                      <img
                        className="h-auto max-w-full object-cover object-center"
                        src={src}
                        alt={alt}
                        onClick={() => handleClick(images[imgIndex])}
                      />
                    </div>
                  ))
                ) : (
                  <div key={`no-images-${id}`} 
                    className="flex h-full items-center justify-center text-gray-500">
                    No images available
                  </div>
                )
              ))}
            </div>
          </div>
        </TabPanel>

        {gallery.map(({ value, images }) => (
          <TabPanel key={value} value={value} className="py-12 min-h-[50rem]">
            <div ref={(ref) => (containerRefs.current[value] = ref)} className="flex justify-center mx-auto">
              <div className="masonry-container w-full">
                {images?.length > 0 ? (
                  images.map(({ src, alt }, index) => (
                    <div key={index} className="image-item lg:w-1/3 w-1/2 p-2 
                        transition-opacity cursor-pointer hover:opacity-80">
                      <img
                        className="h-auto max-w-full object-cover object-center"
                        src={src}
                        alt={alt}
                        onClick={() => handleClick(images[index])}
                      />
                    </div>
                  ))
                ) : (
                  <div className="flex h-full items-center justify-center text-gray-500">
                    No images available
                  </div>
                )}
              </div>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
