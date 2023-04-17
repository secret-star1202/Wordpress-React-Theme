import React, { useEffect, useState, useReducer } from 'react';
import { getImgAsset, getApiRequest } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as EyesorePlayButton } from './EyesorePlayButton';

// to have a primary video in the carosuel, it must have the filename: ktuhvideo-primary.gif
let primaryVideoStatus = false;
const primaryVideoUrl = `ktuhvideo-primary.gif`;

//TODO: put this in a useEffect and render a placeholder img until primary video is returned
fetch(`/wp-content/themes/custom-react-theme/dist/images/${primaryVideoUrl}`).then((res) => {
  primaryVideoStatus = res.status === 200 ? true : false;
});

function genRandom(max) {
  return Math.ceil(Math.random() * max);
}

function useRandomNumberQueue(max, interval, callback) {
  let int, [state, dispatch] = useReducer((queue, action) => {
    if (action.type === 'enqueue') {
      queue.push(action.payload);
      callback(queue[0]);
      queue = queue.slice(1);
    }
    return queue;
  }, [genRandom(max),
    genRandom(max),
    genRandom(max)]);

  useEffect(function () {
    int = setInterval(function () {
      let num = genRandom(max);
      dispatch({ payload: num, type: 'enqueue' });
    }, interval);

    return function cleanup() {
      clearInterval(int);
      int = null;
    };
  }, []);

  return state;
}

function LandingInfo() {
  let { currentShow, nowPlaying } = useApiRequest(
    { currentShow: null, nowPlaying: null },
    'now_playing', function ([{ show: [showNow], artist: [artistNow], song: [songNow] }], fxn) {
      fxn({
        currentShow: showNow,
        nowPlaying: {
          artist: artistNow,
          song: songNow,
        }
      });
    }, 30000
  );

  function currentShowName() {
    if (currentShow.includes('KTUH 90.1FM Honolulu')) {
      currentShow = 'KTUH FM Honolulu';
    }
    return <p className='landing__show-name caps'>
      {currentShow}
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

  return (
    <div className='landing__info'>
      {currentShow && currentShowName() || (nowPlaying ? <p className='landing__now-playing'>On Air Now:</p> : null)}
      {nowPlaying ? renderNowPlaying() : [<p className='landing__show-host'>
        <b>Welcome to KTUH<br />FM Honolulu</b></p>,
        <p className='landing__host-name'>Radio for the People</p>
      ]}
    </div>
  );
}

function Landing() {
  let [bg, setBg] = useState(Math.ceil(Math.random() * 12)),
    bgQueue = useRandomNumberQueue(12, 9000, function (bg_) {
      setBg(bg_);
    });

  function background() {
    const primaryVideo =  `url(${getImgAsset(primaryVideoUrl)})`;
    
    //if primary exists and curr video is primary, play next in line
    if (primaryVideoStatus) {
      return primaryVideo;
    } else {
      return `url(${getImgAsset(`ktuhvideo${bg}.gif`)}`;
    }
  }

  function handleClickDownArrow() {
    let position = $('#main').offset().top, navHeight = $('.navbar-header').height();
    $('HTML, BODY').animate({ scrollTop: position - navHeight + 2 }, 600);
  }

  return [
  <div className='landing' style={{ backgroundImage: background(), backgroundColor: 'rgb(51,51,51)' }}>
      <div className='landing__box'>
        <EyesorePlayButton />
        <LandingInfo />
      </div>
      <div className='landing__down-arrow' onClick={handleClickDownArrow} />
  </div>,
  <div className='spacer-lg' />
  ];
}

export default Landing;
