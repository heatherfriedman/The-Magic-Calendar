import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { username: '', password: '' };
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status !== 200) {
        alert('Please try again or create new user.');
      }
      if (response.status === 200) {
        this.props.onLoginChange(true);
        this.props.history.replace('/main');
      }
    } catch (error) {
      console.log('Error in handleSubmit of Login:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div>Welcome back!</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            Username:
            <input
              value={this.state.username}
              type="text"
              name="username"
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            Password:
            <input
              name="password"
              value={this.state.password}
              type="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
