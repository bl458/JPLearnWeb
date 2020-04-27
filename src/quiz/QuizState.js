import React, {Component} from 'react';
import QuestionPage from './QuestionPage';
import AnswerPage from './AnswerPage';

class QuizState extends Component {
  render() {
    return (
      <div className="quiz-board">
        <div className="quiz-inner">
          Question {this.props.numberq-this.props.qBank.length+1} of {this.props.numberq} ( {this.props.deck} )
          <br /><br /><br />

          Type the Hiragana reading!
          <br /><br />

          {this.props.qBank[0].Kanji}
          <br /><br />

          {this.props.questionPage===0&&
            <QuestionPage
              answer={this.props.answer}
              onAnswerChange={this.props.onAnswerChange}
              onEnterPress={this.props.onEnterPress}
              onSubmit={this.props.onSubmit}
              onSkip={this.props.onSkip}
            />
          }

          {this.props.questionPage===1&&
            <AnswerPage
              qBank={this.props.qBank}
              onNext={this.props.onNext}
            />
          }
        </div>
      </div>
    );
  }
}

export default QuizState;
