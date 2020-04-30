import React, {Component} from 'react';
import {Player} from 'video-react';
import './Video.css'
import '../../node_modules/video-react/dist/video-react.css';

class Video extends Component {
  render() {
    return(
      <div className="container">
        <div className="video-title">Video Learning</div>
        <div className="video-board">
          <div className="video-inner">
            <Player
               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
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
