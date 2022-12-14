import './signupFormInput.css'
import { useState } from 'react';

const FormInput = (props) => {
    const [ focus, setFocus ] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const showErrorOnLoseFocus = (e) => {
        if(e.target.value != "") setFocus(true);
    };

    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={showErrorOnLoseFocus} focused={focus.toString()} />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;
