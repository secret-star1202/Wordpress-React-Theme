import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaElement from "./MediaElement.jsx";
import { default as siteInfo } from '../utils/config';
import axios from 'axios';
import _ from 'underscore';

class HeaderMenu extends Component {
  static propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    console.log(this.props.menuItems);

    let tree = _.groupBy(this.props.menuItems, 'menu_item_parent');

    console.log(tree);

    return (
      <ul className='nav navbar-nav navbar-left'>
        {tree['0'].map(function(menuItem) {
          return <li className= 'dropdown'>
            <a href={tree[menuItem.ID] ? '#' : menuItem.url}
              {...(tree[menuItem.ID] ? {
                className: 'dropdown-toggle',
                "data-toggle": 'dropdown',
                role: 'button',
                "aria-haspopup": 'true',
                "aria-expanded": 'false'} : { target: menuItem.target !== '' ? menuItem.target :  "_self"})}>
              {menuItem.title}
              {tree[menuItem.ID] ? <span className='caret'></span> : null}
            </a>
            {tree[menuItem.ID] ? <ul className='dropdown-menu'>
              {tree[menuItem.ID].map(function(item) {
                return <li>
                  <a href={item.url} target={item.target || "_self"}>{item.title}</a>
                </li>
              })}
            </ul> : null}
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
      menuItems: []
    }
  }

  componentWillMount() {
    let self = this;
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/menus`).then(
      res => {
        self.setState({ menuItems: res.data[0].items });
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
          {this.state.menuItems.length ? <HeaderMenu menuItems={this.state.menuItems} /> : null}
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
