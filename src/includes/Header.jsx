import React, { useState, useEffect } from 'react';
import groupBy from '../utils/group_by';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import StreamPlayer from './StreamPlayer.jsx';
import getApiRequest from '../utils/get_api_request';
import getImgAsset from '../utils/get_img_asset';
import getFullUrl from '../utils/get_full_url';

function HeaderMenu({ menuItems }) {
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
              <SamePageAnchor href={treeUrl} target={treeTarget || '_self'}>
                {treeTitle}</SamePageAnchor></li>;
          })}
        </ul> : null}
      </li>;
    })}
  </ul>;
}

function Header() {
  let [state, setState] = useState({
    menuItems: []
  });

  useEffect(function () {
    getApiRequest('menus', ({ data: [data] }) => {
      setState({ menuItems: data.items });
    });
  }, []);

  let { menuItems } = state, { siteUrl } = siteInfo, donateLink = getFullUrl('donate');

  return <nav className='navbar navbar-default' role='navigation'>
    <div className='info-box'>
      <SamePageAnchor className='info-box__link' href={siteUrl}>
        <img alt='KTUH FM' src={getImgAsset('ktuh-fm-logo.png')} />
      </SamePageAnchor>
    </div>
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle collapsed' data-toggle='collapse'
        data-target='#navigation'>
        <span className='sr-only'>Toggle navigation</span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
    </div>
    <div className='collapse navbar-collapse' id='navigation'>
      {menuItems.length ? <HeaderMenu {...{ menuItems }} /> : null}
      <ul className='nav navbar-nav navbar-right'>
        <li className='nav-item'>
          <SamePageAnchor className='header__support-link' href={donateLink}>
            <button type='button' className='btn btn-md header__support-btn'>
              <span>
                <SamePageAnchor className='header__support-link' href={donateLink}>
                  DONATE</SamePageAnchor>
              </span>
            </button>
          </SamePageAnchor>
        </li>
      </ul>
      <ul className='nav navbar-nav'>
        <li className='nav-item'>
          <StreamPlayer src='http://stream.ktuh.org:8000/stream-mp3' />
        </li>
      </ul>
    </div>
  </nav>;
}

export default Header;
