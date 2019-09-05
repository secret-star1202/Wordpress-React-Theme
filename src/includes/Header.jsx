import React, { useState, useEffect } from 'react';
import { get as axget } from 'axios';
import groupBy from '../utils/group_by';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import StreamPlayer from './StreamPlayer.jsx';

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
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/menus`
    ).then(
      (res) => {
        setState({ menuItems: res.data[0].items });
      }
    );
  }, []);

  let { menuItems } = state;

  return <nav className='navbar navbar-default' role='navigation'>
    <div className='info-box'>
      <SamePageAnchor className='info-box__link' href={siteInfo.siteUrl}>
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
      {menuItems.length ? <HeaderMenu {...{ menuItems }} /> : null}
      <ul className='nav navbar-nav navbar-right'>
        <li className='nav-item'>
          <SamePageAnchor className='header__support-link'
            href={`${siteInfo.siteUrl}/donate`}>
            <button type='button' className='btn btn-md header__support-btn'>
              <span>
                <SamePageAnchor className='header__support-link'
                   href={`${siteInfo.siteUrl}/donate`}>DONATE</SamePageAnchor>
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
