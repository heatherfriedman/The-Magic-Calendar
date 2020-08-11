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

// const usersController = require('../server/controllers/usersController.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      newUser: false,
    };
  }
  handleLogin() {
    this.setState({ newUser: false });
  }
  handleNewUser() {
    this.setState({ newUser: true });
  }

  render() {
    const newUser = this.state.newUser;
    return (
      <div>
        <h1>The Magic Calendar</h1>
        <Link to="/login">Login</Link>
        {/* WHAT GOES INTO ON CLICK? */}
        <button onClick={this.handleNewUser}>Create New User</button>

        <div>
          <Router>
            <Switch>
              <Router exact path="/" component={App} />
              <Router exact path="/signup" component={NewUser} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
