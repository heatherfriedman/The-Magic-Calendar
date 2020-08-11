import React from 'react';
// const usersController = require('../server/controllers/usersController.js');

class NewUser extends React.Component {
  handleLogin() {}
  handleNewUser() {}

  render() {
    return (
      <div>
        <h1>The Magic Calendar</h1>
        <button>Login</button>
        {/* WHAT GOES INTO ON CLICK? */}
        <button onClick={() => {}}>Create New User</button>
      </div>
    );
  }
}

export default NewUser;
