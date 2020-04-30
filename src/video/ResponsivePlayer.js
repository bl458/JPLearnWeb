import React from 'react';
import ReactPlayer from 'react-player';

const ResponsivePlayer = () => (
  <div className="video-inner">
    <ReactPlayer
      className='react-player'
      url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      controls='true'
      width='100%'
      height='100%'
    />
  </div>
)

export default ResponsivePlayer;
