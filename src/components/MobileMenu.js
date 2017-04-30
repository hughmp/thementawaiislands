/* libraries */
import React from 'react';
import { Link } from 'react-router';

/* community componentes */
import BurgerMenu from 'react-burger-menu';

/* styles */
import './styles/mobileMenu.css';

/* constants */
import headings from '../constants/menu.json';
const Menu = BurgerMenu.slide;

/* images */
import calIcon from '../../assets/images/icons/cal.png';

const buildMenu = (handleMenuChange) => (
  headings
    .en
    .map((item, index) => (
      // needs to have wrapper to prevent errors
      <div key={`wrapper-${index}`}>
        <Link
          key={`link-${index}`}
          className='menu-item'
          to={'/' + item.heading.toLowerCase().replace(/ /g, '')}
          onClick={() => handleMenuChange({ isOpen: false })}
        >
          {item.heading}
        </Link>
      </div>
    ))
);

export default ({ handleMenuChange, isMenuOpen }) => (
  <Menu
    right
    isOpen={isMenuOpen}
  >
    <div>
      <Link
        className='menu-item'
        to='/'
        onClick={() => handleMenuChange({ isOpen: false })}
      >
        Home
    </Link>
    </div>
    {buildMenu(handleMenuChange)}

    <div>
      <Link
        className='header-booking-button mobile-booking-button'
        to='/reservations'
        onClick={() => handleMenuChange({ isOpen: false })}
      >
        <img src={calIcon} role='presentation'></img>
        RESERVATIONS
    </Link>
    </div>
  </Menu>
);
