import React, { createContext, useState } from 'react';

const GeneralContext = createContext();

export default GeneralContext;

const { Provider } = GeneralContext;
export const GeneralContextProvider = ({
  children, history, location, match
}) => {
  let [generalState, setGeneralState] = useState({
    history, location, match
  });

  return <Provider value={{
    generalState,
    setGeneralState
  }}>{children}</Provider>;
};
