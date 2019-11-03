import React from 'react';
import { PaginatorControlProvider } from './PaginatorControlContext.jsx';
import PaginatorTop from './PaginatorTop.jsx';

export default function Paginator(props) {
  return <PaginatorControlProvider initialVals={{ ...props }}>
    <PaginatorTop />
  </PaginatorControlProvider>;
}
