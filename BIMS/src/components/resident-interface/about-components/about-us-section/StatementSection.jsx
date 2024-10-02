import FramedImage from '../../basic-components/FramedImage.jsx';

export default function StatementSection({ title, text, img }){

    let flexDirection = 'lg:flex-row-reverse md:flex-row-reverse';
    let padding  = 'md:pr-12 lg:pr-24';
    let frameImg = 'R';
    
    if (title === 'Our Vision') (
        flexDirection = 'lg:flex-row md:flex-row',
        padding  = 'md:pl-12 lg:pl-24',
        frameImg = 'L'
    )
    
    return  <div className={`flex ${flexDirection} flex-col 
                        w-full h-full py-4 justify-between
                        text-start lg:gap-20 gap-12`} >

        <div className={`flex flex-col flex-1 md:flex-2
                    py-4 px-0 sm:px-8 ${padding} 
                    justify-center gap-5`}>
            <h4 className='font-semibold text-2xl'>
                {title}
            </h4>
            <p className="mx-auto text-justify
                    font-light leading-7">
                {text}
            </p>
        </div>

        <FramedImage
            type={frameImg}
            src={img}
            className="lg:flex-1 md:flex-1 w-5/6" />     
    </div>
}