import React, {Component} from 'react';
import './Quiz.css'
import N1 from '../assets/preMadeDecks/N1';
import N2 from '../assets/preMadeDecks/N2';
import QuizStart from './QuizStart';
import QuizState from './QuizState';
import QuizResult from './QuizResult';

class Quiz extends Component {
  state={
    playing: 0, //Start page: 0, In-game: 1, Results page: 2
    deck: 'N1',
    numberq: 1, //Total number of questions in the quiz (min 1, max 10)
    score: 0,
    qBank: [{kanji:"",hiragana:"",english:""}], // question bank for each game
    rQBank: [{kanji:"",hiragana:"",english:""}], // review question bank
    cRQBank: [{kanji:"",hiragana:"",english:""}],
    answer: '',
    questionPage: 0, //Question Page: 0, Answer page: 1
    firstReview: 1 //Review mode for the first time or naw
  };

  changePlaying = (quizPlaying) => {
    console.log('Entered changePlaying in Quiz.js')
    this.setState({
      playing: quizPlaying
    })
  }

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
      playing: this.state.playing===0 ? 1 : 0,
      questionPage: 0
    });
    console.log("Finished onStart. numberq: " +this.state.numberq +" qBank: " +this.state.qBank.length);
    // console.log('Quiz id: ', this.props.id)
  };

  onAgain = () => {
    this.setState({
      qBank: [{kanji:"",hiragana:"",english:""}],
      rQBank: [{kanji:"",hiragana:"",english:""}],
      cRQBank: [{kanji:"",hiragana:"",english:""}],
      score: 0,
      playing: this.state.playing===0 ? 1 : 0,
      firstReview: 1,
    });
    console.log("Finished onAgain. numberq: " +this.state.numberq +" qBank: " +this.state.qBank.length);
  };

  onReview = () => {
    this.state.rQBank.splice(0,1)
    this.setState({
      numberq: this.state.firstReview===1 ? this.state.rQBank.length : this.state.cRQBank.length,
      cRQBank: this.state.firstReview===1 ? JSON.parse(JSON.stringify(this.state.rQBank)) : JSON.parse(JSON.stringify(this.state.cRQBank)),
      qBank: this.state.firstReview===1 ? JSON.parse(JSON.stringify(this.state.rQBank)) : JSON.parse(JSON.stringify(this.state.cRQBank)),
      score: 0,
      playing: 1,
      firstReview: 0,
      rQBank: [{kanji:"",hiragana:"",english:""}]
    })
    console.log(this.state.cRQBank)
  }

  onSubmit = () => {
    console.log("Started onSubmit. qBank: " +this.state.qBank.length)
    console.log(this.state.qBank[0].Hiragana===this.state.answer.trim())
    // Updates score, shows answer
    this.setState({
      score: this.state.qBank[0].Hiragana===this.state.answer.trim() ?
        this.state.score+1 : this.state.score,
      questionPage: 1,
      rQBank: this.state.qBank[0].Hiragana===this.state.answer.trim() ?
        this.state.rQBank : [...this.state.rQBank, this.state.qBank[0]]
    })

    // Add wrong answer to review deck in db
    if (this.state.qBank[0].Hiragana!==this.state.answer.trim()) {
      fetch(`http://localhost:4000/review?googleId=${this.props.id}&deck=${this.state.deck}&word=${this.state.qBank[0].Kanji}&furi=${this.state.qBank[0].Hiragana}&meaning=${this.state.qBank[0].English}`)
    }

    // Add to deck progress in db
    fetch(`http://localhost:4000/progress?googleId=${this.props.id}&deck=${this.state.deck}&word=${this.state.qBank[0].Kanji}`)

    console.log("Finished onSubmit. numberq: " +this.state.numberq +" qBank: " +this.state.qBank.length +" rQBank: " +this.state.rQBank.length);
    console.log(this.state.rQBank)
    console.log(this.state.cRQBank)
  }

  onSkip = () => {
    // Shows answer
    this.setState({
      questionPage: 1,
      rQBank: [...this.state.rQBank, this.state.qBank[0]]
    })
    fetch(`http://localhost:4000/review?googleId=${this.props.id}&deck=${this.state.deck}&word=${this.state.qBank[0].Kanji}&furi=${this.state.qBank[0].Hiragana}&meaning=${this.state.qBank[0].English}`)
    fetch(`http://localhost:4000/progress?googleId=${this.props.id}&deck=${this.state.deck}&word=${this.state.qBank[0].Kanji}`)
  }

  onEnterPress = (func,e) => {
    var code=e.keyCode || e.which;
    if (code===13) {
      func();
    }
  };

  onNext = () => {
    // Updates question, resets answer-input value
    var qBank_cp=this.state.qBank;
    qBank_cp.splice(0,1);
    this.setState({
      qBank: qBank_cp,
      answer: ''
    });

    // Back to question
    this.setState({
      questionPage: 0
    });

    // If user answered all, quit quiz
    if (this.state.qBank.length===0) {
      this.setState({playing: 2});
    }
  }

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
            onNext={this.onNext}
          />
        }
        {this.state.playing===2&&
          <QuizResult
            score={this.state.score}
            numberq={this.state.numberq}
            playAgain={this.onAgain}
            review={this.onReview}
            firstReview={this.state.firstReview}
          />
        }
      </div>
    );
  }
};

export default Quiz;
