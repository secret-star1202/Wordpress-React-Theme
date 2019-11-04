import React from 'react';
import { default as siteInfo } from '../utils/config';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { default as StreamPlayer } from './StreamPlayer';
import { getFullUrl, getImgAsset } from '../utils/url_utils';
import { default as Navbar } from './Navbar';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeaderMenu } from './HeaderMenu';
import { default as IconBar } from './IconBar';

export default function () {
  let items = useApiRequest([], 'menus', ([{ items: data }], fxn) => {
      if (data) fxn(data);
    }), { siteUrl } = siteInfo, href = getFullUrl('donate');

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
      {items.length ? <HeaderMenu {...{ items }} /> : null }
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
