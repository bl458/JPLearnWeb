import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactiveNav from '../nav/ReactiveNav';
import Quiz from '../quiz/Quiz';
import Video from '../video/Video';

class App extends Component {
  state = {
    id: '',
    email: '',
    name: ''
  }

  handleSignInApp = (id, email, name) => {
    this.setState({
      id: id,
      email: email,
      name: name
    })
    console.log('In App.js: Id: ', this.state.id, 'Email: ', this.state.email, '\nName: ', this.state.name)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ReactiveNav onSignInNav={this.handleSignInApp}/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/home' exact component={Home}/>
            <Route path='/videos' render={() => <Video id={this.state.id} email={this.state.email} name={this.state.name}/>}/>
            <Route path='/quiz/quiz' render={() => <Quiz id={this.state.id} email={this.state.email} name={this.state.name}/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

const Home=()=>(
  <div>
      <h1>Home Page</h1>
  </div>
)

export default App;
