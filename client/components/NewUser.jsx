import React from 'react';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: '', password: '' };
  }
  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    //communicate with server
    event.preventDefault();
    return fetch('http://localhost:8080/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Create New User</h1>
        <form onSubmit={this.handleSubmit}>
          <div>Welcome! Please choose a username and password to begin!</div>
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
            Password:{' '}
            <input
              name="password"
              value={this.state.password}
              type="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewUser;
