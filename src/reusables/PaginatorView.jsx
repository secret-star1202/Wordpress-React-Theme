import React, { useContext } from 'react';
import { default as PaginatorControlContext } from './PaginatorControlContext';
import { default as PaginatorDisplay } from './PaginatorDisplay';
import { default as PaginatorControls } from './PaginatorControls';

export default function PaginatorView() {
  let { state: { className, id } } = useContext(PaginatorControlContext),
    DisplayComponent = PaginatorDisplay;

  return <div {...{ className, id }}>
    <DisplayComponent />
    <PaginatorControls />
  </div>;
}
