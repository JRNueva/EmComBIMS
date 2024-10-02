import MalolosLogo from '../../assets/resident-interface/images/MalolosLogo.png';
import MojonLogo from '../../assets/resident-interface/images/MojonLogo.png';

export const BARANGAY_LOGO = {
    barangay : MojonLogo,
    city : MalolosLogo,
}

export const BARANGAY_DETAILS = {
    name : 'Barangay Mojon',
    city : 'City of Malolos',
    province : 'Bulacan',
    country : 'Philippines'
}

export const BARANGAY_DESC =  ` Inasabing natatag ang Barangay Mojon noong taong 1890. 
    Dating malawak na bukirin na taniman ng mga palay at tubo, kung saan ang mga lupaing ito ay pag-aari ng Pamilya Bautista. 
    Sa kalaunan ay tinayuan ng mga subdibisyon, ngayon ay maituturing na may pinakamalawak na lupang tirahan o mga kabahayan. `

export const ABOUT_BARANGAY = {
    about : `At Barangay Mojon, we\'re dedicated to enhancing community engagement and service delivery through our innovative 
        Barangay Management Information System (BMIS). Our system aims to streamline administrative processes, 
        improve transparency, and empower residents with easy access to essential services and information.`,
    vision : `To foster a connected and empowered community by leveraging technology to enhance barangay governance, 
        promote accountability, and improve the quality of life for all residents.`,
    mission : `To be a model barangay that embraces innovation and digital transformation 
        to create a more responsive, inclusive, and sustainable community.`
}

export const OFFICE_HOURS = {
    weekDays : 'Monday - Friday',
    hours : '8:00 a.m. - 5:00 p.m.', 
    note : 'Exept on Holidays'
}

export function CONTACT_DETAILS() {
    const email = 'brgy.mojon.malolos@gmail.com';
    const address = 'Brgy Mojon Hall, VR69+82W, Malolos, Bulacan';

    return {
        landline: '816-7602',
        phone: '0926-4858 202',
        email: 
        {
            label: email,
            url: `mailto:${email}`
        },
        address: 
        {
            label: address,
            url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
        },
        location: 
        {
            latitude: 14.860888,
            longitude: 120.817549,
        }
    };
}

export const CUSTOMER_CHAT = {
    appId : '000000',
    pageID : '000000'
}

export const QUICK_LINKS = [
    {
        label : 'Malolos City, Bulacan',
        url : 'https://maloloscity.gov.ph/',
    },
    {
        label : 'Malolos City Information Office',
        url : 'https://www.facebook.com/MalolosCIOPage?_rdc=2&_rdr'
    }
]

// 

import calendarIcon from '../../assets/resident-interface/icons/footer/calendar.svg';
import timeIcon from '../../assets/resident-interface/icons/footer/time.svg';
import globeIcon from '../../assets/resident-interface/icons/footer/globe.svg';
import facebookIcon from '../../assets/resident-interface//icons/footer/facebook.svg';
import mailIcon from '../../assets/resident-interface//icons/footer/mail.svg';
import phoneIcon from '../../assets/resident-interface//icons/footer/phone.svg';
import locationIcon from '../../assets/resident-interface/icons/footer/location.svg';

export function SITEMAP() {

    const officeHours = [
        { 
            label: [OFFICE_HOURS.weekDays], 
            url: null ,
            icon : calendarIcon
        },  
        { 
            label: [OFFICE_HOURS.hours, OFFICE_HOURS.note],
            url: null ,
            icon : timeIcon 
        },
    ];

    const quickLinks = [
        { 
            label: [QUICK_LINKS[0].label], 
            url: QUICK_LINKS[0].url,
            icon : globeIcon
        },
        { 
            label: [QUICK_LINKS[1].label], 
            url: QUICK_LINKS[1].url,
            icon : facebookIcon
        }
    ]

    const { email, phone, landline, address } = CONTACT_DETAILS();

    const parts = address.label.split(',').map(part => part.trim());
    const part1 = parts.slice(0,2).join(', ');
    const part2 = parts.slice(2).join(', ');

    const contactDetails = [
        { 
            label: [email.label], 
            url: email.url,
            icon : mailIcon
        },
        { 
            label: [`${phone} / ${landline}`], 
            url : null ,
            icon : phoneIcon
        },
        { 
            label: [part1, part2], 
            url: address.url ,
            icon : locationIcon
        }
    ];

    return [
    [
        {
            title: "Office Hours",
            links: officeHours
        },
        {
            title: "Quick Links",
            links: quickLinks
        },
        {
            title: "Contact Us",
            links: contactDetails
        }
    ],
    [
        {
            url: QUICK_LINKS[0].url,
            icon : globeIcon
        },
        {
            url: QUICK_LINKS[1].url,
            icon : facebookIcon
        },
        {
            url: email.url,
            icon : mailIcon
        }
    ]
    
    ];
}

export const EMERGENCY_HOTLINES = [
    {
        contact: "Malolos Rescue",
        number: ["0928-226 9801", "0977-640 5828", "(044) 760-5160"]
    },
    {
        contact: "Bulacan Rescue",
        number: ["911", "(044) 791-0566"]
    },
    {
        contact: "City Police Station",
        number: ["0933-610 4327", "(044) 796-2483"]
    },
    {
        contact: "City Fire Station",
        number: ["0995-186 0370", "(044) 796-6129"]
    },
    {
        contact: "City Health Office",
        number: ["(044) 931 8888 LOC. 2207"]
    },
    {
        contact: "City Mayor's Office",
        number: ["(044) 931 8888 LOC. 2201-2202"]
    },
    {
        contact: "Philippine Red Cross",
        number: ["0968-243 3409", "(044) 662-5922"]
    },
    {
        contact: "Bulacan Medical Center",
        number: ["0933-350 7791 / (E.R Triage)", "0923-449 8262 / (E.R Surgery)", "0919-853 7331", "(044) 449-4207"]
    },
    {
        contact: "Meralco",
        number: ["16211"]
    },
    {
        contact: "Prime Water",
        number: ["0919-074 2083"]
    },
    {
        contact: "Water Malolos District",
        number: ["0917-103 6903", "(044)"]
    }
]



