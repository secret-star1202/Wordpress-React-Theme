import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../includes/Header.jsx';
import Footer from '../includes/Footer.jsx';
import Home from "../home/Home.jsx";
import Landing from '../home/Landing.jsx';
import About from '../static_pages/About.jsx';
import Alumni from '../static_pages/Alumni.jsx';
import Contact from '../static_pages/Contact.jsx';
import FAQ from '../static_pages/FAQ.jsx';
import Join from '../static_pages/Join.jsx';
import Timeline from '../static_pages/Timeline.jsx';
import Underwriting from '../static_pages/Underwriting.jsx';
import { default as siteInfo } from '../utils/config';

class App extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    return <BrowserRouter>
      <div className='container'>
        {new RegExp('^' + siteInfo.siteUrl + '/?$').test(window.location.href) &&
        [<Landing key='landing' />,
          <div className='spacer-lg' key='lg'/>] ||
        <div className='spacer-sm' key='sm' />}
        <Header />
        <div id="main">
          <Switch>
            <Route exact path="/about-us" component={About}/>
            <Route exact path="/alumni" component={Alumni}/>
            <Route exact path="/contact-us" component={Contact}/>
            <Route exact path="/faq" component={FAQ}/>
            <Route exact path="/join-ktuh" component={Join}/>
            <Route exact path="/timeline" component={Timeline}/>
            <Route exact path="/underwriting" component={Underwriting}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </div>
    <Footer />
    </BrowserRouter>;
  }
}

export default App;
