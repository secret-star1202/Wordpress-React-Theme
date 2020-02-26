import React from 'react';
import TheRoute from '../the_router/TheRoute';
import TheSwitch from '../the_router/TheSwitch';
import { Header, Footer } from '../includes';
import { default as Landing } from '../home/Landing';
import { default as NotificationBanner } from '../home/NotificationBanner';
import { GeneralContextProvider } from '../contexts/GeneralContext';
import { PlayingContextProvider } from '../contexts/PlayingContext';
import { default as routes } from './routes';

let WrappedComponent = function ({ component: Component, ...rest }) {
    return <GeneralContextProvider {...rest}>
    <Component />
  </GeneralContextProvider>;
  }, SeamlessRoute = ({ component, ...theRest }) => (
    <TheRoute exact {...theRest} component={(props) => (
      <WrappedComponent {...props} {...{ component }} />)
    } />);

export default () => <PlayingContextProvider>
  <TheSwitch>
    <SeamlessRoute exact path="/" component={NotificationBanner} />
  </TheSwitch>
  <div className='container'>
    <TheSwitch>
      <SeamlessRoute exact path="/" component={Landing} />
    </TheSwitch>
    <TheSwitch>
      <TheRoute path="*" component={(props) => (
        <WrappedComponent {...props} component={Header} />)} />
    </TheSwitch>
    <div id="main">
      <TheSwitch>{routes.map((route) => <SeamlessRoute {...route} />)}</TheSwitch>
    </div>
  </div>
  <Footer />
  </PlayingContextProvider>;
