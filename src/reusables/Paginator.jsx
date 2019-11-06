import React from 'react';
import { PaginatorControlProvider } from './PaginatorControlContext';
import { default as PaginatorTop } from './PaginatorTop';

export default function (props) {
  return <PaginatorControlProvider initialVals={{ ...props }}>
    <PaginatorTop />
  </PaginatorControlProvider>;
}
