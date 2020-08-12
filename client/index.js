import React from 'react';
import { render } from 'react-dom';
import Auth from './components/Auth.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/App.jsx';

render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root'),
);
