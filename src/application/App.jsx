import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../includes/Header.jsx';
import Footer from '../includes/Footer.jsx';
import Home from "../home/Home.jsx";
import About from '../static_pages/About.jsx';
import Alumni from '../static_pages/Alumni.jsx';
import Contact from '../static_pages/Contact.jsx';
import FAQ from '../static_pages/FAQ.jsx';
import Join from '../static_pages/Join.jsx';
import Timeline from '../static_pages/Timeline';
import Underwriting from '../static_pages/Underwriting.jsx';

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
            <Route exact="/about-us" component={About}/>
            <Route exact="/alumni" component={Alumni}/>
            <Route exact="/contact-us" component={Contact}/>
            <Route exact="/faq" component={FAQ}/>
            <Route exact="/join-ktuh" component={Join}/>
            <Route exact="/timeline" component={Timeline}/>
            <Route exact="/underwriting" component={Underwriting}/>
          </Switch>
        </div>
      </div>
    <Footer />
    </BrowserRouter>;
  }
}

export default App;
