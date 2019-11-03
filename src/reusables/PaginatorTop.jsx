import React, { useContext, useEffect } from 'react';
import PaginatorControlContext from './PaginatorControlContext.jsx';
import PaginatorView from './PaginatorView.jsx';
import { getApiRequest } from '../utils';

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
