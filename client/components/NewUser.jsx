import React from 'react';
import { withRouter } from 'react-router-dom';

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
  async handleSubmit(event) {
    event.preventDefault();
    //communicate with server
    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        //redirect to Main
        this.props.history.replace('/main');
      }
    } catch (error) {
      console.log('Error in handleSubmit of NewUser:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Create New User</h1>
        <div>Welcome! Please choose a username and password to begin!</div>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(NewUser);
