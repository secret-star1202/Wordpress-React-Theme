import React, { useRef, useEffect, useContext } from 'react';
import { default as Glyph } from '../reusables/Glyph';
import { default as PlayingContext } from '../contexts/PlayingContext';

export default function () {
  let {
      playing, setPlaying, url, mainUrl, setLoaded, loaded
    } = useContext(PlayingContext),
    ref = useRef(null), pauseOrPlay = loaded ? (playing
      ? 'pause' : 'play') : 'hourglass';

  useEffect(function () {
    if (ref && ref.current) {
      ref.current.oncanplay = () => {
        setLoaded(true);
      };
      ref.current.onloadstart = () => {
        setPlaying(false);
        setLoaded(false);
      };
    }
  }, []);

  useEffect(function () {
    if (ref && ref.current) {
      if (playing && ref.current.paused) {
        ref.current.play();
      } else if (!ref.current.paused) ref.current.pause();
    }
  }, [playing]);

  useEffect(function () {
    if (ref && ref.current) ref.current.load(url);
  }, [url]);

  function handleClick() {
    setPlaying(!playing);
  }

  return <div className="player__container">
    <audio {...{ ref }} controls={url && url !== mainUrl} src={url || mainUrl}></audio>
    <button type="button" onClick={() => handleClick()} disabled={!loaded}>
      <Glyph symbol={pauseOrPlay} />
    </button>
    {url ? (url === mainUrl
      ? <span className="player__span">Live Broadcast</span>
      : null) : <span className="player__span">Live Broadcast</span>
    }
  </div>;
}
