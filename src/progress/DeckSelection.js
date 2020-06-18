import React, {Component} from 'react'

class DeckSelection extends Component {
  render() {
    return (
      <div>
        <h1>Deck Selection Page</h1>
        <label>Deck:     </label>
        <select className="deck-select" onChange={this.props.onPDeckChange}>
          <option value="N1">N1</option>
          <option value="N2">N2</option>
        </select>
        <button className="playBtn" onClick={this.props.onCheck}>Check!</button>
      </div>
    )
  }
}

export default DeckSelection
