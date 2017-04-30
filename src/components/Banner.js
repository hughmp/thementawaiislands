import React from 'react';
import debounce from 'lodash/debounce';
// import throttle from 'lodash/throttle';

import TypeWriter from './utility/TypeWriter';

import landingImage from '../../assets/images/landing-images/5.jpg';
import arrow from '../../assets/images/icons/arrow.png';

import './styles/banner.css';

export default React.createClass({

  componentWillMount() {
    this.handleScroll =
      debounce(this.handleScroll, 500);
  },

  componentDidMount() {
    window.addEventListener('scroll',
      this.handleScroll
    );
  },

  componentWillUnmount() {
    window.removeEventListener('scroll',
      this.handleScroll
    );
    this.props.setTransparent(false);
  },

  handleScroll() {
    this.bottom = document
      .querySelector('.banner')
      .getBoundingClientRect()
      .bottom;
    if (this.bottom <= 80) {
      this.props.setTransparent(false);
    };
    if (this.bottom > 80) {
      this.props.setTransparent(true);
    };
  },

  render() {
    return (
      <div
        className='banner'
      >
        <div className="banner-bg"
          style={{ backgroundImage: `url(${landingImage})` }} />
        <div className='banner-statement'>
          Mentawai Islands.
          <br />
          <TypeWriter>
            <span>#surf</span>
            <span>#perfection</span>
            <span>#stoked</span>
          </TypeWriter>
        </div>
        <img
          className='scroll-arrow'
          src={arrow}
          alt=''
        />
      </div>
    )
  }

});