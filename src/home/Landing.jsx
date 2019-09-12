import React, { useState, useEffect } from 'react';
import getApiRequest from '../utils/get_api_request';
import getImgAsset from '../utils/get_img_asset';

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
    getApiRequest('now_playing', function ({ data: [now] }) {
      setState({
        currentShow: now.show[0],
        nowPlaying: {
          artist: now.artist[0],
          song: now.song[0],
        },
        interval: setInterval(function () {
          getApiRequest('/now_playing', ({ data: [then] }) => {
            setState({
              currentShow: then.show[0],
              nowPlaying: {
                artist: then.artist[0],
                song: then.song[0]
              }
            });
          });
        }, 15000)
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
    let ret = '', h = new Date().getHours();

    if (h >= 6 && h < 18) {
      ret = `url('${getImgAsset('tantalus-morning.jpg')}`;
    }
    if ((h >= 18 && h <= 23) || (h >= 0 && h < 6)) {
      ret = `url('${getImgAsset('tantalus-evening.jpg')}`;
    }
    return ret;
  }

  function handleClickDownArrow() {
    let position = $('#main').offset().top,
      navHeight = $('.navbar-header').height();
    $('HTML, BODY').animate({ scrollTop: position - navHeight + 2 }, 600);
  }

  return (
    <div className='landing' style={{ backgroundImage: background() }}>
      <div className='landing__box'><LandingInfo /></div>
      <a href='/playlists'>
        <h6 className='landing__current-playlist'>
          <span className='landing__view-current'>
            View Current{' '}
          </span>Playlist{'  '}
          <span className='glyphicon glyphicon-eye-open' />
        </h6>
      </a>
      <div className='landing__down-arrow' onClick={handleClickDownArrow} />
    </div>
  );
}

export default Landing;
