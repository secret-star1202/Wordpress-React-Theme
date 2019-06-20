import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    axios.all([
      axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/now_playing`),
      axios.get(`https://spinitron.com/api/shows?access-token=${siteInfo.spinAccessToken}`)
    ]).then(axios.spread((gotSpin, gotShows) => {
      setState({
        currentShow: gotShows.data.items[0],
        nowPlaying: {
          artist: gotSpin.data[0].artist[0],
          song: gotSpin.data[0].song[0],
        },
        interval: setInterval(function () {
          axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/now_playing`)
            .then((res) => {
              setState({
                nowPlaying: {
                  artist: res.data[0].artist[0],
                  song: res.data[0].song[0],
                }
              });
            });
        }, 15000)
      });
    }));
  }, []);

  return (
    <div className='landing__info'>
      {state.currentShow && currentShowName() || (state.nowPlaying
        ? <p className='landing__now-playing' key='landing-onair-text'>
          On Air Now:</p> : null)}
        {state.nowPlaying ? renderNowPlaying() : [
        <p className='landing__show-host' key='landing-show-host'>
          <b>Welcome to KTUH<br />FM Honolulu</b>
        </p>,
        <p className='landing__host-name' key="landing-host-name">
          Radio for the People</p>]}
    </div>
  );
}

function Landing() {
  function background() {
    let ret = '', h = new Date().getHours();

    if (h >= 6 && h < 18) {
      ret = `url('${siteInfo.siteUrl
      }/wp-content/themes/custom-react-theme/dist/images/tantalus-morning.jpg')`;
    }
    if ((h >= 18 && h <= 23) || (h >= 0 && h < 6)) {
      ret = `url('${
        siteInfo.siteUrl
      }/wp-content/themes/custom-react-theme/dist/images/tantalus-evening.jpg')`;
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
