import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';
import NewUser from './NewUser.jsx';
import Login from './Login.jsx';
import Main from './App.jsx';

// const usersController = require('../server/controllers/usersController.js');

class Auth extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.handleNewUser = this.handleNewUser.bind(this);
  //     this.handleLogin = this.handleLogin.bind(this);
  //     this.state = {
  //       newUser: false,
  //     };
  //   }
  //   handleLogin() {
  //     this.setState({ newUser: false });
  //   }
  //   handleNewUser() {
  //     this.setState({ newUser: true });
  //   }

  render() {
    // const newUser = this.state.newUser;
    return (
      <div className="spacing-middle">
        <Link to="/login">
          <button className="buttons">Login</button>
        </Link>
        <Link to="/signup">
          <button className="buttons">Create New User</button>
        </Link>
      </div>
    );
  }
}

export default Auth;
