import React from 'react';
import { PaginatorControlProvider } from './PaginatorControlContext';
import PaginatorTop from './PaginatorTop';

export default function Paginator(props) {
  return <PaginatorControlProvider initialVals={{ ...props }}>
    <PaginatorTop />
  </PaginatorControlProvider>;
}
