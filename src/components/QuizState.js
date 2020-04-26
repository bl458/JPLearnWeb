import React, {Component} from 'react';

class QuizState extends Component {
  render() {
    return (
      <div className="score-board">
        <div className="quiz-inner">
          Question {this.props.numberq-this.props.qBank.length+1} of {this.props.numberq}
          <br /><br /><br />

          Type the Hiragana reading!
          <br /><br />

          {this.props.qBank[0].kanji}
          <br /><br />
          <input
            className="quizAnswer"
            type="text"
            value={this.props.answer}
            name="quizAnswer"
            onChange={this.props.onAnswerChange} />
          <br /><br />

          <button className="submit" onClick={this.props.onSubmit}>Submit</button>
          <button className="button" onClick={this.props.onSkip}>Skip</button>
        </div>
      </div>
    );
  }

}

export default QuizState;
