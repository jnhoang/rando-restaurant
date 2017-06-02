import React, {Component} from 'react';

import Cuisine from './Cuisine';

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
        <Cuisine />
      </div>
    );
  }
}

export default Home;