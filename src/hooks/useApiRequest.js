import { useState, useEffect } from 'react';
import { getApiRequest } from '../utils/url_utils';

export default function useApiRequest(initialState, endpoint, callback, interval) {
  let [state, setState] = useState(initialState), int = null;
  useEffect(function () {
    getApiRequest(endpoint, data => callback(data, setState));
    if (interval) {
      int = setInterval(function () {
        getApiRequest(endpoint, data => callback(data, setState));
      }, interval);
    }
    return function cleanup() {
      if (interval) clearInterval(int);
    };
  }, []);

  return state;
}
