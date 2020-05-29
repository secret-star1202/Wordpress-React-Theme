import React from 'react';
import { getFullUrl } from '../utils';

export default function NewsListSidebarSupport() {
  let text = document.querySelector('meta[name="support-text"]').content;

  return <div className='news-list__support'>
    <p className="playlist__sidebar-header">SUPPORT COLLEGE RADIO</p>
    <p>{text}</p>
    <div className='button__wrapper'><a className='color-button purple-button'
      href={getFullUrl('donate')}>Donate Today</a></div>
  </div>;
}
