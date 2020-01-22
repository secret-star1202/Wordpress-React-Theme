import React, { useContext } from 'react';
import { default as PlayingContext } from '../contexts/PlayingContext';

export default function EyesorePlayButton() {
  let {
    playing, setPlaying, url, mainUrl, setToMainUrl
  } = useContext(PlayingContext);

  function handleClick() {
    if (url !== mainUrl) {
      setToMainUrl();
    } else setPlaying(!playing);
  }

  return <div className='landing__play-btn-outer'
      onClick={handleClick}>
      {playing && (url === mainUrl || !url) ? [
        <div className='landing__pause-btn-l'
          key='pause-button-left'></div>,
        <div className='landing__pause-btn-r'
          key='pause-button-right'></div>
      ] : (
        <div className='landing__play-btn' key='play-button'>
          <div className='landing__play-btn-triangle'></div>
        </div>
      )}
    </div>;
}