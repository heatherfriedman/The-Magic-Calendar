import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';
import NewUser from './components/NewUser.jsx';
import Login from './components/Login.jsx';
import Main from './components/Main.jsx';

// const usersController = require('../server/controllers/usersController.js');

class App extends React.Component {
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
      <div>
        <h1>The Magic Calendar</h1>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/signup">
          <button>Create New User</button>
        </Link>

        <div>
          <Switch>
            <Route path="/signup" component={NewUser} />
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
