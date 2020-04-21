import React, { useContext } from 'react';
import { default as PlayingContext } from '../contexts/PlayingContext';

export default function EyesorePlayButton() {
  let {
    playing, setPlaying, url, mainUrl, setToMainUrl, loaded
  } = useContext(PlayingContext);

  function handleClick() {
    if (url !== mainUrl) {
      setToMainUrl();
    } else setPlaying(!playing);
  }

  return <div className='landing__play-btn-outer'
      onClick={handleClick}>
      {!loaded && (url === mainUrl) ? [
          <div className='landing__loading-circle' />,
          <div className='landing__loading-circle' />,
          <div className='landing__loading-circle' />]
        : (playing && (url === mainUrl || !url) ? [
        <div className='landing__pause-btn-l' />,
        <div className='landing__pause-btn-r' />
        ] : (
        <div className='landing__play-btn'>
          <div className='landing__play-btn-triangle'></div>
        </div>
        ))}
    </div>;
}
