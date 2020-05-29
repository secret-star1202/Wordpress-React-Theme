import React from 'react';
import { render } from 'react-dom';
import TheBrowserRouter from './the_router/TheBrowserRouter';
import App from './application/App';

let basename = '', m = document.querySelector('link[rel="basename"]')
  .href.match(/[^:/]\/{1,1}[a-z]+/);
if (m) basename = m[0].substring(1);

render(<TheBrowserRouter basename={basename}>
  <App /></TheBrowserRouter>, document.getElementById('react-root'));
