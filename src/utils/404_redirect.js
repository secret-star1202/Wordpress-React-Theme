import React from 'react';
import TheRedirect from '../the_router/TheRedirect';

export default function ({ check }) {
  return (check === null) ? <TheRedirect to='/not-found' /> : null;
}
