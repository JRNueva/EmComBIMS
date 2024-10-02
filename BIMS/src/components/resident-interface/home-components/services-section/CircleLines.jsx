export default function CirleLines() {
    const style = "absolute flex flex-col gap-y-7 "
    const circle = "relative flex-shrink-0 w-10 h-10 py-2 rounded-full text-center bg-mediumBlue";
    const circleText = "font-inter font-semibold text-white start-center ";
    const container = "flex items-center gap-4";

    return <div>
        <div className="items-center min-w-[25rem] relative h-full">
            <div className="absolute h-40 
                            top-1 left-[1.6rem] -ml-2
                            border-l-4 border-mediumBlue l" />

            <div className={style}>
                <div className={container}>
                    <div className={`${circle} ${circleText}`}>1</div>
                    <p> <span className="font-semibold">Barangay Clearance ID:</span> Apply for barangay clearances without leaving your home.</p>
                </div>

                <div className={container}>
                    <div className={`${circle} ${circleText}`}>2</div>
                    <p> <span className="font-semibold">Barangay Clearance:</span> Streamline the process of applying for business clearance online.</p>                
                </div>

                <div className={container}>
                    <div className={`${circle} ${circleText}`}>3</div>
                    <p> <span className="font-semibold">Barangay Indigency:</span> Request residency certificates online for added convenience.</p>
                </div>
            </div>
        </div>
    </div>
}