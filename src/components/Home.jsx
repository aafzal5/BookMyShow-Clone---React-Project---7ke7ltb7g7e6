import React from 'react';
import GenreList from './GenreList';
import '../styles/Home.css';
import Navbar from './Navbar';
import NowPlaying from './NowPlaying';

const Home = ()=> {
  return (
    <div className='home'>  
        <Navbar/>
        <div className='main-section'>
          <GenreList/>
          <NowPlaying/>
        </div>
    </div>
  )
}

export default Home;