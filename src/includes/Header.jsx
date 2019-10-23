import React from 'react';
import groupBy from '../utils/group_by';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import StreamPlayer from './StreamPlayer.jsx';
import { getFullUrl, getImgAsset } from '../utils/url_utils';
import Navbar from './Navbar.jsx';
import useApiRequest from '../hooks/useApiRequest';

function HeaderMenu({ items }) {
  const tree = groupBy(items, 'menu_item_parent');

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

function IconBar() {
  return <span className='icon-bar'></span>;
}

function Header() {
  let state = useApiRequest({ items: [] }, 'menus', ([{ items }], fxn) => {
      fxn({ items });
    }), { items } = state, { siteUrl } = siteInfo, href = getFullUrl('donate');

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
        <IconBar />
        <IconBar />
        <IconBar />
      </button>
    </div>
    <div className='collapse navbar-collapse' id='navigation'>
      {items.length ? <HeaderMenu {...{ items }} /> : null}
      <Navbar addClassName='navbar-right' nodes={[
        <SamePageAnchor className='header__support-link' {...{ href }} >
          <button type='button' className='btn btn-md header__support-btn'>
            <span>
              <SamePageAnchor className='header__support-link' {...{ href }}>
                DONATE</SamePageAnchor>
            </span>
          </button>
        </SamePageAnchor>]}>
      </Navbar>
      <Navbar nodes={[<StreamPlayer />]}></Navbar>
    </div>
  </nav>;
}

export default Header;
