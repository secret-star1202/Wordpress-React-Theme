import React, { useContext, useEffect } from 'react';
import { default as PaginatorControlContext } from './PaginatorControlContext';
import { default as PaginatorView } from './PaginatorView';
import { default as PaginatorSearchBar } from './PaginatorSearchBar';
import { getApiRequest } from '../utils/url_utils';

export default function () {
  let {
    dispatch, state: {
      currentPage, perPage,
      apiUrl, query, searchUrl
    }
  } = useContext(PaginatorControlContext);
  useEffect(function () {
    getApiRequest(query.length ? searchUrl(query)(currentPage, perPage) : apiUrl(currentPage, perPage), (data) => {
      dispatch({
        type: 'data',
        val: {
          pageNum: currentPage,
          data
        }
      });
    });
  }, [query, currentPage]);

  return <div><PaginatorSearchBar /><PaginatorView /></div>;
}
