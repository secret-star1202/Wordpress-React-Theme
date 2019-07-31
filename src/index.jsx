import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { default as siteInfo } from './utils/config';
import App from './application/App.jsx';

render(<BrowserRouter basename={siteInfo.siteUrl.match(/\/[a-z-]*\/?$/)[0]}>
  <App /></BrowserRouter>, document.getElementById('react-root'));
