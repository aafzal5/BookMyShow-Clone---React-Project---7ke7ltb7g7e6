import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (!email) {
      setError('Email is required');
    } else if (!password) {
      setError('Password is required');
    } else if (email !== storedEmail || password !== storedPassword) {
      setError('Invalid email or password');
    } else {
      setError('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <span style={{ color: 'red' }}>{error}</span>
      <br />
      <button type="submit">Sign in</button>
    </form>
  );
}

export default SignInForm;
