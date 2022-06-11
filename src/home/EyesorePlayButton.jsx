import React, { useContext } from 'react';
import { default as PlayingContext } from '../contexts/PlayingContext';

export default function EyesorePlayButton() {
  let {
    playing, setPlaying, url, mainUrl, setToMainUrl, loaded, fallbackUrl
  } = useContext(PlayingContext);

  window.addEventListener('keypress', function (e) {
    e.preventDefault();
    if (e.key === ' ') {
      setPlaying(!playing);
    }
  }, false);

  function handleClick() {
    if (url !== mainUrl && url !== fallbackUrl) {
      setToMainUrl();
    } else {
      let audioRef = document.querySelector('audio');
      if (audioRef) {
        if (!playing) audioRef.play();
        else audioRef.pause();
      }
      setPlaying(!playing);
    }
  }

  return <div className='landing__play-btn-outer'
      onClick={handleClick}>
      {!loaded && (url === mainUrl || url === fallbackUrl) ? [
          <div className='landing__loading-circle' />,
          <div className='landing__loading-circle' />,
          <div className='landing__loading-circle' />]
        : (playing && (url === mainUrl || url === fallbackUrl || !url) ? [
        <div className='landing__pause-btn-l' />,
        <div className='landing__pause-btn-r' />
        ] : (
        <div className='landing__play-btn'>
          <div className='landing__play-btn-triangle'></div>
        </div>
        ))}
    </div>;
}
