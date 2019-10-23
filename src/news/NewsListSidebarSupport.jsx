import React from 'react';
import { getFullUrl } from '../utils/url_utils';
import useApiRequest from '../hooks/useApiRequest';

export default function NewsListSidebarSupport() {
  let state = useApiRequest({
      text: ''
    }, 'support_text', (text, fxn) => {
      fxn({ text });
    }), { text } = state;

  return text.length ? <div className='news-list__support'>
    <p className="playlist__sidebar-header">SUPPORT COLLEGE RADIO</p>
    <p>{text}</p>
    <div className='button__wrapper'><a className='color-button purple-button'
      href={getFullUrl('donate')}>Donate Today</a></div>
  </div> : null;
}
