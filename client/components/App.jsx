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
import Auth from './Auth.jsx';
import Main from './Main.jsx';
import NewEntry from './NewEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginChange(isLoggedIn) {
    this.setState({ ...this.state, isLoggedIn });
  }

  render() {
    return (
      <div>
        <div>
          <h1>The Magic Calendar</h1>
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
          <Route path="/auth" component={Auth} />
          <Route path="/signup" component={NewUser} />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} onLoginChange={this.handleLoginChange} />
            )}
          />
          <Route path="/main" component={Main} />
          <Route path="/new" component={NewEntry} />
        </Switch>
      </div>
    );
  }
}

//render={(props) => <Login {...props} />

export default App;
