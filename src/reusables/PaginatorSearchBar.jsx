import React, { useContext } from 'react';
import PaginatorControlContext from './PaginatorControlContext.jsx';

export default function PaginatorSearchBar() {
  let { state: { searchQuery }, dispatch } = useContext(PaginatorControlContext);

  function handleSearchChange(event) {
    dispatch({ type: 'query', val: event.target.value });
  }

  return <input type="text" placeholder="Search" value={searchQuery || ''}
    onChange={handleSearchChange}/>;
}
