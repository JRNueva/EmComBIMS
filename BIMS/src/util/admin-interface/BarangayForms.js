export function ORGANIZED_PAGE(form) {

    const result = [];
    const maxItemsPerPage = 6; 

    form.parts.forEach(part => {
        const { id, title, inputs } = part;
        let currentPage = [];
        let currentCount = 0;

        inputs.forEach(item => {
            let itemCount = 1;

            if (item.id === 'contact-preferences' 
                || (item.type === 'select' && item.options.includes('Other')) 
                || item.inputType === 'textarea') {
                itemCount = 2;
            }

            if (currentCount + itemCount > maxItemsPerPage) {
                result.push({
                    id: id,
                    title: title,
                    items: currentPage
                });
                currentPage = [];
                currentCount = 0;
            }

            currentPage.push(item);
            currentCount += itemCount;
        });

        if (currentPage.length > 0) {
            result.push({
                id: id,
                title: title,
                items: currentPage
            });
        }
    });

    return result;
}

export function VALIDATE_FORM(input, formData) {

    const currentPageInputs = input?.items || [];
    const formErrors = {};

    const patterns = {
        sms: /^(09\d{9}|639\d{9})$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    };

    const isEmptyOrSpaces = (value) => !value || value.trim() === '';

    currentPageInputs.forEach(input => {
        const value = formData[input.id] || '';
        const { id, required, type } = input;

        if (required && isEmptyOrSpaces(value)) {
            formErrors[id] = 'Fill all the required details.';
            return;
        }

        if (id.includes('sms') && !isEmptyOrSpaces(value) && !patterns.sms.test(value)) {
            formErrors[id] = 'Invalid SMS number format.';
        }

        if (id.includes('email') && !isEmptyOrSpaces(value) && !patterns.email.test(value)) {
            formErrors[id] = 'Invalid email format.';
        }

        if (id === 'status-application') {
            const preferredContact = value;
            const preferredIdComplete = `status-reason`;
            const preferredIdCompleteOther = `status-reason-other`;

            if (isEmptyOrSpaces(formData[preferredIdComplete])) {
                formErrors[preferredIdComplete] = 'Fill all the required details.';
            } else {
                if (isEmptyOrSpaces(formData[preferredIdCompleteOther])) {
                formErrors[preferredIdCompleteOther] = 'Fill all the required details.';
                }
            }
        }

        if (id === 'contact-preferences') {
            const preferredContact = value;
            const preferredId = preferredContact === 'sms' ? 'sms' : 'email';
            const preferredIdComplete = `contact-preferences-${preferredId}`;

            if (isEmptyOrSpaces(formData[preferredIdComplete])) {
                formErrors[preferredIdComplete] = 'Fill all the required details.';
            } else if (preferredContact === 'sms' && !patterns.sms.test(formData[preferredIdComplete])) {
                formErrors[preferredIdComplete] = 'Invalid SMS number format.';
            } else if (preferredContact === 'email' && !patterns.email.test(formData[preferredIdComplete])) {
                formErrors[preferredIdComplete] = 'Invalid email format.';
            }
        }

        if (type === 'select' && value === 'other') {
            const otherId = `${id}-other`;
            if (isEmptyOrSpaces(formData[otherId])) {
                formErrors[otherId] = 'Fill all the required details.';
            }
        }
    });

    return formErrors;
}

export const SERVICES_BUTTONS = [
    {
        "id": "barangay-indigency-form",
        "label": "Barangay Indigency"
    },
    {
        "id": "business-clearance-form",
        "label": "Business Clearance"
    },
    {
        "id": "cedula-form",
        "label": "Cedula Form"
    },
    {
        "id": "barangay-accreditation-form",
        "label": "Barangay Accreditation Form"
    },
    {
        "id": "barangay-clearance-form",
        "label": "Barangay Clearance"
    }
];

export const BARANGAY_DEFAULT_INPUT = [
    {
        id: 'contact-preferences-sms',
        type: 'input',
        inputType: 'num',
        label: 'Mobile Number',
        placeholder: 'Enter your mobile number',
        required: true
    },
    {
        id: 'contact-preferences-email',
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
        required: true
    },
    {
        id: 'status-application',
        type: 'select',
        label: 'Status',
        options: ['Pending', 'Approve', 'Reject', 'Completed'],
        placeholder: 'Set Status',
        required: true,
    },
    {
        id: 'status-reason',
        type: 'select',
        label: 'Rejection Reason',
        options: [ 'Missing Data (Fields or Documents)', 'Incorrect Information', 'Other'],
        placeholder: 'Select Rejection Reason',
        required: true,
    }
] 

export const BARANGAY_FORMS = [
    {
        "id": "barangay-indigency-form",
        "title": "Barangay Indigency Form",
        "desc": "Secure indigency certificates hassle-free with our online form. Apply conveniently and get the assistance you need.",
        "version": "1.0",
        "parts": [
            {
                "id": "part-1",
                "title": "Personal Information",
                "inputs": [
                    {
                        "id": "first-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "First Name",
                        "placeholder": "Enter your first name",
                        "required": true
                    },
                    {
                        "id": "middle-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Middle Name",
                        "placeholder": "Enter your middle name",
                        "required": false
                    },
                    {
                        "id": "last-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Last Name",
                        "placeholder": "Enter your last name",
                        "required": true
                    },
                    {
                        "id": "date-of-birth",
                        "type": "input",
                        "inputType": "date",
                        "label": "Date of Birth",
                        "placeholder": "Select your date of birth",
                        "required": true
                    },
                    {
                        "id": "gender",
                        "type": "select",
                        "label": "Gender",
                        "options": ["Male", "Female", "Other"],
                        "required": true
                    },
                    {
                        "id": "address",
                        "type": "input",
                        "inputType": "text",
                        "label": "Address",
                        "placeholder": "Enter your address",
                        "required": true
                    },
                    {
                        "id": "purpose",
                        "type": "select",
                        "label": "Purpose",
                        "options": [
                            "Financial Assistance",
                            "Scholarship Application",
                            "Medical Assistance",
                            "Legal Purposes",
                            "Other"
                        ],
                        "required": true
                    },
                    {
                        "id": "contact-preferences",
                        "type": "select",
                        "label": "Contact Preferences",
                        "options": ["SMS", "Email"],
                        "required": true
                    }
                ]
            },
            {
                "id": "part-2",
                "title": "Additional Information",
                "inputs": [
                    {
                        "id": "monthly-income",
                        "type": "input",
                        "inputType": "number",
                        "label": "Monthly Income",
                        "placeholder": "Enter your monthly income",
                        "required": true
                    },
                    {
                        "id": "family-members",
                        "type": "input",
                        "inputType": "number",
                        "label": "Number of Family Members",
                        "placeholder": "Enter the number of family members",
                        "required": true
                    },
                    {
                        "id": "other-remarks",
                        "type": "textarea",
                        "label": "Other Remarks",
                        "placeholder": "Any other information you would like to provide",
                        "required": false
                    }
                ]
            }
        ]
    },
    {
        "id": "business-clearance-form",
        "title": "Business Clearance Form",
        "desc": "Apply for a business clearance certificate online. This form is used for local business operation compliance.",
        "version": "1.0",
        "parts": [
            {
                "id": "part-1",
                "title": "Business Information",
                "inputs": [
                    {
                        "id": "business-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Business Name",
                        "placeholder": "Enter your business name",
                        "required": true
                    },
                    {
                        "id": "owner-first-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Owner's First Name",
                        "placeholder": "Enter owner's first name",
                        "required": true
                    },
                    {
                        "id": "owner-last-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Owner's Last Name",
                        "placeholder": "Enter owner's last name",
                        "required": true
                    },
                    {
                        "id": "business-address",
                        "type": "input",
                        "inputType": "text",
                        "label": "Business Address",
                        "placeholder": "Enter your business address",
                        "required": true
                    },
                    {
                        "id": "business-type",
                        "type": "select",
                        "label": "Type of Business",
                        "options": ["Retail", "Service", "Manufacturing", "Other"],
                        "required": true
                    },
                    {
                        "id": "contact-preferences",
                        "type": "select",
                        "label": "Contact Preferences",
                        "options": ["SMS", "Email"],
                        "required": true
                    },
                    {
                        "id": "business-permit-number",
                        "type": "input",
                        "inputType": "text",
                        "label": "Business Permit Number",
                        "placeholder": "Enter your business permit number",
                        "required": false
                    }
                ]
            },
            {
                "id": "part-2",
                "title": "Additional Business Information",
                "inputs": [
                    {
                        "id": "business-owner-address",
                        "type": "input",
                        "inputType": "text",
                        "label": "Owner's Address",
                        "placeholder": "Enter the owner's address",
                        "required": true
                    },
                    {
                        "id": "business-activities",
                        "type": "textarea",
                        "label": "Business Activities",
                        "placeholder": "Describe the main activities of the business",
                        "required": true
                    }
                ]
            }
        ]
    },
    {
        "id": "cedula-form",
        "title": "Cedula Form",
        "desc": "Get your community tax certificate (Cedula) online. This form is required for residency and tax payment purposes.",
        "version": "1.0",
        "parts": [
            {
                "id": "part-1",
                "title": "Personal Information",
                "inputs": [
                    {
                        "id": "first-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "First Name",
                        "placeholder": "Enter your first name",
                        "required": true
                    },
                    {
                        "id": "middle-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Middle Name",
                        "placeholder": "Enter your middle name",
                        "required": false
                    },
                    {
                        "id": "last-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Last Name",
                        "placeholder": "Enter your last name",
                        "required": true
                    },
                    {
                        "id": "date-of-birth",
                        "type": "input",
                        "inputType": "date",
                        "label": "Date of Birth",
                        "placeholder": "Select your date of birth",
                        "required": true
                    },
                    {
                        "id": "address",
                        "type": "input",
                        "inputType": "text",
                        "label": "Address",
                        "placeholder": "Enter your address",
                        "required": true
                    },
                    {
                        "id": "gender",
                        "type": "select",
                        "label": "Gender",
                        "options": ["Male", "Female", "Other"],
                        "required": true
                    },
                    {
                        "id": "contact-preferences",
                        "type": "select",
                        "label": "Contact Preferences",
                        "options": ["SMS", "Email"],
                        "required": true
                    }
                ]
            },
            {
                "id": "part-2",
                "title": "Tax Information",
                "inputs": [
                    {
                        "id": "annual-income",
                        "type": "input",
                        "inputType": "number",
                        "label": "Annual Income",
                        "placeholder": "Enter your annual income",
                        "required": true
                    },
                    {
                        "id": "tax-year",
                        "type": "input",
                        "inputType": "text",
                        "label": "Tax Year",
                        "placeholder": "Enter the relevant tax year",
                        "required": true
                    },
                    {
                        "id": "previous-cedula-number",
                        "type": "input",
                        "inputType": "text",
                        "label": "Previous Cedula Number",
                        "placeholder": "Enter your previous cedula number (if applicable)",
                        "required": false
                    }
                ]
            }
        ]
    },
    {
        "id": "barangay-accreditation-form",
        "title": "Barangay Accreditation Form",
        "desc": "Apply for barangay accreditation for your organization. Ensure your group is recognized and eligible for assistance.",
        "version": "1.0",
        "parts": [
            {
                "id": "part-1",
                "title": "Organization Information",
                "inputs": [
                    {
                        "id": "organization-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Organization Name",
                        "placeholder": "Enter your organization name",
                        "required": true
                    },
                    {
                        "id": "organization-address",
                        "type": "input",
                        "inputType": "text",
                        "label": "Organization Address",
                        "placeholder": "Enter your organization address",
                        "required": true
                    },
                    {
                        "id": "contact-person-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Contact Person Name",
                        "placeholder": "Enter contact person name",
                        "required": true
                    },
                    {
                        "id": "contact-preferences",
                        "type": "select",
                        "label": "Contact Preferences",
                        "options": ["SMS", "Email"],
                        "required": true
                    },
                    {
                        "id": "contact-preferences",
                        "type": "select",
                        "label": "Contact Preferences",
                        "options": ["SMS", "Email"],
                        "required": true
                    }
                ]
            },
            {
                "id": "part-2",
                "title": "Additional Organization Details",
                "inputs": [
                    {
                        "id": "organization-type",
                        "type": "select",
                        "label": "Type of Organization",
                        "options": ["Non-Profit", "Community Group", "Professional Association", "Other"],
                        "required": true
                    },
                    {
                        "id": "members-count",
                        "type": "input",
                        "inputType": "number",
                        "label": "Number of Members",
                        "placeholder": "Enter the number of members in the organization",
                        "required": true
                    },
                    {
                        "id": "mission-statement",
                        "type": "textarea",
                        "label": "Mission Statement",
                        "placeholder": "Enter the mission statement of the organization",
                        "required": false
                    }
                ]
            }
        ]
    },
    {
        "id": "sample-form",
        "title": "Sample Form",
        "desc": "A sample form for submission with personal and business details.",
        "version": "1.0",
        "parts": [
            {
                "id": "part-1",
                "title": "Personal Information",
                "inputs": [
                    {
                        "id": "first-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "First Name",
                        "required": true
                    },
                    {
                        "id": "middle-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Middle Name",
                        "required": false
                    },
                    {
                        "id": "last-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Last Name",
                        "required": true
                    },
                    {
                        "id": "date-of-birth",
                        "type": "input",
                        "inputType": "date",
                        "label": "Date of Birth",
                        "required": true
                    },
                    {
                        "id": "gender",
                        "type": "select",
                        "label": "Gender",
                        "options": ["Male", "Female", "Other"],
                        "required": true
                    },
                    {
                        "id": "address",
                        "type": "input",
                        "inputType": "text",
                        "label": "Address",
                        "required": false
                    },
                    {
                        "id": "purpose",
                        "type": "select",
                        "label": "Purpose",
                        "options": [
                            "Financial Assistance",
                            "Scholarship Application",
                            "Medical Assistance",
                            "Legal Purposes",
                            "Other"
                        ],
                        "required": true
                    },
                    {
                        "id": "contact-preferences",
                        "type": "select",
                        "label": "Contact Preferences",
                        "options": ["SMS", "Email"],
                        "value": "SMS",
                        "required": true
                    },
                ]
            },
            {
                "id": "part-2",
                "title": "Additional Information",
                "inputs": [
                    {
                        "id": "monthly-income",
                        "type": "input",
                        "inputType": "number",
                        "label": "Monthly Income",
                        "required": true
                    },
                    {
                        "id": "family-members",
                        "type": "input",
                        "inputType": "number",
                        "label": "Number of Family Members",
                        "required": true
                    },
                    {
                        "id": "other-remarks",
                        "type": "textarea",
                        "label": "Other Remarks",
                        "required": false
                    }
                ]
            },
            {
                "id": "part-3",
                "title": "Business Information",
                "inputs": [
                    {
                        "id": "business-name",
                        "type": "input",
                        "inputType": "text",
                        "label": "Business Name",
                        "required": false
                    },
                    {
                        "id": "business-address",
                        "type": "input",
                        "inputType": "text",
                        "label": "Business Address",
                        "required": false
                    },
                    {
                        "id": "business-type",
                        "type": "select",
                        "label": "Business Type",
                        "options": ["Retail", "Services", "Manufacturing", "Other"],
                        "required": false
                    },
                ]
            }
        ],
    }

];

export function GET_FORM_RESPONSE() {
    const response = {
        "application_id": "1001",
        "form_id": "Sample Form",
        "version_id": "v1.0",
        "field_value": [
            { "field_name": "first-name", "value": "Rose" },
            { "field_name": "middle-name", "value": "Radoc" },
            { "field_name": "last-name", "value": "Nueva" },
            { "field_name": "date-of-birth", "value": "2003-02-01" },
            { "field_name": "gender", "value": "female" },
            { "field_name": "address", "value": null },
            { "field_name": "contact-preferences", "value": "sms" },
            { "field_name": "contact-preferences-sms", "value": "09431413134" },
            { "field_name": "purpose", "value": "other" },
            { "field_name": "purpose-other", "value": "other" },
            { "field_name": "monthly-income", "value": "12345" },
            { "field_name": "family-members", "value": "4" },
            { "field_name": "other-remarks", "value": "Not Provided" },
            { "field_name": "business-name", "value": "Business Name" },
            { "field_name": "business-address", "value": "Business Address" },
            { "field_name": "business-type", "value": "other" },
            { "field_name": "business-type-other", "value": "Sheesh" }
        ],
        "submitted_by": "Joanne Nueva",
        "datetime_submitted": "2024-09-19 14:30:00",
        "approved_by": "Me, Myself and I",
        "date_approved": null,
        "status": "In Progress",
        "reason": null
    };

    const transformFieldValues = (formRequest) => {
        return formRequest.field_value.reduce((acc, field) => {
            acc[field.field_name] = field.value;
            return acc;
        }, {});
    };

    const formResponse = transformFieldValues(response);

    const formDetails = {
        application_id: response.application_id,
        form_id: response.form_id,
        version_id: response.version_id,
        submitted_by: response.submitted_by,
        datetime_submitted: response.datetime_submitted,
        approved_by: response.approved_by,
        date_approved: response.date_approved,
        status: response.status,
        reason: response.reason,
    };

    return { formDetails, formResponse };
}









