import React, {Component} from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import Subtitle from './Subtitle';
import './Video.css';

class Video extends Component {
  render() {
    return(
      <div className="container">
        <div className="video-title">Video Learning</div>
        <div className="video-board">
          <ResponsivePlayer />
          <Subtitle />
        </div>
      </div>
    );
  }
}

export default Video;
