import React from 'react'

const QuizResult=({score, numberq, playAgain, review, firstReview}) => (
  <div className="quiz-board">
    <div className="quiz-inner">
      <br /><br />
      You scored {score} out of {numberq} question(s)!
      <br /><br />

      <div className="qresultBtns">
        <button className="againBtn" onClick={playAgain}>Play Again!</button>
        {firstReview===1 ?
          <button className="reviewBtn" onClick={review}>Review!</button> :
          <button className="reviewBtn" onClick={review}>Review Again!</button>
        }
      </div>
    </div>
  </div>
)

export default QuizResult
