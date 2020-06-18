import React, {Component} from 'react'

class Progress extends Component {
  state = {
    pDeck: 'N1' // deck that user chose to view progress
  }

  onPDeckChange = (e) => {
    console.log('Called onPDeckChange')
    this.setState({
      pDeck: e.target.value
    })
  }

  onCheck = () => {
    console.log(this.state.pDeck)
  }

  render() {
    return (
      <div className="quiz-board">
        <div className="quiz-inner">
          <h1>This is the Progress page! ID is {this.props.id}</h1>
          <label>Deck:     </label>
          <select className="deck-select" onChange={this.onPDeckChange}>
            <option value="N1">N1</option>
            <option value="N2">N2</option>
          </select>
          <button className="playBtn" onClick={this.onCheck}>Check!</button>
        </div>
      </div>
    )
  }
}

export default Progress
