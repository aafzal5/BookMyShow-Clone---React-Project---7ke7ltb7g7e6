import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import '../styles/App.css';
import SignUpForm from './SignUpForm/SignUpForm';
import SignInForm from './SignInForm/SignInForm';

const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/SignUpForm' element = {<SignUpForm/>} />
          <Route path='/SignInForm' element = {<SignInForm/>} />
        </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App;
