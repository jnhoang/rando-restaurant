import React, { Component } from 'react';
import {
  BrowserRouter as Router
, Route
, Link 
} from 'react-router-dom';

import Home from './components/Home';
import './App.css';
import config from 'dotenv';

class App extends Component {
  render() {
    var test = process.env.REACT_APP_TOKEN;
    console.log(test);
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router> 
    );
  }
}

export default App;