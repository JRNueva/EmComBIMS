import { BARANGAY_DETAILS, BARANGAY_LOGO } from '../../../util/admin-interface/BarangayDetails.js';

export default function Logo({...props}) {

    return (
        <div {...props}>
            <div className="flex flex-row my-auto h-full overflow-hidden justify-start gap-3">
                <div className="flex flex-row gap-2 flex-shrink-0">
                    <img alt="City" src={BARANGAY_LOGO.city} className="h-14 w-auto my-auto" />
                    <img alt="City" src={BARANGAY_LOGO.barangay} className="h-14 w-auto my-auto" />
                </div>

                <div className="flex flex-col text-xs font-light leading-4 text-white text-start my-auto nav-text overflow-hidden">
                    <h1 className='text-sm font-medium truncate'>{BARANGAY_DETAILS.name}</h1>
                    <p className="truncate">{BARANGAY_DETAILS.city}, {BARANGAY_DETAILS.province}</p>
                    <p className="truncate">{BARANGAY_DETAILS.country}</p>
                </div>
            </div>
        </div>
    );
}
