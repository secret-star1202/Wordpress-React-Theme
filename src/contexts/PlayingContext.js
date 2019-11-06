import React, { createContext, useState } from 'react';

const PlayingContext = createContext({});

export default PlayingContext;

const { Provider } = PlayingContext;

export const PlayingContextProvider = ({ children }) => {
  let [playing, setPlaying] = useState(false);

  return <Provider value={{
    playing, setPlaying
  }}>{children}</Provider>;
};
