import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.login({ credential, password }))
    .then(() => setShowModal(false))
    .catch(
      async (res) => {
        const data = await res.json();
        console.log('Login form data: ', data)
        if (data && data.errors) setErrors(data.errors);
      }
    )
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>

      <label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder='Username or Email'
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
      
      <span className="form-button">
        <input type="submit" value="Log In" />
      </span>
    </form>
  );
}

export default LoginForm;
