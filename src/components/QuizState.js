import React, {Component} from 'react';

class QuizState extends Component {
  render() {
    return (
      <div className="quiz-board">
        <div className="quiz-inner">
          Question {this.props.numberq-this.props.qBank.length+1} of {this.props.numberq}
          <br /><br /><br />

          Type the Hiragana reading!
          <br /><br />

          {this.props.qBank[0].Kanji}
          <br /><br />
          <input
            className="answer-input"
            type="text"
            value={this.props.answer}
            name="quizAnswer"
            onChange={this.props.onAnswerChange} />
          <br /><br />

          <button className="submitBtn" onClick={this.props.onSubmit}>Submit</button>
          <button className="submitBtn" onClick={this.props.onSkip}>Skip</button>
        </div>
      </div>
    );
  }

}

export default QuizState;
