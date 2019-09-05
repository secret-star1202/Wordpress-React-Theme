import React, { useState, useRef } from 'react';

export default function MediaElement({ src }) {
  let [playing, setPlaying] = useState(false),
    player = useRef(null);

  function handleClick() {
    if (!playing) {
      player.current.play();
    } else {
      player.current.pause();
    }
    setPlaying(!playing);
  }

  return <div className="player__container">
    <audio ref={player} preload='none' src={src}></audio>
    <button type="button" onClick={() => handleClick()}>
      {playing ? '■' : '►'}
    </button>
    <span className="player__span">Live Broadcast</span>
  </div>;
}
