import React, {Component} from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import Subtitle from './Subtitle';
import './Video.css';
import sub_one from '../assets/subtitle_json/Attack.on.Titan.01.To.You.in.2000.Years.720p.Bluray.x264.Kirion.json';


class Video extends Component {
  state={
    url: 'https://www.youtube.com/watch?v=x7hjx8OPiA0', //Placeholder
    playedSeconds: 0,
    playedPercent: 0,
    engSub: ''
  }

  handleProgress = (state) => {
    this.setState({
        playedSeconds: state.playedSeconds,
        playedPercent: state.played
      });
  }

  updateSub = (playedSeconds,playedPercent) => {
    if (0<playedPercent && playedPercent<1) {
      for (var i=0; i<sub_one.length; i++) {
        if (sub_one[i].start < playedSeconds && playedSeconds < sub_one[i].end) {
          this.setState({engSub: sub_one[i].content})
          return;
        }
      }
      this.setState({engSub: ''})
    }
  }

  componentDidMount() {
    this.interval =
      setInterval(() =>
        this.updateSub(this.state.playedSeconds, this.state.playedPercent),
        0.00000000000000000000000000000000000000000000000000001);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
            engSub={this.state.engSub}
          />
        </div>
      </div>
    );
  }
}

export default Video;
