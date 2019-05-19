import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from '../includes/Header.jsx';
import Footer from '../includes/Footer.jsx';

class App extends Component {
  render() {
    return <BrowserRouter>
      <div className='container'>
        <Header />	
        <div id="main">

        </div>
      </div>
    <Footer />
    </BrowserRouter>;
  }
}

export default App;
