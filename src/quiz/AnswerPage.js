import React from 'react'

const AnswerPage= ({qBank,onNext}) =>
  <div className="answer-page">
    <div className="answer-inner">
      {qBank[0].hiragana}
      <br />
      {qBank[0].english}
      <br />

      <button className="submitBtn" onClick={onNext}>Next</button>
    </div>
  </div>

export default AnswerPage
