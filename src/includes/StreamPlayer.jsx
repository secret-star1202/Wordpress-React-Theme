import React, {
  useRef, useEffect, useContext, useState
} from 'react';
import { default as Glyph } from '../reusables/Glyph';
import { default as PlayingContext } from '../contexts/PlayingContext';

export default function () {
  let {
      playing, setPlaying, url, mainUrl, setLoaded, loaded, jumpStart
    } = useContext(PlayingContext),
    ref = useRef(null), pauseOrPlay = loaded ? (playing
      ? 'pause' : 'play') : 'hourglass', [currentTime, setTime] = useState(0),
    int = useRef(null);

  useEffect(function () {
    if (ref && ref.current) {
      ref.current.oncanplay = () => {
        setLoaded(true);
        if (jumpStart) {
          ref.current.play();
          setPlaying(true);
        }
      };
      ref.current.onloadstart = () => {
        setPlaying(false);
        setLoaded(false);
      };
    }
  }, [url]);

  useEffect(function () {
    if (ref && ref.current) {
      if (playing && ref.current.paused) {
        ref.current.play();
      } else if (!playing && !ref.current.paused) ref.current.pause();
    }
  }, [playing]);

  useEffect(function () {
    if (ref && ref.current) ref.current.load(url);
  }, [url]);

  function handleClick() {
    setPlaying(!playing);
  }

  useEffect(function () {
    int = setInterval(function () {
      if (ref && ref.current && url !== mainUrl) {
        setTime(ref.current.currentTime);
      }
    }, 1000);
  });

  function handleSlide(evt) {
    ref.current.currentTime = evt.target.value;
  }

  function beautifyTime(secs) {
    let hours = Math.floor(secs / 3600),
      minutes = Math.floor((secs - (hours * 3600)) / 60),
      seconds = Math.floor(secs - (hours * 3600) - (minutes * 60));

    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds}`;
  }

  return <div className="player__container">
    <audio {...{ ref }} controls={url && url !== mainUrl} src={url || mainUrl}></audio>
    <button type="button" onClick={() => handleClick()} disabled={!loaded}>
      <Glyph symbol={pauseOrPlay} />
    </button>
    {url ? (url === mainUrl
      ? <span className="player__span">Live Broadcast</span>
      : <span>{beautifyTime(currentTime)} / {beautifyTime(ref.current.duration)}</span>)
      : <span className="player__span">Live Broadcast</span>
    }
    {url && url !== mainUrl ? <input type="range" min={0}
        max={ref.current.duration} value={currentTime} onInput={handleSlide}
        onChange={handleSlide}
      /> : null}
  </div>;
}
