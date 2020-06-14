import React from 'react';

import { Group, FormInputField, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label ,...otherProps}) => (
    <Group>
        <FormInputField className="form-input" onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </FormInputLabel>)
            : null
        }
    </Group>
)

export default FormInput;