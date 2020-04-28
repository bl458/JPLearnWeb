import React from 'react';

const QuizResult=({score, numberq, playAgain}) => (
  <div className="quiz-board">
    <div className="quiz-inner">
      <br /><br />
      You scored {score} out of {numberq} question(s)!
      <br /><br />

      <button className="againBtn" onClick={playAgain}>Play Again!</button>
    </div>
  </div>
);

export default QuizResult;
