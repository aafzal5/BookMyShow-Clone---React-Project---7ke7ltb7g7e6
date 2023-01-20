import React from 'react';
import GenreList from './GenreList';
import '../styles/Home.css';
import Navbar from './Navbar';
import NowPlaying from './NowPlaying';
import Seats from './Seats';

const Home = ()=> {
  return (
    <div className='home'>  
        <Navbar/>
        <div className='main-section'>
          {/* <GenreList/>
          <NowPlaying/> */}
          <Seats/>
        </div>
    </div>
  )
}

export default Home;