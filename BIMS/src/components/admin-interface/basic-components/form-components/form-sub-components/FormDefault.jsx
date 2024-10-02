import InputDefault from '../../../basic-components/form-components/fields/InputDefault.jsx';
import SelectDefault from '../../../basic-components/form-components/fields/SelectDefault.jsx';
import DatePickerDefault from '../../../basic-components/form-components/fields/date-picker/DatePickerDefault.jsx';
import { BARANGAY_DEFAULT_INPUT } from '../../../../../util/admin-interface/BarangayForms.js';

export default function FormDefault({ pages, values, onChange = () => {}, errors = {}, disabled = false }) {
    
    const applicationReason = BARANGAY_DEFAULT_INPUT.find((input) => input.id.includes('status-reason'));

    const emailInput = BARANGAY_DEFAULT_INPUT.find((input) => input.id.includes('email'));
    const mobileNumberInput = BARANGAY_DEFAULT_INPUT.find((input) => input.id.includes('sms'));
    const otherInput = BARANGAY_DEFAULT_INPUT.find((input) => input.id.includes('other'));
    const currentPageInputs = pages;
    
    return <>
        {currentPageInputs.map((input) => {
            const hasError = errors[input.id] || false;

            if (input.type === 'select') {
                return (
                    <div key={input.id} className="flex flex-row gap-x-10">
                        <SelectDefault
                            key={input.id}
                            obj={input}
                            value={values[input.id] || ''}
                            onChange={(value) => onChange(input.id, value)}
                            error={hasError}
                            disabled={disabled}
                        />


                        {values['status-application'] === 'reject' && applicationReason && (
                            <div key={input.id} className="flex flex-col gap-x-10">
                                <SelectDefault
                                    key={applicationReason.id}
                                    obj={applicationReason}
                                    value={values[applicationReason.id] || ''}
                                    onChange={(value) => onChange(applicationReason.id, value)}
                                    error={errors[applicationReason.id] || false} 
                                    disabled={disabled}
                                />

                                {values[applicationReason.id] === 'other' && otherInput && (
                                    <InputDefault
                                        key={`${applicationReason.id}-${otherInput.id}`}
                                        obj={otherInput}
                                        value={values[`${applicationReason.id}-${otherInput.id}`] || ''}
                                        onChange={(e) => onChange(`${applicationReason.id}-${otherInput.id}`, e.target.value)}
                                        error={errors[`${applicationReason.id}-${otherInput.id}`] || false} // Check for errors for this input
                                        disabled={disabled}
                                    />
                                )}
                            </div>
                        )}



                        {input.id === 'contact-preferences' && (
                            <>
                                {values['contact-preferences'] === 'sms' && mobileNumberInput && (
                                    <>
                                        <InputDefault
                                            key={mobileNumberInput.id}
                                            obj={mobileNumberInput}
                                            value={values[mobileNumberInput.id] || ''}
                                            onChange={(e) => onChange(mobileNumberInput.id, e.target.value)}
                                            error={errors[mobileNumberInput.id] || false}
                                            disabled={disabled}
                                        />
                                    </>
                                )}

                                {values['contact-preferences'] === 'email' && emailInput && (
                                    <InputDefault
                                        key={emailInput.id}
                                        obj={emailInput}
                                        value={values[emailInput.id] || ''}
                                        onChange={(e) => onChange(emailInput.id, e.target.value)}
                                        required={emailInput.required}
                                        error={errors[emailInput.id] || false}
                                        disabled={disabled}
                                    />
                                )}
                            </>
                        )}

                        {input.type === 'select' && values[input.id] === 'other' && otherInput && (
                            <InputDefault
                                key={`${input.id}-${otherInput.id}`}
                                obj={otherInput}
                                value={values[`${input.id}-${otherInput.id}`] || ''}
                                onChange={(e) => onChange(`${input.id}-${otherInput.id}`, e.target.value)}
                                error={errors[`${input.id}-${otherInput.id}`] || false}
                                disabled={disabled}
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
                            onChange={(formattedDate) => onChange(input.id, formattedDate)}
                            error={hasError}
                            disabled={disabled}
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
                            disabled={disabled}
                        />
                    );
                }
            }

            return null;
        })}
    </>
}
