import React from "react"

const QuizStart = ({numberq,onNumberqChange,deck,onDeckChange,onStart}) => (
  <div className="quiz-board">
    <div className="quiz-inner">
      <br /><br />
      <label>How many questions? </label>
      <input
        className="numberq-input"
        type="number"
        min="1"
        value={numberq}
        onChange={onNumberqChange} />
      <br /><br />
      <label>Choose a deck to play: </label>
      <select className="deck-select" value={deck} onChange={onDeckChange}>
        <option value="N1">N1</option>
        <option value="N2">N2</option>
        <option value="review">Review</option>
        <option value="video_vocab">Video</option>
      </select>
      <br /><br />
      <button className="playBtn" onClick={onStart}>Start!</button>
    </div>
  </div>
)

export default QuizStart
