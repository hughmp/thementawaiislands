import React from 'react';

// import { Link } from 'react-router';

import './styles/header.css';

import logo from '../../assets/images/square-logo.svg';
import logoInvert from '../../assets/images/square-logo-invert.svg';

export default ({ children, transparent }) => (
  <div className='header-wrapper' >
    <div className={
      transparent ?
        'header transparent white-text' :
        'header black-text logo-invert'
    }>
      <div className='header-container'>
        <span className='header-logo'>
          <a href='/'>
            <img src={transparent ? logo : logoInvert} role='presentation' />
          </a>
        </span>
        <div className='header-menu-container'>
          {children}
        </div>
      </div>
    </div>
  </div >
);
