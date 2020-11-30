import React from 'react';

const InputField = (props)=> {
    return (
        <div>
            <label>
                {props.fieldName}:
                <input
                    name={props.field}
                    type={props.fieldType}
                    onChange={props.fieldChange}
                    required={props.fieldRequired} />
            </label>
        </div>
    )
};

export default InputField;