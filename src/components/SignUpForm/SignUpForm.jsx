import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../SignInForm/SignInForm';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email) {
            setError('Email is required');
          } else if (!password) {
            setError('Password is required');
          } else {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            setError(error);
            history.push('/login');
          }
    }

  return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} placeholder = "Name*" onChange={handleNameChange} />
        </label>
        <br />  
        <label>
            Email:
            <input type="email" value={email} placeholder = "Email*" onChange={handleEmailChange} />
        </label>
        <br />
        <label>
            Password:
            <input type="password" value={password} placeholder = "Password*"  onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Register</button>
        </form>
        <Link to="/SignInForm">Already have an account? Sign In</Link>
    </div>
  );
}

export default SignUpForm;
