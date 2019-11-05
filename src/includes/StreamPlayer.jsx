import React, { useState, useRef } from 'react';
import { default as Glyph } from '../reusables/Glyph';
import { default as useApiRequest } from '../hooks/useApiRequest';

export default function () {
  let [playing, setPlaying] = useState(false), streamUrl = useApiRequest(null,
      'stream_url', (data, fxn) => { if (data) fxn(data); }),
    ref = useRef(null), pauseOrPlay = playing ? 'pause' : 'play';

  function handleClick() {
    ref.current[pauseOrPlay]();
    setPlaying(!playing);
  }

  return streamUrl ? <div className="player__container">
    <audio {...{ ref }} preload='none' src={streamUrl}></audio>
    <button type="button" onClick={() => handleClick()}>
      <Glyph symbol={pauseOrPlay} />
    </button>
    <span className="player__span">Live Broadcast</span>
  </div> : null;
}
