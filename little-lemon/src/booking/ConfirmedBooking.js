import Header from '../Components/header/Header';
import './ConfirmedBooking.css'
import React from 'react';

const ConfirmedBooking = () => {
  return (
    <div>
      <Header />
      <div className='thanks'>
      <h2>Booking Confirmed</h2>
      <p>Your booking has been confirmed.</p>
      <p>Thank you for choosing our service!</p>
    </div>
    </div>
  );
};

export default ConfirmedBooking;
