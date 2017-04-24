import React from 'react';

import { Link } from 'react-router';

import MENU_TEXT from '../constants/menu.json';

import calIcon from '../../assets/images/icons/cal.png';
import './styles/menu.css';

export default React.createClass({
  getInitialState() {
    return {
      'brochure': 'none',
      'trip-package': 'none',
      'gallery': 'none',
      'logistics': 'none',
      'press': 'none'
    };
  },

  render() {
    return (
      <div className='header-menu-wrapper'>
        {
          MENU_TEXT
            .en
            .map((menu, index) => (
              <Link
                id={menu.heading}
                key={index}
                className='header-menu-item'
                activeClassName='menu-item-active'
                to={`/${menu.heading.toLowerCase().replace(/\s/, '')}`}
                onMouseOver={() => {
                  /*const key = menu.heading.toLowerCase().replace(/\s/, '');
                  const nextState = {};
                  nextState[key] = 'flex';
                  this.setState(nextState);*/
                }}
                onMouseLeave={() => {
                  /*const key = menu.heading.toLowerCase().replace(/\s/, '');
                  const nextState = {};
                  nextState[key] = 'none';
                  this.setState(nextState);*/
                }}
              >
                <ul
                  className='header-menu-ul'
                  style={{
                    display: this.state[menu.heading.toLowerCase().replace(/\s/, '')],
                  }}
                >
                  {
                    menu.items.map((item, index) => (
                      <li className='header-menu-li' key={index}>{item}</li>
                    ))
                  }
                </ul>
                {menu.heading.toUpperCase()}
              </Link>
            ))
        }
        <Link
          className='header-booking-button'
          to="/booking"
        >
          <img src={calIcon} role='presentation'></img>
          RESERVATIONS
        </Link>
      </div>
    )
  }
});
