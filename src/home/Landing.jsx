import React, { Component } from 'react';
import axios from 'axios';
import { default as siteInfo } from "../utils/config";

class LandingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentShow: null,
      nowPlaying: null,
      interval: -1
    };
  }

  currentShowName() {
    return <p className='landing__show-name caps' key='landing-show-name'>
      {this.state.currentShow.title}
    </p>;
  }

  renderNowPlaying() {
    var nowPlaying = this.state.nowPlaying,
      artist = nowPlaying.artist, title = nowPlaying.song;

    return [
      <p className="landing__song-title caps"
        key='landing-song-title'>
        {title}
      </p>,
      <p className="landing__song-artist caps" key='landing-sort-artist'>
        {` by ${artist}`}
      </p>
    ];
  }

  componentWillMount() {
    let self = this;
    axios.all([
      axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/now_playing`),
      axios.get(`https://spinitron.com/api/shows?access-token=${siteInfo.spinAccessToken}`)
    ]).then(axios.spread((gotSpin, gotShows) => {
      self.setState({
        currentShow: gotShows.data.items[0],
        nowPlaying: {
          artist: gotSpin.data[0].artist[0],
          song: gotSpin.data[0].song[0],
        },
        interval: setInterval(function() {
          axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/now_playing`)
            .then(res => {
              self.setState({nowPlaying: {
                artist: res.data[0].artist[0],
                song: res.data[0].song[0],
              }});
            });
        }, 15000)
      });
    }));
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div className='landing__info'>
        {this.state.currentShow ?
          this.currentShowName() :
          this.state.nowPlaying ?
            <p className='landing__now-playing' key='landing-onair-text'>
              On Air Now:</p> : null}
        {this.state.nowPlaying ? this.renderNowPlaying() : [
          <p className='landing__show-host' key='landing-show-host'>
            <b>Welcome to KTUH<br />FM Honolulu</b>
          </p>,
          <p className='landing__host-name' key="landing-host-name">
            Radio for the People</p>]}
      </div>
    );
  }
}

class Landing extends Component {
  constructor(props) {
    super(props);

    this.handleClickDownArrow = this.handleClickDownArrow.bind(this);
  }

  background() {
    let h = new Date().getHours();

    if (h >= 6 && h < 18) {
      return `url(\'${
        siteInfo.siteUrl
        }/wp-content/themes/custom-react-theme/dist/images/tantalus-morning.jpg\')`;
    }
    else if ((h >= 18 && h <= 23) || (h >= 0 && h < 6)) {
      return `url(\'${
        siteInfo.siteUrl
        }/wp-content/themes/custom-react-theme/dist/images/tantalus-evening.jpg\')`
    }
  }

  handleClickDownArrow() {
    let position = $('#main').offset().top,
      navHeight = $('.navbar-header').height();
    $('HTML, BODY').animate({ scrollTop: position - navHeight + 2 }, 600);
  }

  render() {
    return (
      <div className='landing' style={{ backgroundImage: this.background() }}>
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
        <div className='landing__down-arrow' onClick={this.handleClickDownArrow} />
      </div>
    );
  }
}

export default Landing;
