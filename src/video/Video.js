import React, {Component} from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import Subtitle from './Subtitle';
import './Video.css';
import sub_one from '../assets/subtitle_json/Attack.on.Titan.01.To.You.in.2000.Years.720p.Bluray.x264.Kirion.json';
import sub_one_jp from '../assets/subtitle_json/[SubtitleTools.com] [Kamigami] Shingeki no Kyojin - 01 [1280x720 x264 AAC Sub(Chi,Jap)].json'


class Video extends Component {
  state={
    url: 'https://www.youtube.com/watch?v=miE97E8Dqko', //Placeholder
    playedSeconds: 0,
    playedPercent: 0,
    engSub: '',
    jpSub: ''
  }

  handleProgress = (state) => {
    this.setState({
        playedSeconds: state.playedSeconds,
        playedPercent: state.played
      });
  }

  updateEngSub = (playedSeconds,playedPercent) => {
    if (0<playedPercent && playedPercent<1) {
      for (var i=0; i<sub_one.length; i++) {
        if (sub_one[i].start < playedSeconds && playedSeconds < sub_one[i].end) {
          this.setState({
            engSub: sub_one[i].content
          })
          return;
        }
      }
      this.setState({
        engSub: ''
      })
    }
  }

  updateJpSub = (playedSeconds,playedPercent) => {
    if (0<playedPercent && playedPercent<1) {
      for (var i=0; i<sub_one_jp.length; i++) {
        if (sub_one_jp[i].start < playedSeconds && playedSeconds < sub_one_jp[i].end) {
          this.setState({
            jpSub: sub_one_jp[i].content
          })
          return;
        }
      }
      this.setState({
        jpSub: ''
      })
    }
  }

  updateSub = (playedSeconds,playedPercent) => {
    this.updateEngSub(playedSeconds, playedPercent);
    this.updateJpSub(playedSeconds, playedPercent)
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
            jpSub={this.state.jpSub}
          />
        </div>
      </div>
    );
  }
}

export default Video;
