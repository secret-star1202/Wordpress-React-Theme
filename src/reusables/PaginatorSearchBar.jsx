import React, { useContext } from 'react';
import { default as PaginatorControlContext } from './PaginatorControlContext';

export default function PaginatorSearchBar() {
  let { state: { query }, dispatch } = useContext(PaginatorControlContext);

  function handleSearchChange(event) {
    dispatch({ type: 'query', val: event.target.value });
  }

  return <input type="text" placeholder="Search" value={query || ''}
    onChange={handleSearchChange}/>;
}
