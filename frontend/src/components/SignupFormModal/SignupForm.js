import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";


function SignupForm({ setShowModal }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword && password.length > 8 && firstName.length > 3 && lastName.length > 3 && username.length > 3 && email.includes('@') && email.includes('.')) {
        setErrors([]);
        return dispatch(sessionActions.signup({ email, username, password, firstName, lastName }))
        .then(setShowModal(false))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
      };
      if(!email.includes('@') || !email.includes('.')){
        return setErrors(['Please enter a valid email address'])
      }
      else if(username.length < 6) {
        return setErrors(['Username must be longer than 5 characters'])
      }
      else if (password !== confirmPassword) {
        return setErrors(['Confirm Password field must be the same as the Password field']);
      }
      else if(firstName.length < 4) {
        return setErrors(['First Name must be longer than 3 characters'])
      }
      else if(lastName.length < 4) {
        return setErrors(['Last Name must be longer than 3 characters'])
      }
      else if(password.length < 8) {
        return setErrors(['Password Must be longer than 8 characters'])
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        <label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
        </label>

        <label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            required
          />
        </label>

        <label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
            required
          />
        </label>

        <label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
            required
          />
        </label>

        <label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </label>

        <label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            required
          />
        </label>

        <span className='form-button'>
          <input type="submit" value='Sign Up' />
        </span>
      </form>
    );
  }
  
  export default SignupForm;
