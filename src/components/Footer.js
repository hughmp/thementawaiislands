import React from 'react';

import Form from './Form';

import './styles/footer.css';
import '../../assets/fonts/font-awesome.min.css';


export default ({ form, handleSubmitForm }) => (
  <footer className='footer'>

    <div className='footer-container'>
      <div className='footer-contact'>
        <h2>Contact</h2>
        <ul>
          <li className="footer-contact-item">
            <i className="fa fa-home"></i>
            <a href="https://goo.gl/AeR8iD">Matungou Dusun torolaggo<br />Desa Katurei Kecamatan, Siberut barat daya<br />25393</a>
          </li>
          <li className="footer-contact-item">
            <i className="fa fa-phone"></i>
            <a href="tel:+6281277946662">+62 (0) 8127 794 6662</a>
          </li>
          <li className="footer-contact-item">
            <i className="fa fa-envelope-o"></i>
            <a href="mailto:matungou.surf@gmail.com">matungou.surf@gmail.com</a>
          </li>
        </ul>
        <p className='footer-contact-icons'>
          <a className='fa fa-facebook' href="https://en-gb.facebook.com/Matungou/" />
          <a className='fa fa-twitter' href="https://twitter.com/matungou" />
          <a className='fa fa-instagram' href="https://www.instagram.com/matungou/" />
          <a className='fa fa-tripadvisor' href="https://www.tripadvisor.co.uk/Hotel_Review-g1572269-d3513904-Reviews-Matungou_Mentawai_Surf-Siberut_Mentawai_Islands_West_Sumatra_Sumatra.html" />
        </p>
      </div>

      <div className='footer-form'>

        <Form
          handleSubmitForm={handleSubmitForm}
          form={form}
        />

      </div>

    </div>

    <div className='footer-copyright'>
      <p>&copy; Matungou. All rights reserved.</p>
    </div>

  </footer>
);
