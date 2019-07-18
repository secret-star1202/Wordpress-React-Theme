import React, { useState, useEffect } from 'react';
import { get as axget, all as axall, spread as axspr } from 'axios';
import { default as siteInfo } from '../utils/config';

function LandingInfo() {
  let [state, setState] = useState({
    currentShow: null,
    nowPlaying: null,
    interval: -1
  });

  function currentShowName() {
    return <p className='landing__show-name caps' key='landing-show-name'>
      {state.currentShow.title}
    </p>;
  }

  function renderNowPlaying() {
    let { nowPlaying } = state, { artist, song: title } = nowPlaying;

    return [
      <p className="landing__song-title caps" key='landing-song-title'>
        {title} </p>,
      <p className="landing__song-artist caps" key='landing-sort-artist'>
        {` by ${artist}`}</p>
    ];
  }

  useEffect(function () {
    axall([
      axget(`${siteInfo.siteUrl}/wp-json/wp/v2/now_playing`)
    ]).then(axspr((gotSpin) => {
      setState({
        currentShow: gotSpin.data[0].show[0],
        nowPlaying: {
          artist: gotSpin.data[0].artist[0],
          song: gotSpin.data[0].song[0],
        },
        interval: setInterval(function () {
          axget(`${siteInfo.siteUrl}/wp-json/wp/v2/now_playing`)
            .then((res) => {
              setState({
                currentShow: gotSpin.data[0].show[0],
                nowPlaying: {
                  artist: res.data[0].artist[0],
                  song: res.data[0].song[0]
                }
              });
            });
        }, 15000)
      });
    }));
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
      ret = `url('${siteInfo.siteUrl
      }/wp-content/themes/custom-react-theme/dist/images/tantalus-morning.jpg')`;
    }
    if ((h >= 18 && h <= 23) || (h >= 0 && h < 6)) {
      ret = `url('${siteInfo.siteUrl
      }/wp-content/themes/custom-react-theme/dist/images/tantalus-evening.jpg')`;
    }
    return ret;
  }

  function handleClickDownArrow() {
    let position = $('#main').offset().top, navHeight =
      $('.navbar-header').height();
    $('HTML, BODY').animate({ scrollTop: position - navHeight + 2 }, 600);
  }

  return (
    <div className='landing' style={{ backgroundImage: background() }}>
      <div className='landing__box'>
        <LandingInfo />
      </div>
      <h4 className='landing__freq landing__hnl-freq'>90.1 FM Honolulu</h4>
      <h4 className='landing__freq landing__ns-freq'>91.1 FM Waialua </h4>
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
