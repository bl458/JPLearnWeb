import React, {Component} from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import GoogleBtn from './GoogleBtn'

class ReactiveNav extends Component {

  handleLogInOutNav = (id, email, name, quizPlaying) => {
    this.props.onLogInOutNav(id, email, name, quizPlaying)
  }

  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">JapaneseLearning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/videos">Videos</Nav.Link>
            <NavDropdown title="Quiz" id="basic-nav-dropdown">
              <NavDropdown.Item href="/quiz/deck_constructor">Deck Constructor</NavDropdown.Item>
              <NavDropdown.Item href="/quiz/deck_progress">Deck Progress</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/quiz/quiz">Quiz
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <GoogleBtn onLogInOut={this.handleLogInOutNav}/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default ReactiveNav;
