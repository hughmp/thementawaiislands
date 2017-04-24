import React from 'react';

import Gallery from 'react-grid-gallery';

/* styles */
import './styles/gallery.css';

import { IMAGES } from '../constants/images.js';

/* component init */
export default () => (
  <div className='gallery'>
    <div className='gallery-wrapper'>
      <Gallery
        images={IMAGES}
        rowHeight={250}
        enableLightbox={true}
        backdropClosesModal={true}
        lightboxWidth={3000}
        enableImageSelection={false} />
    </div>
  </div>

);
