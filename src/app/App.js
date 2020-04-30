import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactiveNav from '../nav/ReactiveNav';
import Quiz from '../quiz/Quiz';
import Video from '../video/Video';

const App = () => {
  return (
    <div className="App">
      <Router>
        <ReactiveNav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/videos' component={Video}/>
          <Route path='/quiz/quiz' component={Quiz}/>
        </Switch>
      </Router>
    </div>
  );
}

const Home=()=>(
  <div>
      <h1>Home Page</h1>
  </div>
)

export default App;
