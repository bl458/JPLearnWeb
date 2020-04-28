import React from 'react';
import './App.css';
import Quiz from '../quiz/Quiz';
import ReactiveNav from '../nav/ReactiveNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <ReactiveNav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
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
