export default function ImageCard({ type = false, official }) {

    return <div className="relative overflow-hidden rounded-xl bg-snow"
                style={{ width: '100%', paddingTop: '133.33%' }} >

        <img src={official.image}
            alt={official.position}
            className="absolute top-0 left-0 
                h-full w-full object-cover" />

        <div className="absolute inset-x-0 -bottom-7 
                    h-[30%] px-5 skew-y-6 bg-mediumBlue" >

            <div className={`text-[100%]
                        text-white uppercase lg:py-[9%] py-[10%] 
                        -skew-y-6 flex flex-col h-full`}>
                <h5 className="font-semibold " >
                    {official.name}
                </h5>
                <p className="font-light text-[90%]" >
                    {official.term} as {official.position}
                </p>

            </div>

        </div>

    </div>
}
