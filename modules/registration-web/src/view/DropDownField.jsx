import React from 'react';

const DropDownField = (props)=> {
    return (
        <div>
            <label>
                {props.fieldName}:
                <select
                    name={props.field}
                    onChange={props.fieldChange}
                    required={props.fieldRequired} >
                {props.optionList}
                </select>
            </label>
        </div>
    )
};

export default DropDownField;