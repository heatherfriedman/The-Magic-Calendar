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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
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
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
