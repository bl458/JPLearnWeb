import React, { Component } from 'react'
import {OAuth2Client} from 'google-auth-library'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const CLIENT_ID = '153651118145-gp8r1v7josbjmcr60rpjeupu1pdo2rmh.apps.googleusercontent.com';

class GoogleBtn extends Component {
  state = {
    isLogined: false,
    id: '',
    email: '',
    username: ''
  }

  async verify(response) {
    try {
      const client = new OAuth2Client(CLIENT_ID)
      const ticket= await client.verifyIdToken({
        idToken: response.tokenObj.id_token,
        audience: CLIENT_ID
      })
      const payload = ticket.getPayload()
      return payload
    } catch(error) {
      alert('Cannot authenticate login')
    }
  }

  login = (response) => {
    console.log('Entered login')

    this.verify(response)
    .then(payload => fetch(`http://localhost:4000/register?googleId=${payload['sub']}&name=${payload['name']}&email=${payload['email']}`))
    .then(this.setState({
      isLogined: true,
      id: response.profileObj.id,
      email: response.profileObj.email,
      username: response.profileObj.name
    }))
    .catch(err => console.error(err))

    console.log('Email: ', this.state.email, '\nName: ', this.state.username)
  }

  logout = (response) => {
    console.log('Entered logout')
    this.setState(state => ({
      isLogined: false,
      id: '',
      email: '',
      username: ''
    }));
    console.log('Email: ', this.state.email, '\nName: ', this.state.username)
  }

  handleLoginFailure = (response) => {
    // alert('Failed to log in')
  }

  handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        />
        :
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Login'
          isSignedIn={true}
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          responseType='code token'
          prompt='consent'
        />
      }

    </div>
    )
  }
}

export default GoogleBtn;
