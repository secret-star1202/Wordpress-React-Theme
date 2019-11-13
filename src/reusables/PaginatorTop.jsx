import React, { useContext } from 'react';
import { default as PaginatorControlContext } from './PaginatorControlContext';
import { default as PaginatorView } from './PaginatorView';
import { default as PaginatorSearchBar } from './PaginatorSearchBar';
import { default as useApiRequest } from '../hooks/useApiRequest';

export default function () {
  let {
    dispatch, state: {
      currentPage, perPage,
      apiUrl, query, searchUrl
    }
  } = useContext(PaginatorControlContext);

  useApiRequest(query.length ? searchUrl(query)(currentPage, perPage)
    : apiUrl(currentPage, perPage), (data) => {
    dispatch({
      type: 'data',
      val: {
        pageNum: currentPage,
        data
      }
    });
  }, null, [query, currentPage]);

  return <div><PaginatorSearchBar /><PaginatorView /></div>;
}
