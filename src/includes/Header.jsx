import React from 'react';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { default as StreamPlayer } from './StreamPlayer';
import { getFullUrl, getImgAsset } from '../utils/url_utils';
import { default as Navbar } from './Navbar';
import { default as HeaderMenu } from './HeaderMenu';
import { default as IconBar } from './IconBar';

export default function () {
  let siteUrl = document.querySelector('link[rel="basename"]').href,
  href = getFullUrl('radiothon');

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
      <HeaderMenu />
      <Navbar addClassName='navbar-right' nodes={[
        <a className='header__support-link' {...{ href }} >
          <button type='button' className='btn btn-md header__support-btn'>
            <span>
              <a className='header__support-link' target='_blank' {...{ href }}>DONATE</a>
            </span>
          </button>
        </a>]}>
      </Navbar>
      <Navbar nodes={[<StreamPlayer />]}></Navbar>
    </div>
  </nav>;
}
