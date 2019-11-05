import React, { useEffect, useContext } from 'react';
import { default as PaginatorControlContext } from './PaginatorControlContext';
import { getApiRequest } from '../utils/url_utils';

export default function PaginatorDisplay() {
  let {
    state: {
      wrapper: Container, currentPage, data, perPage, query,
      searchMaxPages, maxPagesUrl
    }, dispatch
  } = useContext(PaginatorControlContext);

  useEffect(function () {
    getApiRequest(query.length ? searchMaxPages(query) : maxPagesUrl, (val) => {
      dispatch({
        type: 'maxPages',
        val: Math.ceil(val / perPage)
      });
    });
  }, [query]);

  return data[currentPage]
    ? data[currentPage].map(item => <Container {...{ item }} />) : <p>Loading...</p>;
}
