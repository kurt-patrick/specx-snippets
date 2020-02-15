import React from 'react';

function AttributeDescriptionTypeSelector(props) {
    if (!props.handleChange) {
        return 'ERROR: You must add handleChange to the props!'
    }

    return (
        <select 
            className="form-control form-control-sm" aria-hidden="true" value={props.value || 'Text'}
            onChange={(e) => props.handleChange(e.target.value)}
        >
            <option value="Text">Text</option>
            <option value="Amount">Amount</option>
            <option value="Date">Date</option>
        </select>
    );
}
export default AttributeDescriptionTypeSelector;
