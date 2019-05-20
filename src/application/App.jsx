import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../includes/Header.jsx';
import Footer from '../includes/Footer.jsx';
import Home from "../home/Home.jsx";

class App extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    return <BrowserRouter>
      <div className='container'>
        <Header />	
        <div id="main">
          <Switch>
            <Route exact="/" component={Home}/>
          </Switch>
        </div>
      </div>
    <Footer />
    </BrowserRouter>;
  }
}

export default App;
