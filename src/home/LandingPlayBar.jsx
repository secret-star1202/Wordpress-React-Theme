import React, { useContext } from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';


let { currentShow, nowPlaying } = useApiRequest({
  currentShow: null,
  nowPlaying: null
}, 'now_playing', function ([{
  show: [showNow], artist: [artistNow], song: [songNow]
}], fxn) {
  fxn({
    currentShow: showNow,
    nowPlaying: {
      artist: artistNow,
      song: songNow,
    }
  });
}, 30000);

function currentShowName() {
  return <p className='landing__show-name caps'>
    {currentShow.title}
  </p>;
}

function renderNowPlaying() {
  if (!nowPlaying) return null;
  let { artist, song: title } = nowPlaying;
  return [
    <p className="landing__song-title caps">{title} </p>,
    <p className="landing__song-artist caps">{` by ${artist}`}</p>
  ];
}


export default function LandingPlayBar() {
  return <div className='play-bar'>
    <div className='play-bar__now-playing'>
      {renderNowPlaying()}
    </div>
    <div className='play-bar__show'>
      {currentShowName()}
    </div>
  </div>
}
