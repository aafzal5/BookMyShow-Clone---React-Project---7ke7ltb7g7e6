import React from 'react';
import '../styles/TicketsBooking.css';
import screen from './utills/images/screen.png';

export function Screen() {
  return (
    <div className='theater-screen'>
        <img src={screen} alt="theater screen" />
    </div>
  )
}
