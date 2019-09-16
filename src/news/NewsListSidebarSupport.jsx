import React, { useEffect, useState } from 'react';
import getApiRequest from '../utils/get_api_request';

export default function NewsListSidebarSupport() {
  let [state, setState] = useState({
    text: ''
  });

  useEffect(function () {
    getApiRequest('support_text', ({ data }) => {
      setState({ text: data });
    });
  });

  return state.text.length ? <div className='news-list__support'>
    <p className="playlist__sidebar-header">SUPPORT COLLEGE RADIO</p>
    <p>{state.text}</p>
    <div className='button__wrapper'><a className='color-button purple-button'
      href='https://www.uhfoundation.org/give/giving-gift.aspx?school_code=ktuh'>
        Donate Today</a></div>
  </div> : null;
}
