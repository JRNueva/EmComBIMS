import image from '../../../../assets/resident-interface/images/services-page/services-3.png';

import FramedImage from '../../basic-components/FramedImage.jsx';
import ServiceButton from './button-component/ServiceButton.jsx';

export default function ServicesBotSection({ buttons }) {
    return <div className="flex lg:flex-row flex-col 
                    py-5 pr-0 lg:pr-24 gap-10" >

        <FramedImage
            src={image}
            className="lg:w-7/12 md:w-7/12 w-4/6" />

        <div className="flex lg:flex-row flex-col 
                    lg:w-2/3 justify-between " >
            {buttons.map((btn) => (
                <ServiceButton 
                    key={btn.id}
                    btn={btn}
                />
            ))}
        </div>

    </div>
}