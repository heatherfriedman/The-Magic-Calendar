import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <div>Welcome back!</div>
        <div>
          Username: <input type="text"></input>
        </div>
        <div>
          Password: <input type="password"></input>
        </div>
        <Link to="/main">
          <button>Sign in</button>
        </Link>
      </div>
    );
  }
}

export default Login;
