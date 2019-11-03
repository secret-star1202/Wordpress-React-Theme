import React, { createContext, useReducer } from 'react';

let initialState = ({
  activeTabColor = '#5940be', truncate,
  maxPageTabs = 5, apiUrl = '',
  maxPages = null, perPage = 10, wrapper, enumerate = false, currentPage = 1
}) => ({
  data: {},
  apiUrl,
  currentPage,
  maxPages,
  perPage,
  maxPageTabs,
  truncate,
  activeTabColor,
  wrapper: wrapper || null,
  enumerate
});

const PaginatorControlContext = createContext(initialState);

function reducer(state, { type, val }) {
  let newState = Object.assign({}, state);
  if (type === 'page') {
    if (val === '-') newState.currentPage--;
    else if (val === '+') newState.currentPage++;
    else newState.currentPage = val;
  } else if (type === 'data') {
    if (!newState.data[val.pageNum]) newState.data[val.pageNum] = val.data;
  }
  return newState;
}

const { Provider } = PaginatorControlContext;

export const PaginatorControlProvider = ({ children, initialVals }) => {
  let iState = Object.assign({}, initialState(initialVals));

  if (initialVals) {
    for (let k in initialVals) {
      iState[k] = initialVals[k];
    }
  }

  let [state, dispatch] = useReducer(reducer, iState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default PaginatorControlContext;
