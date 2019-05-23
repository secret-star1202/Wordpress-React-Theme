import React, { Component } from 'react';
import MediaElement from "./MediaElement.jsx";
import { default as siteInfo } from '../utils/config';

function activePage() {
  var routeNames = Array.from(arguments);
  return routeNames.includes(window.location.pathname.replace('/', '')) && 'active';
}

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-default' role='navigation'>
        <div className='info-box'>
          <a className='info-box__link' href={siteInfo.siteUrl}>
            <img alt='KTUH FM'
              src={`${siteInfo.siteUrl}/wp-content/themes/custom-react-theme/dist/images/ktuh-fm-logo.png`} />
          </a>
        </div>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed'
            data-toggle='collapse' data-target='#navigation'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>
        <div className='collapse navbar-collapse' id='navigation'>
          <ul className='nav navbar-nav navbar-left'>
            <li className=
              {`dropdown ${activePage('about', 'timeline', 'join', 'faq',
                'contact-us', 'staff', 'alumni', 'underwriting')}`}>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'
                role='button' aria-haspopup='true' aria-expanded='false'>
                  About Us <span className='caret'></span>
              </a>
              <ul className='dropdown-menu'>
                <li className='header__submenu-support'>
                  <a href='https://www.uhfoundation.org/give/giving-gift.aspx?school_code=ktuh'>
                    <button className='btn btn-md'>Donate Now</button>
                  </a>
                </li>
                <li><a href={`${siteInfo.siteUrl}/about-us`}>KTUH History</a></li>
                <li><a href={`${siteInfo.siteUrl}/timeline`}>KTUH Timeline</a></li>
                <li><a href={`${siteInfo.siteUrl}/staff`}>KTUH Staff</a></li>
                <li><a href={`${siteInfo.siteUrl}/alumni`}>KTUH Alumni</a></li>
                <li><a href=
                  'https://www.uhfoundation.org/give/giving-gift.aspx?school_code=ktuh'>Donate</a>
                </li>
                <li><a href={`${siteInfo.siteUrl}/join-ktuh`}>Join KTUH</a></li>
                <li><a href={`${siteInfo.siteUrl}/contact-us`}>Contact Us</a></li>
                <li><a href={`${siteInfo.siteUrl}/faq`}>FAQ</a></li>
                <li><a href={`${siteInfo.siteUrl}/underwriting`}>Underwriting</a></li>
              </ul>
            </li>
            <li className={`dropdown ${activePage('show', 'showPage',
              'showCreate', 'showEdit', 'playlistPage', 'playlistList',
              'reviewsPage', 'chartList', 'chartPage')}`}>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown'
                role='button' aria-haspopup='true' aria-expanded='false'>
                Music <span className='caret'></span>
              </a>
              <ul className='dropdown-menu'>
                <li><a href={`${siteInfo.siteUrl}/playlists`}>Playlists</a></li>
                <li><a href={`${siteInfo.siteUrl}/reviews`}>Reviews</a></li>
              </ul>
            </li>
            <li className={`${activePage('party', 'partyPage', 'partyCreate',
              'partyEdit')}' nav-item nav-item__parties`}>
              <a href={`${siteInfo.siteUrl}/events`}>Events</a>
            </li>
            <li className={activePage('radioblog', 'blogPage') +
              ' nav-item nav-item__news'}>
              <a href={`${siteInfo.siteUrl}/radioblog`}>Radioblog</a></li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li className='nav-item'>
              <a className='header__support-link'
                href='https://www.uhfoundation.org/give/giving-gift.aspx?school_code=ktuh'>
                <button type='button'
                  className='btn btn-md header__support-btn'>
                  <span>
                    <a className='header__support-link'
                       href='https://www.uhfoundation.org/give/giving-gift.aspx?school_code=ktuh'>DONATE</a>
                  </span>
                </button>
              </a>
            </li>
          </ul>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <MediaElement id="audio-player" src='http://stream.ktuh.org:8000/stream-mp3' />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
