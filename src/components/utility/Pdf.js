import React from 'react';

import './styles/pdf.css';

const Pdf = () => (
  <div className='pdf-wrapper'>
    <iframe
      className='pdf-iframe'
      // src={'https://drive.google.com/viewerng/viewer?embedded=true&url=' + 'https://mentawaiislands.tk' + '/pdf/Matungou_Brochure_2017.pdf'}
      src={'https://docs.google.com/viewer?url=https://www.mentawaiislands.tk/pdf/Matungou_Brochure_2017.pdf&embedded=true'}
      scrolling='yes'>
      This browser does not support PDFs. Please download the PDF to view it: <a href={'https://goo.gl/4Uk58N'}>Download PDF</a>
    </iframe>
  </div>
);

module.exports = Pdf;
