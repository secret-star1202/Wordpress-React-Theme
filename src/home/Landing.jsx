import React, { useState, useEffect } from 'react';
import { getApiRequest, getFullUrl, getImgAsset } from '../utils/url_utils';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import Glyph from '../reusables/Glyph.jsx';

function LandingInfo() {
  let [state, setState] = useState({
    currentShow: null,
    nowPlaying: null,
    interval: -1
  });

  function currentShowName() {
    return <p className='landing__show-name caps'>
      {state.currentShow.title}
    </p>;
  }

  function renderNowPlaying() {
    let { nowPlaying } = state, { artist, song: title } = nowPlaying;

    return [
      <p className="landing__song-title caps">{title} </p>,
      <p className="landing__song-artist caps">{` by ${artist}`}</p>
    ];
  }

  useEffect(function () {
    getApiRequest('now_playing', function ({
      data: [{
        show: [showNow], artist: [artistNow], song: [songNow]
      }]
    }) {
      setState({
        currentShow: showNow,
        nowPlaying: {
          artist: artistNow,
          song: songNow,
        },
        interval: setInterval(function () {
          getApiRequest('now_playing', ({
            data: [{
              show: [showThen], artist: [artistThen], song: [songThen]
            }]
          }) => {
            setState({
              currentShow: showThen,
              nowPlaying: {
                artist: artistThen,
                song: songThen
              }
            });
          });
        }, 30000)
      });
    });
  }, []);

  let { currentShow, nowPlaying } = state;

  return <div className='landing__info'>{currentShow && currentShowName()
    || (nowPlaying ? <p className='landing__now-playing'>On Air Now:</p> : null)}
      {nowPlaying ? renderNowPlaying() : [<p className='landing__show-host'>
        <b>Welcome to KTUH<br />FM Honolulu</b></p>,
      <p className='landing__host-name'>Radio for the People</p>]}</div>;
}

function Landing() {
  function background() {
    let h = new Date().getHours();
    return `url(${getImgAsset(`tantalus-${
      ((h >= 18 && h <= 23) || (h >= 0 && h < 6)) ? 'evening' : 'morning'}`)}.jpg`;
  }

  function handleClickDownArrow() {
    let position = $('#main').offset().top,
      navHeight = $('.navbar-header').height();
    $('HTML, BODY').animate({ scrollTop: position - navHeight + 2 }, 600);
  }

  return (
    <div className='landing' style={{ backgroundImage: background() }}>
      <div className='landing__box'><LandingInfo /></div>
      <SamePageAnchor href={getFullUrl('playlist')}>
        <h6 className='landing__current-playlist'>
          <span className='landing__view-current'>
            View Current{' '}
          </span>Playlist{'  '}
          <Glyph symbol='eye-open' />
        </h6>
      </SamePageAnchor>
      <div className='landing__down-arrow' onClick={handleClickDownArrow} />
    </div>
  );
}

export default Landing;
