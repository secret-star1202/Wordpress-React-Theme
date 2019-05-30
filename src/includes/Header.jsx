import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaElement from "./MediaElement.jsx";
import { default as siteInfo } from '../utils/config';
import axios from 'axios';

class HeaderMenu extends Component {
  static propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    return (
      <ul className='nav navbar-nav navbar-left'>
        {this.props.menuItems.map(function(menuItem) {
          return <li className= 'dropdown'>
            <a href='#' className='dropdown-toggle' data-toggle='dropdown'
               role='button' aria-haspopup='true' aria-expanded='false'>
              {menuItem.name}
              <span className='caret'></span>
            </a>
            <ul className='dropdown-menu'>
              {menuItem.items.map(function(item) {
                return <li>
                  <a href={item.url} target={item.target || "_self"}>{item.title}</a>
                </li>
              })}
            </ul>
          </li>
        })}
      </ul>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    }
  }

  componentWillMount() {
    let self = this;
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/menus`).then(
      res => {
        self.setState({ menus: res.data });
      }
    );
  }

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
          <HeaderMenu menuItems={this.state.menus} />
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
