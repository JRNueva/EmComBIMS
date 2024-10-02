import CirleLines from './CircleLines.jsx';

import image from '../../../../assets/resident-interface/images/home-page/service-section.png';

export default function ServicesSection() {


    return <section id="ServicesSection" 
                className="flex flex-row w-fulll items-center 
                        py-24 px-8 md:px-12 lg:px-0
                        bg-lightGrayYellow" >

        <div className="absolute lg:block hidden">
            <div className="relative lg:h-[32rem] lg:w-[32rem]">
                <div className="absolute lg:h-[34rem] lg:w-[34rem] 
                                top-[3rem] -left-[9.5rem]
                                rounded-full bg-mediumBlue" />
                    <img className="absolute rounded-full 
                                    top-[5rem] -left-[9rem]"
                        src={image}
                        alt="Barangay Online Service" />
            </div>
        </div>

        <div className="lg:pl-[30rem] mx-auto lg:pr-24
                    font-inter text-start text-wrap">

            <h3 className="font-semibold text-3xl text-balance">
                Barangay Mojon Online  Permit & Certificate Issuance
            </h3>

            <p className="py-5 pb-10">
                Effortlessly request permits and certificates online with our convenient service.
            </p>

            <div className="min-h-44">
                <CirleLines />
            </div>

        </div>
        
    </section>
}