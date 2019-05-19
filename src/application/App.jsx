import React, { Component } from 'react';
import Header from '../includes/Header.jsx';

class App extends Component {
  render() {
    return [
      <Header />,	
      <div id="main"></div>
    ]
  }
}

export default App;
