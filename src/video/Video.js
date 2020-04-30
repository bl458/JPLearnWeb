import React, {Component} from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import Subtitle from './Subtitle';
import './Video.css';

class Video extends Component {
  state={
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    played: 0 //In seconds
  }

  handleProgress = (state) => {
    this.setState({played: state.playedSeconds});
    console.log(this.state.played);
  }

  render() {
    return(
      <div className="container">
        <div className="video-title">Video Learning</div>
        <div className="video-board">
          <ResponsivePlayer
            url={this.state.url}
            handleProgress={this.handleProgress}
          />
          <Subtitle
            played={this.state.played}
          />
        </div>
      </div>
    );
  }
}

export default Video;
