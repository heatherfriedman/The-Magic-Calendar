import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/createuser">
        <NewUser />
      </Route>
    </div>
  </Router>,
);
