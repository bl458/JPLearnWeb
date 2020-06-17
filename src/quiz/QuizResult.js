import React from 'react';

const QuizResult=({score, numberq, playAgain}) => (
  <div className="quiz-board">
    <div className="quiz-inner">
      <br /><br />
      You scored {score} out of {numberq} question(s)!
      <br /><br />

      <div className="qresultBtns">
        <button className="againBtn" onClick={playAgain}>Play Again!</button>
        <button className="reviewBtn" onClick={playAgain}>Review!</button>
      </div>
    </div>
  </div>
);

export default QuizResult;
