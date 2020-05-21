import React, {Component} from 'react';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from "kuroshiro-analyzer-kuromoji";
import { Tooltip } from 'reactstrap';


class Subtitle extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  state={
    tooltipOpen: false,
    tooltipText: ''
  }

  toggle = () => this.setState({tooltipOpen: window.getSelection().toString() !== ''&&!this.state.tooltipOpen});

  toFuri = async (jp) => {
    var kuroshiro = new Kuroshiro();
    await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "/dict" }));
    return await kuroshiro.convert(jp, { to: "hiragana" });
  }

  onHighlight = () => {
    if (window.getSelection().toString() !== '') {
      this.toFuri(window.getSelection().toString()).then(
        (result) => {this.setState({tooltipText: result})}
      )
    }
  }

  tooltipOffset = () => {
      if (window.getSelection().toString() !== '') {
        var a = (window.getSelection().getRangeAt(0).getBoundingClientRect().left
          + window.getSelection().getRangeAt(0).getBoundingClientRect().right)/2
        var b = (this.myRef.current.getBoundingClientRect().left
          + this.myRef.current.getBoundingClientRect().right)/2
        return a - b
      }
      return 0;
  }

  render() {
    return (
      <div ref={this.myRef}
        className="subtitle"
        onClick={this.onHighlight}>

        <p><span href="#" id="jpSub">{this.props.jpSub}</span></p>

        <Tooltip
          placement='bottom'
          offset={this.tooltipOffset()}
          isOpen={this.state.tooltipOpen}
          autohide={false}
          target="jpSub"
          toggle={this.toggle}>
          {this.state.tooltipText}
        </Tooltip>

        <br/>

        {this.props.engSub}
      </div>
    );
  }
}

export default Subtitle;
