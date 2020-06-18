import React, {Component} from 'react'

class DeckProgress extends Component {
  render() {
    return (
      <div>
        <h1>Show progress for {this.props.pDeck}!</h1>
        <h3>{this.props.pBank.map((item) => JSON.stringify(item))}</h3>
      </div>
    )
  }
}

export default DeckProgress
