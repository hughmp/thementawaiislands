import React from 'react';

// styles
import './styles/press.css';

// images
import pic1 from './../../assets/images/press/1.jpg';
import pic2 from './../../assets/images/press/2.jpg';
import pic3 from './../../assets/images/press/3.jpg';
import pic4 from './../../assets/images/press/4.jpg';
import pic5 from './../../assets/images/press/5.jpg';
import pic6 from './../../assets/images/press/6.jpg';
import pic7 from './../../assets/images/press/7.jpg';

// component
export default () => (
  <div className='press'>
    <h1>PRESS @ MATUNGOU</h1>
    <p>
      From time to time here at Matungou, we call upon selected talents to discuss possible collaborations.
      With the view to receive valuable feedback on how we perform,
      there is no better feedback that from those that have worked so closely with the surf industry and travelled the world hunting waves.
      Whether they surf professionally, photograph or shape, it serves as a great excuse for everyone to visit the Island and enjoy a solid blow-out!
    </p>
    <p>
      Here are some of our recent collaborative projects:
    </p>

    <h1>
      Matt Mario Photography -
    </h1>

    <div className='post'>
      <div className='text'>
        <p>
          Matt is an exception talent in the field of Ocean and Surf Photography.
          Based in the chilled water of Cornwall in South West England, Matt has achieved a loyal local following and it is no surprise.
          Take a look at <a href='http://www.mattmariophotography.com/' target='_blank'>his work…</a>
        </p>
      </div>
      <div className='image'>
        <div className='image-wrapper'>
          <a href='http://www.mattmariophotography.com/' target='_blank'>
            <img src={pic1} alt='Matt Mario Photography' />
          </a>
        </div>
      </div>
    </div>

    <h1>
      Fourth Surfboards -
    </h1>

    <div className='post reverse'>
      <div className='text'>
        <p>
          Late 2015 season presented an opportunity for us to host 14 of the UK and Ireland’s best surfers on a 10 trip to The Mentawai Islands.
          We surfed through 10 days of strong southerly winds but nonetheless, the team founds barrels and perfect walls to test out their latest boards from their shapers Luke Hart and Lee Bartlett of Fourth Surfboards - <a href='http://fourthsurfboards.com'>http://fourthsurfboards.com</a>
        </p>
        <p>
          The team included top surfers including Adam ‘Bearman’ Griffiths - WSL Longboard Competitor, Tommy Butler - WSL Big Wave World Tour Competitor, Cornish talent Oli Adams, Ripcurl team Irish talent Gearoid Mcdaid and many many more.
        </p>
        <p>
          The trip was captured by Sharpy from CarveMag UK and Mr B Productions.
        </p>

        <h3>
          <a href='http://www.carvemag.com/2015/10/mantungou' target='_blank'>CarveMag UK Article</a>
        </h3>

        <h3>
          <a href='http://magicseaweed.com/news/amping-in-matungou/8231' target='_blank'>View the trailer - magicseaweed.com</a>
        </h3>

        <h3>
          <a href='http://www.carvemag.com/2015/10/mantungou' target='_blank'>View the Full Edit</a>
        </h3>
      </div>

      <div className='image'>
        <img src={pic2} alt='Fourth Surfboards' />
      </div>

    </div>

    <h1>
      Testimonial - Adam ‘Bearman’ Griffiths
    </h1>

    <div className='post'>
      <div className='text'>
        <blockquote>
          "From the moment I stepped off the plane in Padang, the Matungou crew made me feel at home…
          Once at the surf camp I was looked after from start to finish, the food was good, the beds comfy and the beer was cold.
          If you don't want to spend a fortune and want to experience the Mentawai culture as well as the waves I can't recommend this place enough!"
          <cite>- Adam ‘Bearman’ Griffiths - Pro Surfer, WSL Longboard World Series</cite>
        </blockquote>

      </div>
      <div className='image portrait'>
        <img src={pic4} alt='' className='portrait' />
      </div>
    </div>

    <h1>
      Filters For Good - A Community Support Project supported by Matungou
    </h1>

    <div className='post reverse'>
      <div className='text'>
        <p>
          Matungou welcomed the opportunity to host a team of young gentleman on a mission to transport water filters to the far reaching corners of Indonesia,
          with a view to provide communities with equipment to purifying water the case of an environmental disaster.
        </p>
        <p>
          Kevin Koch and his team met with local officials, educated children at the local school and staff at the small Hospital while filming their venture with beautiful perspective.
          Their adventure is documented presented with professional editing in a feature film - Filters for Good.
        </p>
        <p>
          Enjoy the full Filters For Good Edit
        </p>
      </div>

      <div className='image'>
        <iframe
          src='https://player.vimeo.com/video/148127116?color=ff0179'
          frameBorder='0'
          allowFullScreen>
        </iframe>
      </div>
    </div >


    <h1>
      MATUNGOU Surf Mentawai - as seen in… CARVEMAG.COM
    </h1>

    <p>
      Matungou was presented in a full feature article by carvemag.com with a balance discussion on the age-old dilemma of deciding between
      Charter Boats and Land Camp accommodation when visiting The Mentawai Islands. We’ll try not to be too biased but its fair to say that
      while Charter Boats have always seemed to have the edge, the tide is changing…
    </p>

    <h3>
      <a href='http://www.carvemag.com/2015/10/mantungou' target='_blank'>View the full article in Print here</a>
    </h3>

    <img src={pic3} alt='carvemag' />


  </div >
);
