import React from 'react';

import img1 from '../../assets/images/logistics_1.png';
import img2 from '../../assets/images/logistics_2.png';
import img3 from '../../assets/images/logistics_3.png';
import map from '../../assets/images/GreenMap.jpg';
import icon1 from '../../assets/images/pictograms/airport.png';
import icon2 from '../../assets/images/pictograms/bed.png';
import icon3 from '../../assets/images/pictograms/call-a-taxi-symbol.png';
import icon4 from '../../assets/images/pictograms/ferry-facing-right.png';
import icon5 from '../../assets/images/pictograms/user.png';

import './styles/logistics.css';

export default () => (
  <div className="logistics">
    <div className='logistics-section'>
      <div className="logistics-getting-l">
        <div className="logistics-text">
          <h1>GETTING HERE</h1>
          <p>Getting to the Mentawai Islands can be<br />
            tricky and needs careful planning. We offer<br />
            various packages to make sure your trip is<br />
            stress-free from the moment you step off the<br />
            plane. If you would prefer to go solo we are<br />
            still on hand to help, just get in touch.</p>
        </div>
        <img src={img1} alt="" className="logistics-img" />
      </div>

      <div className="logistics-getting-r">
        <div className="logistics-getting-r-img">
          <img src={img2} alt="" className="logistics-img" />
        </div>
        <div>
          <h1>TRANSFER STAGES</h1>
          <ul className="logistics-getting-r-ul">
            <li>
              <div
                className='logistics-getting-r-icon'
                style={{ backgroundImage: `url(${icon1})` }}
              />
              <p><b>Pick up - Padang International Airport</b></p>
            </li>
            <li>
              <div
                className='logistics-getting-r-icon'
                style={{ backgroundImage: `url(${icon2})` }}
              />
              <p><b>Overnight hotel / homestay in Padang </b><br />
                Before travelling to the islands (the ferry departs Padang at 7am)</p>
            </li>
            <li>
              <div
                className='logistics-getting-r-icon'
                style={{ backgroundImage: `url(${icon3})` }}
              />
              <p><b>Taxi to Padang Harbour  </b><br />
                Pick-up the morning of your ferry crossing</p>
            </li>
            <li>
              <div
                className='logistics-getting-r-icon'
                style={{ backgroundImage: `url(${icon4})` }}
              />
              <p><b>Outbound Mentawai Fast Ferry </b><br />
                Ticket - 295,000 IDR per person (Surfboard bag approx 230,000 IDR)</p>
            </li>
            <li>
              <div
                className='logistics-getting-r-icon'
                style={{ backgroundImage: `url(${icon5})`, backgroundSize: "3rem" }}
              />
              <p><b>A host from Matungou will be there to meet you</b></p>
            </li>
          </ul>
          <p className='price'>All for $95/person!</p>
        </div>
      </div>
    </div>

    <div className='logistics-section'>
      <div className='logistics-section-ferry-l'>
        <h1>MENTAWAI ISLANDS FERRY SCHEDULE</h1>
        <p>We offer pick-ups from both Tuapejat and Siberut. Let us know where you will be travelling to prior to departure and we will make sure to be there to collect you. Siberut would be the preferred pick-up as it is easily accessed from the island and doesn’t incur additional charges to your package! </p>
        <ul className="logistics-section-ferry-ul">
          <li>
            <b>Monday</b>
          </li>
          <li>
            <span>Padang - Tuapejat</span>
            <span>06.00</span>
          </li>
          <li>
            <span>Tuapejat - Padang</span>
            <span>15.00</span>
          </li>
          <li>
            <b>Tuesday</b>
          </li>
          <li>
            <span>Padang - Sikabaluan - Siberut</span>
            <span>07.00</span>
          </li>
          <li>
            <span>Siberut - Padang</span>
            <span>15.00</span>
          </li>
          <li>
            <b>Wednesday</b>
          </li>
          <li>
            <span>Padang - Tuapejat</span>
            <span>06.00</span>
          </li>
          <li>
            <span>Tuapejat - Padang</span>
            <span>15.00</span>
          </li>
          <li>
            <b>Thursday</b>
          </li>
          <li>
            <span>Padang - Tuapejat </span>
            <span>06.00</span>
          </li>
          <li>
            <span>Tuapejat - Padang </span>
            <span>15.00</span>
          </li>
          <li>
            <b>Friday</b>
          </li>
          <li>
            <span>Padang - Tuapejat </span>
            <span>06.00</span>
          </li>
          <li>
            <span>Tuapejat - Padang</span>
            <span>14.00</span>
          </li>
          <li>
            <b>Saturday</b>
          </li>
          <li>
            <span>padang - Sikabaluan - Siberut </span>
            <span>07.00</span>
          </li>
          <li>
            <span>Siberut - Padang</span>
            <span>15.00</span>
          </li>
          <li>
            <b>Sunday</b>
          </li>
          <li>
            <span>Padang - Tuapejat </span>
            <span>06.00</span>
          </li>
          <li>
            <span>Tuapejat - Padang </span>
            <span>15.00</span>
          </li>
        </ul>
      </div>
      <div className='logistics-section-ferry-r' style={{ backgroundImage: `url(${img3})`, backgroundSize: "cover" }} />

    </div>

    <div className='logistics-section' style={{ display: "block" }}>
      <img src={map} alt="map" style={{ width: "100%" }} />
    </div>

  </div>
);

