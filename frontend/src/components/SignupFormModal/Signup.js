import './signup.css'
import FormInput from './SignupFormInput'
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";


const Signup = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const [ apiErrors, setApiErrors ] = useState();
    const [ signupData, setSignupData ] = useState({
        username:"",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage:"Please provide a valid email address.",
            label: "Email",
            required: true,
            pattern: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        },
        {
            id: 2,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:"Username should be 4-16 characters.",
            label: "Username",
            pattern: "^[A-Za-z0-9]{4,16}$",
            required: true,
        },
        {
            id: 3,
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            errorMessage:"First name must be 2-10 characters long.",
            label: "First Name",
            pattern: "^[A-Za-z]{2,10}$",
            required: true,
        },
        {
            id: 4,
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            errorMessage:"Last name must be 2-10 characters long.",
            label: "Last Name",
            required: true,
            pattern: "^[A-Za-z]{2,10}$",
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:"Password must be at least 8 characters long, include a lowercase letter, capital letter, number and special character.",
            label: "Password",
            required: true,
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$"
        },
        {
            id: 6,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage:"Passwords don't match.",
            label: "Confirm Password",
            required: true,
            pattern: signupData.password,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.signup({ signupData }))
        .then(() => setShowModal(false))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setApiErrors(data.errors);
        });
    }

    const onChange = (e) => {
        setSignupData({...signupData, [e.target.name]: e.target.value });
    };

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={signupData[input.name]} onChange={onChange} />
                    ))}
                <span id='api-error'>{apiErrors}</span>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup;
