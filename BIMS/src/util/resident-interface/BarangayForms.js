export function ORGANIZED_PAGE(array) {
    const result = [];
    const maxPages = 5; 

    let currentPage = [];
    let currentCount = 0;

    for (let i = 0; i < array.length && result.length < maxPages; i++) {
        const item = array[i];
        let itemCount = 1;

        (item.id === 'contact-preferences' 
        || item.type === 'select' && item.options.includes('Other') 
        || item.inputType === 'textarea') && (
            itemCount = 2 
        )

        if (currentCount + itemCount > 5) { 
            result.push(currentPage);
            currentPage = [];
            currentCount = 0;
        }

        currentPage.push(item);
        currentCount += itemCount;
    }

    if (currentPage.length > 0) {
        result.push(currentPage);
    }

    return result;
}

export function validateForm(pages, activeStep, formData) {
  const currentPageInputs = pages[activeStep];
  const formErrors = {};

  currentPageInputs.forEach(input => {
    const value = formData[input.id];
    const isRequired = input.required;

    if (isRequired && (!value || value.trim() === '')) {
      formErrors[input.id] = 'Fill all the required details.';
    } else {

      if (input.id === 'contact-preferences' && value) {
        if (value === 'sms') {
          if (!formData['sms'] || formData['sms'].trim() === '') {
            formErrors['sms'] = 'Fill all the required details.';
          } else {
            const phonePattern = /^(09\d{9}|639\d{9})$/;
            if (!phonePattern.test(formData['sms'])) {
              formErrors['sms'] = 'Invalid SMS number format.';
            }
          }
        } else if (value === 'email') {
          if (!formData['email'] || formData['email'].trim() === '') {
            formErrors['email'] = 'Fill all the required details.';
          } else {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(formData['email'])) {
              formErrors['email'] = 'Invalid email format.';
            }
          }
        }
      }

      if (input.type === 'select' && value === 'other') {
        if (!formData[`${input.id}-other`] || formData[`${input.id}-other`].trim() === '') {
          formErrors[`${input.id}-other`] = 'Fill all the required details.';
        }
      }
    }
  });

  return formErrors;
}

// Minimum of 6 buttons

export const SERVICES_BUTTONS = [
    {
        id: 'barangay-indigency-form',
        label: 'Barangay Indigency',
        desc : 'Document for financial assistance eligibility verification.',
    },
    {
        id: 'business-clearance-form',
        label: 'Business Clearance',
        desc : 'Document for financial assistance eligibility verification.',
    },
    {
        id: 'business-clearance-form',
        label: 'Business Clearance',
        desc : 'Document for financial assistance eligibility verification.',
    },
    {
        id: 'cedula-form',
        label: 'Cedula Form',
        desc : 'Official ID for residency and community tax payment.',
    },
    {
        id: 'barangay-accreditation-form',
        label: 'Barangay Accreditation Form',
        desc : 'Official recognition form for organizational authorization.',
    },  
]

export const INSTRUCTIONS = [
    "1. Please fill out this form accurately and completely.",
    "2. If a question does not apply, mark it as \"N/A\" or leave it blank.",
    "3. Upon submission, an automated verification OTP will be promptly dispatched to confirm the successful submission of the form.",
    "4. For assistance, contact the barangay office."
]

export const BARANGAY_DEFAULT_INPUT = [
    {
        id: 'sms',
        type: 'input',
        inputType: 'num',
        label: 'Mobile Number',
        placeholder: 'Enter your mobile number',
        required: true
    },
    {
        id: 'email',
        type: 'input',
        inputType: 'text',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: true
    },
    {
        id: 'other',
        type: 'input',
        inputType: 'text',
        label: 'Other',
        placeholder: 'Enter Other',
        required: false
    }
] 

export const BARANGAY_FORMS = [
    {
        id: 'barangay-indigency-form',
        title: 'Online Barangay Indigency Form',
        desc: 'Secure indigency certificates hassle-free with our online form. Apply conveniently and get the assistance you need.',
        inputs: [
            {
                id: 'first-name',
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            },
            {
                id: 'middle-name',
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                placeholder: 'Enter your middle name',
                required: false
            },
            {
                id: 'last-name',
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            },
            {
                id: 'contact-preferences',
                type: 'select',
                label: 'Contact Preferences',
                options: ['SMS', 'Email'],
                placeholder: 'Select contact preferences',
                required: true
            },
            {
                id: 'purpose',
                type: 'select',
                label: 'Purpose',
                options: ['Financial Assistance', 'Scholarship Application', 'Medical Assistance', 'Legal Purposes', 'Other'],
                placeholder: 'Select the purpose for the indigency certificate',
                required: true,
            }
        ]
    },
    {
        id: 'inquiry-form',
        title: 'Inquiry Form',
        desc: "If you have any queries or messages for the barangay administrators, feel free to use the form below to reach out to us. We're here to assist you promptly.",
        inputs: [
            {
                id: 'first-name',
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            },
            {
                id: 'middle-name',
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                placeholder: 'Enter your middle name',
                required: false
            },
            {
                id: 'last-name',
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            },
            {
                id: 'contact-preferences',
                type: 'select',
                label: 'Contact Preferences',
                options: ['SMS', 'Email'],
                required: true
            },
            {
                id: 'subject',
                type: 'select',
                label: 'Subject',
                options: ['Option 1', 'Other'],
                required: true,
            },
            {
                id: 'message',
                type: 'input',
                inputType: 'textarea',
                label: 'Message',
                required: true
            }
        ]
    },
    {
        id: 'business-clearance-form',
        title: 'Business Clearance Form',
        desc: 'Apply for a business clearance certificate online. This form is used for local business operation compliance.',
        inputs: [
            {
                id: 'first-name',
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            },
            {
                id: 'middle-name',
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                placeholder: 'Enter your middle name',
                required: false
            },
            {
                id: 'last-name',
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            },
            {
                id: 'contact-preferences',
                type: 'select',
                label: 'Contact Preferences',
                options: ['SMS', 'Email'],
                placeholder: 'Select contact preferences',
                required: true
            },
            {
                id: 'business-name',
                type: 'input',
                inputType: 'text',
                label: 'Business Name',
                placeholder: 'Enter your business name',
                required: true
            },
            {
                id: 'business-address',
                type: 'input',
                inputType: 'text',
                label: 'Business Address',
                placeholder: 'Enter your business address',
                required: true
            },
            {
                id: 'business-type',
                type: 'select',
                label: 'Type of Business',
                options: ['Retail', 'Service', 'Manufacturing', 'Other'],
                placeholder: 'Select the type of business',
                required: true,
            }
        ]
    },
    {
        id: 'cedula-form',
        title: 'Cedula Form',
        desc: 'Get your community tax certificate (Cedula) online. This form is required for residency and tax payment purposes.',
        inputs: [
            {
                id: 'first-name',
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            },
            {
                id: 'middle-name',
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                placeholder: 'Enter your middle name',
                required: false
            },
            {
                id: 'last-name',
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            },
            {
                id: 'contact-preferences',
                type: 'select',
                label: 'Contact Preferences',
                options: ['SMS', 'Email'],
                placeholder: 'Select contact preferences',
                required: true
            },
            {
                id: 'address',
                type: 'input',
                inputType: 'text',
                label: 'Address',
                placeholder: 'Enter your address',
                required: true
            },
            {
                id: 'birthdate',
                type: 'input',
                inputType: 'date',
                label: 'Birthdate',
                required: true
            }
        ]
    },
    {
        id: 'barangay-accreditation-form',
        title: 'Barangay Accreditation Form',
        desc: 'Apply for official recognition with this accreditation form. This form is for organizational authorization within the barangay.',
        inputs: [
            {
                id: 'first-name',
                type: 'input',
                inputType: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            },
            {
                id: 'middle-name',
                type: 'input',
                inputType: 'text',
                label: 'Middle Name',
                placeholder: 'Enter your middle name',
                required: false
            },
            {
                id: 'last-name',
                type: 'input',
                inputType: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            },
            {
                id: 'contact-preferences',
                type: 'select',
                label: 'Contact Preferences',
                options: ['SMS', 'Email'],
                placeholder: 'Select contact preferences',
                required: true
            },
            {
                id: 'organization-name',
                type: 'input',
                inputType: 'text',
                label: 'Organization Name',
                placeholder: 'Enter the name of your organization',
                required: true
            },
            {
                id: 'organization-address',
                type: 'input',
                inputType: 'text',
                label: 'Organization Address',
                placeholder: 'Enter the address of your organization',
                required: true
            },
            {
                id: 'purpose',
                type: 'input',
                inputType: 'text',
                label: 'Purpose of Accreditation',
                placeholder: 'Enter the purpose of accreditation',
                required: true
            }
        ]
    },
    {
        id: 'barangay-accreditation-form',
        title: 'Barangay Accreditation Form',
        desc: 'Official recognition form for organizational authorization. Complete this form to obtain official recognition for your organization within the barangay.',
        inputs: [
            {
                id: 'org-name',
                type: 'input',
                inputType: 'text',
                label: 'Organization Name',
                placeholder: 'Enter the name of your organization',
                required: true
            },
            {
                id: 'org-type',
                type: 'select',
                label: 'Organization Type',
                options: ['Non-profit', 'Cooperative', 'Youth Organization', 'Women\'s Group', 'Other'],
                placeholder: 'Select the type of organization',
                required: true
            },
            {
                id: 'org-address',
                type: 'input',
                inputType: 'text',
                label: 'Organization Address',
                placeholder: 'Enter the address of your organization',
                required: true
            },
            {
                id: 'contact-person-first-name',
                type: 'input',
                inputType: 'text',
                label: 'Contact Person First Name',
                placeholder: 'Enter the first name of the contact person',
                required: true
            },
            {
                id: 'contact-person-middle-name',
                type: 'input',
                inputType: 'text',
                label: 'Contact Person Middle Name',
                placeholder: 'Enter the middle name of the contact person (optional)',
                required: false
            },
            {
                id: 'contact-person-last-name',
                type: 'input',
                inputType: 'text',
                label: 'Contact Person Last Name',
                placeholder: 'Enter the last name of the contact person',
                required: true
            },
            {
                id: 'contact-preferences',
                type: 'select',
                label: 'Contact Preferences',
                options: ['SMS', 'Email'],
                placeholder: 'Select contact preferences for the organization',
                required: true
            },
            {
                id: 'org-purpose',
                type: 'textarea',
                label: 'Organization Purpose',
                placeholder: 'Describe the purpose and goals of your organization',
                required: true
            },
            {
                id: 'documents-submitted',
                type: 'select',
                label: 'Documents Submitted',
                options: ['Bylaws', 'SEC Registration', 'Board Resolution', 'Other'],
                placeholder: 'Select the documents submitted for accreditation',
                required: true,
                multiple: true
            },
            {
                id: 'date-established',
                type: 'input',
                inputType: 'date',
                label: 'Date Established',
                placeholder: 'Select the date your organization was established',
                required: true
            }
        ]
    }
];





