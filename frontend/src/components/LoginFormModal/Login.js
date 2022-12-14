import './login.css'
import FormInput from './LoginFormInput'
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";


const Signup = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const [ apiErrors, setApiErrors ] = useState([]);
    const [ loginData, setLoginData ] = useState({
        credential:"",
        password:"",
    });

    const inputs = [
        {
            id: 1,
            name: "credential",
            type: "credential",
            placeholder: "Username",
            label: "Username",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({ loginData }))
        .then(() => setShowModal(false))
        .catch(
            async (res) => {
                const data = await res.json();
                //console.log('Login form data: ', data)
                if (data && data.errors) setApiErrors(data.errors);
            }
        )
    }

    const onChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value });
        console.log('login data: ', loginData)
    };

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={loginData[input.name]} onChange={onChange} />
                    ))}
                <span id='api-error'>{apiErrors}</span>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup;
