import React, {Component} from 'react';
import './Quiz.css'
import N1 from '../_assets/preMadeDecks/N1';
import N2 from '../_assets/preMadeDecks/N2';
import QuizStart from './QuizStart';
import QuizState from './QuizState';
import QuizResult from './QuizResult';

class Quiz extends Component {
  state={
    playing: 0, //Start page: 0, In-game: 1, Results page: 2
    deck: 'N1',
    numberq: 1, //Total number of questions in the quiz (min 1, max 10)
    score: 0,
    qBank: [{kanji:"",hiragana:"",english:""}],
    answer: '',
    questionPage: 0 //Question Page: 0, Answer page: 1
  };

  /*Functions*/
  getQuestions = () => {
    if (this.state.deck==='N1') {
      N1().then(
        question => this.setState({qBank: question.slice(0,this.state.numberq)})
      )
    }
    else if (this.state.deck==='N2') {
      N2().then(
        question => this.setState({qBank: question.slice(0,this.state.numberq)})
      )
    }
  };

  onNumberqChange = (newNumberq) =>
    this.setState({numberq: newNumberq.target.value>0&&newNumberq.target.value<10
      ? newNumberq.target.value : 10});

  onDeckChange = (newDeck) => this.setState({deck: newDeck.target.value});

  onAnswerChange = (newAnswer) => this.setState({answer: newAnswer.target.value});

  onStart = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      playing: this.state.playing===0 ? 1 : 0
    });
    console.log("Finished onStart. numberq: " +this.state.numberq +" qBank: " +this.state.qBank.length);
  };

  onAgain = () => {
    this.setState({
      qBank: [{kanji:"",hiragana:"",english:""}],
      score: 0,
      playing: this.state.playing===0 ? 1 : 0
    });
    console.log("Finished onAgain. numberq: " +this.state.numberq +" qBank: " +this.state.qBank.length);
  };

  onSkip = () => {
    // Updates question, Resets answer-input value
    var qBank_cp=this.state.qBank;
    qBank_cp.splice(0,1);
    this.setState({
      qBank: qBank_cp,
      answer: ''
    });

    // If user answered all, quit quiz
    if (this.state.qBank.length===0) {
      this.setState({playing: 2});
    }
  };

  onSubmit = () => {
    console.log("Started onSubmit. qBank: " +this.state.qBank.length);
    // Updates score
    this.setState({
      score:
        this.state.qBank[0].Hiragana===this.state.answer.trim() ?
        this.state.score+1 : this.state.score
      });

    this.onSkip();

    console.log("Finished onSubmit. numberq: " +this.state.numberq +" qBank: " +this.state.qBank.length);
  };

  onEnterPress = (e) => {
    var code=e.keyCode || e.which;
    if (code===13) {
      this.onSubmit();
    }
  };

  /*Actual rendering from here*/
  render() {
    return (
      <div className="container">
        <div className="title">Quiz</div>
        {this.state.playing===0&&
        <QuizStart
          numberq={this.state.numberq}
          onNumberqChange={this.onNumberqChange}
          deck={this.state.deck}
          onDeckChange={this.onDeckChange}
          onStart={this.onStart}
        />
        }
        {this.state.playing===1&&
          <QuizState
            qBank={this.state.qBank}
            numberq={this.state.numberq}
            deck={this.state.deck}
            answer={this.state.answer}
            questionPage={this.state.questionPage}
            onSubmit={this.onSubmit}
            onSkip={this.onSkip}
            onAnswerChange={this.onAnswerChange}
            onEnterPress={this.onEnterPress}
          />
        }
        {this.state.playing===2&&
          <QuizResult
            score={this.state.score}
            numberq={this.state.numberq}
            playAgain={this.onAgain}
          />
        }
      </div>
    );
  }
};

export default Quiz;
