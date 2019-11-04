import React, { useContext, useEffect } from 'react';
import { default as PaginatorControlContext } from './PaginatorControlContext';
import { default as PaginatorView } from './PaginatorView';
import { getApiRequest } from '../utils/url_utils';

export default function PaginatorTop() {
  let {
    dispatch, state: {
      currentPage, perPage,
      apiUrl
    }
  } = useContext(PaginatorControlContext);
  useEffect(function () {
    getApiRequest(apiUrl(currentPage, perPage), function (data) {
      dispatch({
        type: 'data',
        val: {
          pageNum: currentPage,
          data
        }
      });
    });
  }, []);

  return <div><PaginatorView /></div>;
}
