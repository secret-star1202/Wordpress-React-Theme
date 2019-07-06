import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { groupBy } from 'underscore';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import MediaElement from './MediaElement.jsx';

function HeaderMenu({ menuItems, history }) {
  const tree = groupBy(menuItems, 'menu_item_parent');

  return <ul className='nav navbar-nav navbar-left'>
      {tree['0'].map(function ({
        ID, url, target, title
      }) {
        return <li className= 'dropdown'>
          <a href={tree[ID] ? '#' : url}
            {...(tree[ID] ? {
              className: 'dropdown-toggle',
              'data-toggle': 'dropdown',
              role: 'button',
              'aria-haspopup': 'true',
              'aria-expanded': 'false'
            } : {
              target: target !== '' ? target : '_self'
            })}>
            {title}
            {tree[ID] ? <span className='caret'></span> : null}
          </a>
          {tree[ID] ? <ul className='dropdown-menu'>
            {tree[ID].map(function ({
              url: treeUrl, target: treeTarget, title: treeTitle
            }) {
              return <li>
                <SamePageAnchor history={history}
                  href={treeUrl} target={treeTarget || '_self'}>
                  {treeTitle}</SamePageAnchor></li>;
            })}
          </ul> : null}
        </li>;
      })}
    </ul>;
}

HeaderMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.object
};

function Header({ history }) {
  let [state, setState] = useState({
    menuItems: []
  });

  useEffect(function () {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/menus`
    ).then(
      (res) => {
        setState({ menuItems: res.data[0].items });
      }
    );
  }, []);

  return (
    <nav className='navbar navbar-default' role='navigation'>
      <div className='info-box'>
        <SamePageAnchor history={history}
            className='info-box__link' href={siteInfo.siteUrl}>
          <img alt='KTUH FM'
            src={`${siteInfo.siteUrl}/wp-content/themes/custom-react-theme/dist/images/ktuh-fm-logo.png`} />
        </SamePageAnchor>
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
        {state.menuItems.length ? <HeaderMenu history={history}
          menuItems={state.menuItems} /> : null}
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
            <MediaElement id="audio-player"
              src='http://stream.ktuh.org:8000/stream-mp3' />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
