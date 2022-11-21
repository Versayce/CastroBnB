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
      }
      if(!email.includes('@') || !email.includes('.')){
        return setErrors(['Please enter a valid email address'])
      }
      if(username.length < 6) {
        return setErrors(['Username must be longer than 5 characters'])
      }
      if (password !== confirmPassword) {
        return setErrors(['Confirm Password field must be the same as the Password field']);
      }
      if(firstName.length < 4) {
        return setErrors(['First Name must be longer than 3 characters'])
      }
      if(lastName.length < 4) {
        return setErrors(['Last Name must be longer than 3 characters'])
      }
      if(password.length < 8) {
        return setErrors(['Password Must be longer than 8 characters'])
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
  
  export default SignupForm;
