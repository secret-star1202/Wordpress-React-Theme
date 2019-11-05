import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer } from '../includes';
import { default as Landing } from '../home/Landing';
import { GeneralContextProvider } from '../contexts/GeneralContext';
import { PlayingContextProvider } from '../contexts/PlayingContext';
import { default as routes } from './routes';

let WrappedComponent = function ({ component: Component, ...rest }) {
    return <GeneralContextProvider initialVals={rest}>
    <Component />
  </GeneralContextProvider>;
  }, SeamlessRoute = ({ component, ...rest }) => (
    <Route exact {...rest} component={props => (
      <WrappedComponent {...props} {...{ component }} />)} />);

export default () => <PlayingContextProvider>
  <div className='container'>
    <Switch>
      <SeamlessRoute exact path="/" component={Landing} /></Switch>
    <Switch>
      <Route path="*" component={props => (
        <WrappedComponent {...props} component={Header} />)} />
    </Switch>
    <div id="main">
      <Switch>{routes.map(route => <SeamlessRoute {...route} />)}</Switch>
    </div>
  </div>
  <Footer />
  </PlayingContextProvider>;
