import image from '../../../../assets/resident-interface/images/services-page/services-2.png';

import FramedImage from '../../basic-components/FramedImage.jsx';
import ServiceButton from './button-component/ServiceButton.jsx';

export default function ServicesMidSection({ buttons }) {
    return <div className="flex lg:flex-row flex-col-reverse
                        py-5 pl-0 lg:pl-24 gap-10" >

        <div className="flex lg:flex-row flex-col
                        lg:w-3/4 justify-between" >
            {buttons.map((btn) => (
                <ServiceButton 
                    key={btn.id}
                    btn={btn}
                />
            ))}
        </div>

        <FramedImage
            type='L'
            src={image}
            className="lg:w-6/12 md:w-7/12 w-4/6" />

    </div>
}