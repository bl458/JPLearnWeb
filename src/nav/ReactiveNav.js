import React, {Component} from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import GoogleBtn from './GoogleBtn'

class ReactiveNav extends Component {
  state = {
    id: '',
    email: '',
    name: ''
  }

  handleSignInNav = (id, email, name) => {
    this.setState({
      id: id,
      email: email,
      name: name
    })
    this.props.onSignInNav(id, email, name)
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
          <GoogleBtn onSignIn={this.handleSignInNav}/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default ReactiveNav;
