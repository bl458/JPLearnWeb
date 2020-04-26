import React from "react"

const QuizStart = ({numberq,onNumberqChange,onStart}) => (
  <div className="score-board">
    <div className="score">
      <label>How many questions?</label>
      <input
        className="numberqInput"
        type="number"
        min="1"
        value={numberq}
        onChange={onNumberqChange} />
      <button className="playBtn" onClick={onStart}>Start!</button>
    </div>
  </div>
)

export default QuizStart;
