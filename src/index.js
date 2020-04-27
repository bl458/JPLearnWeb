import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import N1 from './assets/preMadeDecks/N1';
import QuizStart from './components/QuizStart';
import QuizState from './components/QuizState';
import QuizResult from './components/QuizResult';

class Quiz extends Component {
  state={
    playing: 0, //Start page: 0, In-game: 1, Results page: 2
    deck: '',
    numberq: 1, //Total number of questions in the quiz (min 1, max 10)
    score: 0,
    qBank: [],
    answer: ''
  };

  /*Functions*/
  getQuestions = () => {
    N1().then(
      question => this.setState({qBank: question})
    )
  };

  onNumberqChange = (newNumberq) =>
    this.setState({numberq: newNumberq.target.value>0&&newNumberq.target.value<10
      ? newNumberq.target.value : 10});

  onStart = () => {
    this.setState({
      qBank: this.state.qBank.slice(0,this.state.numberq),
      score: 0,
      playing: this.state.playing===0 ? 1 : 0
    });
    console.log("Finished onStart. numberq: " +this.state.numberq +" qBank: " +this.state.qBank);
  };

  onAgain = () => {
    this.setState({
      score: 0,
      playing: this.state.playing===0 ? 1 : 0
    });
    console.log("Finished onAgain. numberq: " +this.state.numberq +" qBank: " +this.state.qBank);
  };

  onDeckChange = (newDeck) => this.setState({deck: newDeck.target.value});

  onAnswerChange = (newAnswer) => this.setState({answer: newAnswer.target.value});

  onSubmit = (e) => {
    console.log("Started onSubmit. qBank: " +this.state.qBank);
    e.preventDefault();
    // Update score and resets the answer <input>
    this.setState({
      score:
        this.state.qBank[0].hiragana===this.state.answer ?
        this.state.score+1 : this.state.score,
      answer: ''
      });

    // Update question
    var qBank_cp=this.state.qBank;
    qBank_cp.splice(0,1);
    this.setState({qBank: qBank_cp});

    // If user answered all, quit quiz
    if (this.state.qBank.length===0) {
      this.setState({playing: 2});
      this.getQuestions();
    }
    this.setState({answer: ''});
    console.log("Finished onSubmit. numberq: " +this.state.numberq +" qBank: " +this.state.qBank);
  };

  onSkip = () => {
    // Update question
    var qBank_cp=this.state.qBank;
    qBank_cp.splice(0,1);
    this.setState({qBank: qBank_cp});

    // If user answered all, quit quiz
    if (this.state.qBank.length===0) {
      this.setState({playing: 2});
      this.getQuestions();
    }
  }

  /*Actual rendering from here*/
  componentDidMount() {
    this.getQuestions();
  };

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
            onSubmit={this.onSubmit}
            onSkip={this.onSkip}
            onAnswerChange={this.onAnswerChange}
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


ReactDOM.render(
  <Quiz />,
  document.getElementById('root')
);
