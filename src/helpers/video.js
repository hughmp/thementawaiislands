import React from 'react';

const renderVideo = () => (
  <div>
    <iframe
      src="https://player.vimeo.com/video/142271928" // ?title=0&byline=0&portrait=0"
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen
      style={{
        border: '0',
        width: '100%',
        height: '509px',
        frameborder: '0',
      }}/>
  </div>
);

export { renderVideo };
