import React, { useEffect, useContext } from 'react';
import { default as PaginatorControlContext } from './PaginatorControlContext';
import { getApiRequest } from '../utils/url_utils';

export default function PaginatorDisplay() {
  let {
    state: {
      wrapper: Container, currentPage, data, apiUrl, perPage
    }, dispatch
  } = useContext(PaginatorControlContext);

  useEffect(function () {
    if (!data[currentPage]) {
      getApiRequest(apiUrl(currentPage, perPage), (info) => {
        dispatch({
          type: 'data',
          val: {
            pageNum: currentPage,
            data: info
          }
        });
      });
    }
  }, [currentPage]);

  return data[currentPage]
    ? data[currentPage].map(item => <Container {...{ item }} />) : <p>Loading...</p>;
}
