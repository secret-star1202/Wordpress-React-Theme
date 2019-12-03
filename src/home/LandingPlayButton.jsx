import React, { useContext } from 'react';
import { default as PlayingContext } from '../contexts/PlayingContext';
import { default as Glyph } from '../reusables/Glyph';

export default function LandingPlayButton() {
  let {
    playing, url, mainUrl, setToMainUrl
  } = useContext(PlayingContext);

  function handleClick() {
    setToMainUrl();
  }

  return <button type="button" onClick={() => handleClick()}>
    <Glyph symbol={playing && url === mainUrl ? 'pause' : 'play'} />
  </button>;
}
