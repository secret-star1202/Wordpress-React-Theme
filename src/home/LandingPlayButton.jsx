import React, { useContext } from 'react';
import { default as PlayingContext } from '../contexts/PlayingContext';
import { default as Glyph } from '../reusables/Glyph';

export default function LandingPlayButton() {
  let {
    playing, setPlaying
  } = useContext(PlayingContext);

  function handleClick() {
    setPlaying(!playing);
  }

  return <button type="button" onClick={() => handleClick()}>
    <Glyph symbol={playing ? 'pause' : 'play'} />
  </button>;
}
