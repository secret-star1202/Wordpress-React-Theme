import React, { useEffect, useState } from 'react';
import { getApiRequest, getFullUrl } from '../utils/url_utils';

export default function NewsListSidebarSupport() {
  let [state, setState] = useState({
    text: ''
  });

  useEffect(function () {
    getApiRequest('support_text', ({ data }) => {
      setState({ text: data });
    });
  }, []);

  return state.text.length ? <div className='news-list__support'>
    <p className="playlist__sidebar-header">SUPPORT COLLEGE RADIO</p>
    <p>{state.text}</p>
    <div className='button__wrapper'><a className='color-button purple-button'
      href={getFullUrl('donate')}>Donate Today</a></div>
  </div> : null;
}
