import React, { useContext } from 'react';
import { default as PaginatorControlContext } from './PaginatorControlContext';
import { default as useApiRequest } from '../hooks/useApiRequest';

export default function PaginatorDisplay() {
  let {
    state: {
      wrapper: Container, currentPage, data, perPage, query,
      searchMaxPages, maxPagesUrl
    }, dispatch
  } = useContext(PaginatorControlContext);

  useApiRequest(null, query.length ? searchMaxPages(query) : maxPagesUrl, (val) => {
    dispatch({
      type: 'maxPages',
      val: Math.ceil(val / perPage)
    });
  }, null, [query]);

  return data[currentPage]
    ? data[currentPage].map(item => <Container {...{ item }} />) : <p>Loading...</p>;
}
