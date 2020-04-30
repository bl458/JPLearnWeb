import React from 'react';
import ReactPlayer from 'react-player';

const ResponsivePlayer = ({url, handleProgress}) => (
  <div className="video-inner">
    <ReactPlayer
      className='react-player'
      url={url}
      controls='true'
      width='100%'
      height='100%'
      onProgress={handleProgress}
    />
  </div>
)

export default ResponsivePlayer;
