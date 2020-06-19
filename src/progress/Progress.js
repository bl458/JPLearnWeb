import React, {Component} from 'react'
import DeckSelection from './DeckSelection'
import DeckProgress from './DeckProgress'


class Progress extends Component {
  state = {
    pDeck: 'N1', // Deck that user chose to view progress
    pDeckSize: 0,
    pBank: [], // Deck progress array. List of words that have already been seen in quiz. [{google_id: _, deck: _, word: _}, ...]
    showP: 0 // Show deck progress if 1. Show deck selection page if 0
  }

  goBack = () => this.setState({
    pDeckSize: 0,
    pBank: [],
    showP: 0,
  })

  onPDeckChange = (e) => {
    console.log('Called onPDeckChange')
    this.setState({
      pDeck: e.target.value
    })
  }

  setPDeckSize = (pDeck) => {
    console.log('Entered setPDeckSize')
    if (this.state.pDeck==='N1' || this.state.pDeck==='N2') {
      fetch(`http://localhost:4000/load_deck?deck=${this.state.pDeck}`)
      .then(response => response.json())
      .then(response => {
        this.setState({pDeckSize: response.data.length})
      })
    }
    //
    else {
      console.log('Not a premade deck')
    }
  }

  onCheck = () => {
    fetch(`http://localhost:4000/view_progress?googleId='${this.props.id}'&deck='${this.state.pDeck}'`)
    .then((response) => response.json())
    .then((json) => this.setState({
      pBank: json.data,
      showP: 1
    }))
    this.setPDeckSize()
  }

  render() {
    return (
      <div className="quiz-board">
        <div className="quiz-inner">
          {this.state.showP===0 &&
            <DeckSelection
              onPDeckChange={this.onPDeckChange}
              onCheck={this.onCheck}
            />
          }
          {this.state.showP===1 &&
            <DeckProgress
              pDeck={this.state.pDeck}
              pDeckSize={this.state.pDeckSize}
              pBank={this.state.pBank}
              goBack={this.goBack}
            />
          }
        </div>
      </div>
    )
  }
}

export default Progress
