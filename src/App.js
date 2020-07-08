/* eslint-disable */
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/Website/app';

class App extends Component {
  render() {
    return (
      <Router>

        <Route exact path="/" component={HomePage} />
        {/* <HomePage /> */}

      </Router>
    );
  }
}

export default App;
