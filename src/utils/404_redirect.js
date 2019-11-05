import React from 'react';
import { Redirect } from 'react-router-dom';

export default function ({ check }) {
  return (check === null) ? <Redirect to='/not-found' /> : null;
}
