import { NavLink } from 'react-router-dom';
import { BARANGAY_DETAILS, BARANGAY_LOGO } from '../../../util/resident-interface/BarangayDetails.js';

export default function Logo({...props}) {

    return (
        <div {...props}>
            <NavLink to="/" end className="flex flex-row my-auto h-full overflow-hidden justify-start gap-3">
                <div className="flex flex-row gap-2 flex-shrink-0">
                    <img alt="City" src={BARANGAY_LOGO.city} className="h-14 w-auto my-auto" />
                    <img alt="City" src={BARANGAY_LOGO.barangay} className="h-14 w-auto my-auto" />
                </div>

                <div className="flex flex-col text-xs font-light leading-4 text-gray-900 text-start my-auto nav-text overflow-hidden">
                    <h1 className='text-sm font-semibold truncate'>{BARANGAY_DETAILS.name}</h1>
                    <p className="truncate">{BARANGAY_DETAILS.city}, {BARANGAY_DETAILS.province}</p>
                    <p className="truncate">{BARANGAY_DETAILS.country}</p>
                </div>
            </NavLink>
        </div>
    );
}
