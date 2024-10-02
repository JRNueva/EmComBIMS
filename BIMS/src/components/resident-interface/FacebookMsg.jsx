'use client';

import { FacebookProvider, CustomChat } from 'react-facebook';

import { CUSTOMER_CHAT } from '../../util/resident-interface/BarangayDetails.js'

export default function FacebookMsg() {
    const { appId, pageId } = CUSTOMER_CHAT;

    return (
        <FacebookProvider appId={appId} chatSupport>
            <CustomChat pageId={pageId} minimized={true}/>
        </FacebookProvider>    
    );
}
