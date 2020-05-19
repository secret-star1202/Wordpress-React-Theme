import React, { createContext, useState, useEffect } from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';

const PlayingContext = createContext({});

export default PlayingContext;

const { Provider } = PlayingContext;

export const PlayingContextProvider = ({ children }) => {
  let [playing, setPlaying] = useState(false),
    [url, setUrl] = useState(null), [loaded, setLoaded] = useState(false),
    mainUrl = useApiRequest(null, 'stream_url', function (data, fxn) {
      setUrl(data);
      fxn(data);
    }), fallbackUrl = useApiRequest(null, 'fallback_stream_url'),
    [isInitial, setInitial] = useState(true),
    [jumpStart, setJumpStart] = useState(false);

  function setToMainUrl() {
    if (mainUrl) {
      setUrl(mainUrl);
      setJumpStart(true);
    }
  }

  function setToFallbackUrl() {
    if (mainUrl) {
      setUrl(fallbackUrl);
    }
  }

  function switchUrl(theUrl, immediateStart) {
    setUrl(theUrl);
    setJumpStart(immediateStart);
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
    setToFallbackUrl,
    mainUrl,
    fallbackUrl,
    switchUrl,
    loaded,
    setLoaded,
    isInitial,
    setInitial,
    jumpStart,
    setJumpStart
  }}>{children}</Provider>;
};
