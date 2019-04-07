import React from 'react';

import './styles/reservations.css';
import bungalows from './../../assets/images/bungalows.jpg';

export default () => (
  <div className='reservations'>
    <h1>BOOKING PROCESS</h1>

    <h3>Accommodation</h3>
    <p>
      We have 2 beachside Bungalows and 2 double balcony rooms available for you to book -
    </p>
    <ul>
      <li>‘Kalapa Kepala’ Bungalow - 2/3 person</li>
      <li>‘Kupu Kupu’ Bungalow - 2/3 person</li>
      <li>Balcony Double rooms - 1/2 person</li>
    </ul>

    <p>
      From $99/day per person
      (based on group of 6)
    </p>

    <div className='reservations-img'>
      <img src={bungalows} alt='bungalows' />
    </div>

    <p>
      Contact us for availability, and we will be sure to reply within 2 hours<br />
      If you can't wait that long, try our LIVE CHAT service below!<br />
    </p>

    <h3>To make a booking</h3>
    <ul>
      <li>Check availability</li>
      <li>Decide on possible trip dates - check Mentawai Islands Ferry Schedule</li>
      <li>Book your flights into Padang</li>
      <li>Pay your 30% deposit</li>
      <li>Balance to be paid within 4 weeks of arrival</li>
    </ul>


    <h3>Peace-of-mind deposit system</h3>
    <p>
      To secure a booking with us we ask for a 30% deposit.
      If for some unforeseen circumstance you can no-longer make the trip then don't worry, you can re-book your dates and transfer the deposit.
    </p>

    <h3>Payment Options</h3>
    <ul>
      <li>PayPal (3% transaction fee)</li>
      <li>Bank Transfer - We like to use TransferWise.com</li>
    </ul>

  </div>
);
