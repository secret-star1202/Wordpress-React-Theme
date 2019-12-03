import React, { createContext, useState, useEffect } from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';

const PlayingContext = createContext({});

export default PlayingContext;

const { Provider } = PlayingContext;

export const PlayingContextProvider = ({ children }) => {
  let [playing, setPlaying] = useState(false),
    [url, setUrl] = useState(null), [loaded, setLoaded] = useState(false),
    mainUrl = useApiRequest(null, 'stream_url');

  function setToMainUrl() {
    if (mainUrl) {
      setUrl(mainUrl);
    }
  }

  function switchUrl(theUrl) {
    setUrl(theUrl);
  }

  useEffect(function () {
    if (mainUrl) setUrl(mainUrl);
  }, []);

  return <Provider value={{
    playing,
    setPlaying,
    url,
    setUrl,
    setToMainUrl,
    mainUrl,
    switchUrl,
    loaded,
    setLoaded
  }}>{children}</Provider>;
};
