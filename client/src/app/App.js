import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ReactiveNav from '../nav/ReactiveNav'
import Quiz from '../quiz/Quiz'
import Video from '../video/Video'
import Progress from '../progress/Progress'

class App extends Component {
  state = {
    id: '',
    email: '',
    name: '',
  }

  handleLogInOutApp = (id, email, name, quizPlaying) => {
    this.setState({
      id: id,
      email: email,
      name: name,
    })
    if (window.location.pathname==='/quiz/quiz') {
      this.quiz.changePlaying(quizPlaying)
    }
    console.log('In App.js: Id: ', this.state.id, 'Email: ', this.state.email, '\nName: ', this.state.name)
  }

  displayDeckName = (deck) => {
    if (deck==='review') {
      return 'Review'
    }
    else if (deck==='video_vocab') {
      return 'Video'
    }
    return deck
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ReactiveNav onLogInOutNav={this.handleLogInOutApp}/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/home' exact component={Home}/>
            <Route path='/videos' render={() =>
              <Video
                id={this.state.id}
                email={this.state.email}
                name={this.state.name}
              />}
            />
            <Route path='/quiz/quiz' render={() =>
              <Quiz
                ref={(qz) => this.quiz = qz}
                id={this.state.id}
                email={this.state.email}
                name={this.state.name}
                displayDeckName={this.displayDeckName}
              />}
            />
            <Route path='/quiz/deck_progress' render={() =>
              <Progress
                id={this.state.id}
                email={this.state.email}
                name={this.state.name}
                displayDeckName={this.displayDeckName}
              />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
const Home = () => <div></div>

export default App
