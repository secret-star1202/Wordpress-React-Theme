import React, { useState, useRef } from 'react';
import Glyph from '../reusables/Glyph.jsx';

export default function StreamPlayer() {
  let [playing, setPlaying] = useState(false), ref = useRef(null),
    pauseOrPlay = playing ? 'pause' : 'play';

  function handleClick() {
    ref.current[pauseOrPlay]();
    setPlaying(!playing);
  }

  return <div className="player__container">
    <audio {...{ ref }} preload='none' src='http://128.171.43.149:8001/stream'></audio>
    <button type="button" onClick={() => handleClick()}>
      <Glyph symbol={pauseOrPlay} />
    </button>
    <span className="player__span">Live Broadcast</span>
  </div>;
}
