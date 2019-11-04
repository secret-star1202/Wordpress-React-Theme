import React from 'react';
import { getFullUrl } from '../utils';
import { useApiRequest } from '../hooks';

export default function NewsListSidebarSupport() {
  let text = useApiRequest('', 'support_text', (data, fxn) => {
      fxn(data);
    });

  return <div className='news-list__support'>
    <p className="playlist__sidebar-header">SUPPORT COLLEGE RADIO</p>
    <p>{text}</p>
    <div className='button__wrapper'><a className='color-button purple-button'
      href={getFullUrl('donate')}>Donate Today</a></div>
  </div>;
}
