import React from 'react';
import './App.css';
import Quiz from '../quiz/Quiz';
import Nav from '../nav/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/quiz' component={Quiz}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home=()=>(
  <div>
      <h1>Home Page</h1>
  </div>
)

export default App;
