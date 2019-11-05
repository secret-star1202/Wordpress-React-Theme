import React, { useRef, useEffect, useContext } from 'react';
import { default as Glyph } from '../reusables/Glyph';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as PlayingContext } from '../contexts/PlayingContext';

export default function () {
  let { playing, setPlaying } = useContext(PlayingContext),
    streamUrl = useApiRequest(null, 'stream_url'),
    ref = useRef(null), pauseOrPlay = playing ? 'pause' : 'play';

  useEffect(function () {
    if (ref && ref.current) {
      if (playing) {
        ref.current.play();
      } else ref.current.pause();
    }
  }, [playing]);

  function handleClick() {
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
