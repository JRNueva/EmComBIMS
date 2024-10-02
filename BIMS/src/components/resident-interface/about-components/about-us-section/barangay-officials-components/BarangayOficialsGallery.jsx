import { Carousel, IconButton } from '@material-tailwind/react';

import ImageCard from './ImageCard.jsx';

import { SORTED_OFFICIALS } from '../../../../../util/resident-interface/BarangayGallery.js';

export default function BarangayOficialsGallery() {
    const officials = SORTED_OFFICIALS();
    const gallery1 = officials.slice(0, 8);
    const gallery2 = officials.slice(8, 16);

    const groupedOfficials = groupByTwo(officials);
    function groupByTwo(array) {
        const result = [];
        for (let i = 0; i < array.length; i += 2) {
            result.push(array.slice(i, i + 2));
        }
        return result;
    }

    return (
        <section className="flex flex-col w-full h-full gap-5 py-20 font-inter bg-lightGrayYellow">
            <div className="flex flex-col lg:px-24 px-16 gap-4">
                <h4 className="font-semibold text-3xl">Meet Your Barangay Officials</h4>
                <p className="mx-auto font-light leading-7">
                    Get acquainted with the dedicated individuals who serve our barangay
                    and work tirelessly to address community needs and concerns.
                </p>
            </div>

            <Carousel
                className="hidden lg:flex w-full px-16 gap-32"
                loop={true}
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handlePrev}
                        className="text-gray-600 !absolute top-2/4 left-2 -translate-y-2/4 z-10 mx-5"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handleNext}
                        className="text-gray-600 !absolute top-2/4 right-2 -translate-y-2/4 z-10 mx-5"
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </IconButton>
                )}
            >
                <div className="grid grid-cols-4 p-8 pb-20 gap-6">
                    {gallery1.map((official) => (
                        <ImageCard key={official.id} official={official} />
                    ))}
                </div>
                <div className="grid grid-cols-4 p-8 pb-20 gap-6">
                    {gallery2.map((official) => (
                        <ImageCard key={official.id} official={official} />
                    ))}
                </div>
            </Carousel>

            <Carousel
                className="lg:hidden md:flex hidden w-full px-16 gap-32"
                autoplay={true}
                autoplayDelay={5000}
                loop={true}
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handlePrev}
                        className="text-gray-600 !absolute top-2/4 left-2 -translate-y-2/4 z-10 mx-7"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handleNext}
                        className="text-gray-600 !absolute top-2/4 right-2 -translate-y-2/4 z-10 mx-7"
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </IconButton>
                )}
            >
                {groupedOfficials.map((officials, index) => (
                    <div key={index} className="w-full grid grid-cols-2 p-8 pb-20 gap-6">
                        {officials.map((official) => (
                            <ImageCard key={official.id} official={official} />
                        ))}
                    </div>
                ))}
            </Carousel>

            <Carousel
                className="flex lg:hidden md:hidden w-full px-16 gap-32"
                autoplay={true}
                autoplayDelay={5000}
                loop={true}
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handlePrev}
                        className="text-gray-600 !absolute top-2/4 left-2 -translate-y-2/4 z-10 mx-10"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        size="lg"
                        onClick={handleNext}
                        className="text-gray-600 !absolute top-2/4 right-2 -translate-y-2/4 z-10 mx-10"
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </IconButton>
                )}
            >
                {officials.map((official, index) => (
                    <div key={index}
                        className="grid grid-cols-1 w-[25rem] mx-auto p-8 pb-20 gap-6">
                        <ImageCard official={official} />
                    </div>
                ))}
            </Carousel>
        </section>
    );
}
