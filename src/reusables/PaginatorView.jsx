import React, { useContext } from 'react';
import PaginatorControlContext from './PaginatorControlContext.jsx';
import PaginatorDisplay from './PaginatorDisplay.jsx';
import PaginatorControls from './PaginatorControls.jsx';

export default function PaginatorView() {
  let { state: { className, id } } = useContext(PaginatorControlContext),
    DisplayComponent = PaginatorDisplay;

  return <div {...{ className, id }}>
    <DisplayComponent />
    <PaginatorControls />
  </div>;
}
