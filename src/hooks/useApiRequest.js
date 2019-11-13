import { useState, useEffect } from 'react';
import { getApiRequest } from '../utils/url_utils';

export default function (initialState, endpoint, callback, interval, watch) {
  let [state, setState] = useState(initialState), int = null,
    theFunc = function () {
      getApiRequest(endpoint, (data) => {
        if (callback) callback(data, setState);
        else if (data) setState(data);
      });
    };
  useEffect(function () {
    theFunc();
    if (interval) {
      int = setInterval(function () {
        theFunc();
      }, interval);
    }
    return function cleanup() {
      if (interval) clearInterval(int);
    };
  }, watch || []);

  return state;
}
