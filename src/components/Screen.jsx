import React from 'react';

import '../styles/TicketsBookingStyle.css';
import screen from './utills/images/screen.png';

const Screen = () => {
  return (
    <div className='theater-screen'>
        <img src={screen} alt="theater screen" />
    </div>
  )
};

export default Screen;
