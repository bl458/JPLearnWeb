import React from 'react';

const QuestionPage=({answer,onAnswerChange,onEnterPress,onSubmit,onSkip}) =>
  <div>
    <input
      className="answer-input"
      type="text"
      value={answer}
      name="quizAnswer"
      onChange={onAnswerChange}
      onKeyPress={onEnterPress}/>
    <br /><br />

    <button className="submitBtn" onClick={onSubmit}>Submit</button>
    <button className="submitBtn" onClick={onSkip}>Skip</button>
  </div>

export default QuestionPage;
