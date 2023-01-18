import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

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
            localStorage.setItem('name', 'name');
            localStorage.setItem('email', 'email');
            localStorage.setItem('password', 'password');
            setError(error);
            navigate('/SignInForm');
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

// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';

// const SignUpForm = () => {
//   const [redirect, setRedirect] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem('user', JSON.stringify(formData));
//     setRedirect(true);
//   }

//   if (redirect) {
//     return <Redirect to='/signin' />
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" name="email" onChange={handleChange} value={formData.email} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" name="password" onChange={handleChange} value={formData.password} />
//       </label>
//       <br />
//       <input type="submit" value="Sign Up" />
//     </form>
//   );
// }

// export default SignUpForm;

