import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/SignUpForm' element = {<SignUpForm/>} />
          <Route path='/SignInForm' element = {<SignInForm/>} />
        </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App;
