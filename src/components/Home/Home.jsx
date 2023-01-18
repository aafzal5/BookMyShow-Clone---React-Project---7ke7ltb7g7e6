import React from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import NowPlaying from '../nowPlaying/NowPlaying';
import SignUpForm from '../SignUpForm/SignUpForm';

const Home = ()=> {
  return (
    <>  
        <Navbar/>
        <NowPlaying/>
    </>
  )
}

export default Home;