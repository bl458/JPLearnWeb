import React, {Component} from 'react'

class DeckSelection extends Component {
  render() {
    return (
      <div>
        <label>Choose a Deck:     </label>
        <select className="deck-select" onChange={this.props.onPDeckChange}>
          <option value="N1">N1</option>
          <option value="N2">N2</option>
        </select>

        <br />

        <button className="playBtn" onClick={this.props.onCheck}>Check!</button>
      </div>
    )
  }
}

export default DeckSelection
