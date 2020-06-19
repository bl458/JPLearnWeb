import React, {Component} from 'react'

class DeckProgress extends Component {
  render() {
    return (
      <div>
        <h1>Show progress for {this.props.pDeck}!</h1>
        <h3>
          You have done {this.props.pBank.length} out of {this.props.pDeckSize} Kanji!
        </h3>
        <button className="playBtn" onClick={this.props.onGoBack}>Go back!</button>
      </div>
    )
  }
}

export default DeckProgress
