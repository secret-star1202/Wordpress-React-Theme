import React, { useState, useRef } from 'react';
import Glyph from '../reusables/Glyph.jsx';
import useApiRequest from '../hooks/useApiRequest';

export default function StreamPlayer() {
  let [playing, setPlaying] = useState(false), state = useApiRequest({
      streamUrl: null
    }, 'stream_url', (streamUrl, fxn) => fxn({ streamUrl })),
    ref = useRef(null), pauseOrPlay = playing ? 'pause' : 'play';

  function handleClick() {
    ref.current[pauseOrPlay]();
    setPlaying(!playing);
  }

  return state.streamUrl ? <div className="player__container">
    <audio {...{ ref }} preload='none' src={state.streamUrl}></audio>
    <button type="button" onClick={() => handleClick()}>
      <Glyph symbol={pauseOrPlay} />
    </button>
    <span className="player__span">Live Broadcast</span>
  </div> : null;
}
