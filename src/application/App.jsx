import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../includes/Header.jsx';
import Footer from '../includes/Footer.jsx';
import Landing from '../home/Landing.jsx';
import { GeneralContextProvider } from '../contexts/GeneralContext';
import { default as routes } from './routes';

let WrappedComponent = function ({ component: Component, ...rest }) {
  return <GeneralContextProvider initialVals={rest}>
    <Component />
  </GeneralContextProvider>;
};

let SeamlessRoute = ({ component, ...rest }) => (
    <Route exact {...rest} component={props => (
      <WrappedComponent {...props} {...{ component }} />)} />
);

const App = () => ([<div className='container'><Switch>
    <SeamlessRoute exact path="/" component={() => [<Landing />,
    <div className='spacer-lg' />]} /></Switch>
  <Switch>
    <Route path="*" component={props => (
      <WrappedComponent {...props} component={Header} />)} />
  </Switch>
  <div id="main">
    <Switch>{routes.map(route => <SeamlessRoute {...route} />)}</Switch>
  </div>
</div>,
<Footer />]);

export default App;
