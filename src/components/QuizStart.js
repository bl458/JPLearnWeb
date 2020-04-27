import React from "react"

const QuizStart = ({numberq,onNumberqChange,onStart}) => (
  <div className="quiz-board">
    <div className="quiz-inner">
      <label>How many questions? </label>
      <input
        className="numberq-input"
        type="number"
        min="1"
        value={numberq}
        onChange={onNumberqChange} />
      <br /><br />
      <label>Choose a deck to play: </label>
      <select class="deck-select">
        <option value="N1">N1</option>
        <option value="N2">N2</option>
        <option value="N3">N3</option>
        <option value="N4">N4</option>
        <option value="N5">N5</option>
      </select>
      <br /><br />
      <button className="playBtn" onClick={onStart}>Start!</button>
    </div>
  </div>
)

export default QuizStart;
