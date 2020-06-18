import React, {Component} from 'react'

class DeckProgress extends Component {
  render() {
    return (
      <div>
        <h1>Show progress for {this.props.pDeck}!</h1>
        <h3>
          You have done {this.props.pBank.length} out of {this.props.pDeckSize} questions for deck {this.props.pDeck}!
        </h3>
      </div>
    )
  }
}

export default DeckProgress
