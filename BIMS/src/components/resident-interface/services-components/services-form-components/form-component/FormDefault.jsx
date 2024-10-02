import InputDefault from '../../../basic-components/form-components/InputDefault.jsx';
import SelectDefault from '../../../basic-components/form-components/SelectDefault.jsx';
import DatePickerDefault from '../../../basic-components/form-components/date-picker/DatePickerDefault.jsx';
import { BARANGAY_DEFAULT_INPUT } from '../../../../../util/resident-interface/BarangayForms.js';

export default function FormDefault({ pages, activeStep, values, onChange, errors }) {

    const emailInput = BARANGAY_DEFAULT_INPUT.find((input) => input.id === 'email');
    const mobileNumberInput = BARANGAY_DEFAULT_INPUT.find((input) => input.id === 'sms');
    const otherInput = BARANGAY_DEFAULT_INPUT.find((input) => input.id === 'other');

    const currentPageInputs = pages[activeStep] || [];

    return <>
        {currentPageInputs.map((input) => {
            const hasError = errors[input.id] || false;

            if (input.type === 'select') {
                return (
                    <div key={input.id} className="flex flex-col gap-4">
                        <SelectDefault
                            key={input.id}
                            obj={input}
                            value={values[input.id] || ''}
                            onChange={(value) => onChange(input.id, value)}
                            error={hasError}
                        />

                        {input.id === 'contact-preferences' && (
                            <>
                                {values['contact-preferences'] === 'sms' && mobileNumberInput && (
                                    <InputDefault
                                        key={mobileNumberInput.id}
                                        obj={mobileNumberInput}
                                        value={values[mobileNumberInput.id] || ''}
                                        onChange={(e) => onChange(mobileNumberInput.id, e.target.value)}
                                        required={mobileNumberInput.required}
                                        error={errors[mobileNumberInput.id] || false}
                                    />
                                )}

                                {values['contact-preferences'] === 'email' && emailInput && (
                                    <InputDefault
                                        key={emailInput.id}
                                        obj={emailInput}
                                        value={values[emailInput.id] || ''}
                                        onChange={(e) => onChange(emailInput.id, e.target.value)}
                                        required={emailInput.required}
                                        error={errors[emailInput.id] || false}
                                    />
                                )}
                            </>
                        )}

                        {(input.type === 'select') && values[input.id] === 'other' && otherInput && (
                            <InputDefault
                                key={`${input.id}-${otherInput.id}`}
                                obj={otherInput}
                                value={values[`${input.id}-${otherInput.id}`] || ''}
                                onChange={(e) => onChange(`${input.id}-${otherInput.id}`, e.target.value)}
                                error={errors[`${input.id}-${otherInput.id}`] || false}
                            />

                        )}
                    </div>
                );
            } else if (input.type === 'input') {

                if (input.inputType === 'date') {
                    return (
                        <DatePickerDefault
                            key={input.id}
                            obj={input}
                            value={values[input.id] || ''}
                            onChange={(formattedDate) => onChange(input.id, formattedDate)} // Pass formattedDate instead of e.target.value
                            error={hasError}
                        />
                    );
                } else {
                    return (
                        <InputDefault
                            key={input.id}
                            obj={input}
                            value={values[input.id] || ''}
                            onChange={(e) => onChange(input.id, e.target.value)}
                            error={hasError}
                        />
                    );
                }
            } 

            return null; 
        })}
    </>
}
