import { EMERGENCY_HOTLINES } from '../../../../util/resident-interface/BarangayDetails.js';

export default function HotlinesSection() {
    return <section id='HotlinesSection'
                className="flex flex-col items-center
                    lg:mt-0 mt-20 py-12 px-8 md:px-12 lg:px-24
                    font-inter text-white text-lg gap-7 bg-mediumBlue">


        <h3 className="font-semibold text-5xl uppercase">
            Emergency Hotlines
        </h3>

        <div className="flex min-w-[30rem] h-32 border-4 
                border-lightGrayYellow tracking-wide">

            <div className="relative flex w-1/2 h-full overflow-hidden">
                <h5 className="absolute top-7 -left-4 
                        text-gray-900 font-bold text-3xl uppercase" >
                    {EMERGENCY_HOTLINES[0].contact}
                </h5>
                <div className="w-full h-full rounded-r-full bg-lightGrayYellow"/>
            </div>
            
            <div className="w-2/3 flex-col my-auto gap-2">
                {EMERGENCY_HOTLINES[0].number.map((num, index) => (
                    <p key={index} className="text-xl" >{num}</p>
                ))}
            </div>

        </div>

        <div className="flex lg:flex-row flex-col 
                    py-5 px-10 justify-center gap-10 " >

            <div className="grid grid-rows w-full lg:w-2/3 gap-2">
            {EMERGENCY_HOTLINES.slice(1,6).map((hotline, index) => (
                <div key={index}
                    className="grid grid-cols-2 gap-2 
                        text-start text-xl text-balance" >
                <h5 className="font-bold uppercase">{hotline.contact} :</h5>
                <p className="text-lg font-light">{hotline.number.join(' / ')}</p>
                </div>
            ))}
            </div>

            <div className="grid grid-rows w-full lg:w-2/3 gap-2">
            {EMERGENCY_HOTLINES.slice(6).map((hotline, index) => (
                <div
                    key={index}
                    className="grid grid-cols-2 gap-2 
                        text-start text-lg text-balance" >
                <h5 className="font-bold text-balance uppercase">{hotline.contact} :</h5>
                <p className="text-lg font-light">{hotline.number.join(' / ')}</p>
                </div>
            ))}
            </div>

        </div>

    </section>
}