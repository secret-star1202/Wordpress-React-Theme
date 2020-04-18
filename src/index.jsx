import React from 'react';
import { render } from 'react-dom';
import TheBrowserRouter from './the_router/TheBrowserRouter';
import { default as siteInfo } from './utils/config';
import App from './application/App';

let basename = "";

render(<TheBrowserRouter basename={basename}>
  <App /></TheBrowserRouter>, document.getElementById('react-root'));
