import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

// const style={color: "white"};

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/quiz" className="nav-link">
            <li>Quiz</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
