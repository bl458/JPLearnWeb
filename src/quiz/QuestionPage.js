import React, {Component} from 'react';

class QuestionPage extends Component {
  render() {return(
    <div>
      <input
        className="answer-input"
        type="text"
        autoFocus="autofocus"
        value={this.props.answer}
        name="quizAnswer"
        onChange={this.props.onAnswerChange}
        onKeyPress={this.props.onEnterPress.bind(this.props,this.props.onSubmit)}/>
      <br /><br />

      <button className="submitBtn" onClick={this.props.onSubmit}>Submit</button>
      <button className="submitBtn" onClick={this.props.onSkip}>Skip</button>
    </div>);
  }
}

export default QuestionPage;
