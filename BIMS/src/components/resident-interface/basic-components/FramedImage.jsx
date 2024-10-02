export default function FramedImage({ type='R', src, alt='img', ...props }) {

    let style = {
        border :'pr-1 rounded-r-full',
        image : 'rounded-r-[175px]'
    }
    type === 'L' && (style = {
        border :'pl-1 rounded-l-full ml-auto',
        image : 'rounded-l-[175px]'
    })

    return <div className={`h-72 py-2 ${props.className} 
                    ${style.border} outline-4 
                    outline-dashed outline-lowestBlue`} >   
        <img 
            className={`h-full w-full ${style.border}
                    object-cover object-center` }
            src={src}
            style={{ aspectRatio: '3/2' }} 
        />
    </div>
}