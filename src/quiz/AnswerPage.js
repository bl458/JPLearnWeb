import React from 'react';

const AnswerPage= ({qBank,onNext}) =>
  <div className="answer-page">
    <div className="answer-inner">
      {qBank[0].Hiragana}
      <br />
      {qBank[0].English}
    </div>
    <br />

    <button className="submitBtn" onClick={onNext}>Next</button>
  </div>

export default AnswerPage;
