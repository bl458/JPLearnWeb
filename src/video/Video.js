import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './Video.css'

class Video extends Component {
  render() {
    return(
      <div className="container">
        <div className="video-title">Video Learning</div>
        <div className="video-board">
          <div className="video-inner">
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              controls='true'
              width='100%'
              height='100%'
            />
          </div>
          <div className="subtitle">
            Subtitle goes here
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
