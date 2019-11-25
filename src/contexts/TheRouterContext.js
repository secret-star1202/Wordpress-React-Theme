import React, { createContext } from 'react';

const TheRouterContext = createContext();

export default TheRouterContext;

const { Provider } = TheRouterContext;

export const TheRouterContextProvider = ({ value, children }) => {
  return <Provider value={value}>{children}</Provider>;
};
