import React from 'react';
import TheRoute from '../the_router/TheRoute';
import TheSwitch from '../the_router/TheSwitch';
import { Header, Footer } from '../includes';
import { default as Landing } from '../home/Landing';
import { default as NotificationBanner } from '../home/NotificationBanner';
import { PlayingContextProvider } from '../contexts/PlayingContext';
import { default as routes } from './routes';

let SeamlessRoute = ({ component: Component, ...theRest }) => (
    <TheRoute exact {...theRest} component={Component} />);

export default () => <PlayingContextProvider>
  <TheSwitch>
    <SeamlessRoute exact path="/" component={NotificationBanner} />
  </TheSwitch>
  <div className='container'>
    <TheSwitch>
      <SeamlessRoute exact path="/" component={Landing} />
    </TheSwitch>
    <TheSwitch>
      <TheRoute path="*" component={Header} />
    </TheSwitch>
    <div id="main">
      <TheSwitch>{routes.map((route) => <SeamlessRoute {...route} />)}</TheSwitch>
    </div>
  </div>
  <Footer />
  </PlayingContextProvider>;
