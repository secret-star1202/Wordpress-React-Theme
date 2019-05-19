import React from 'react';
import { hydrate } from 'react-dom';
import App from './application/App.jsx';

hydrate(<App />, document.getElementById('react-root'));
