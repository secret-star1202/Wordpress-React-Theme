import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';

export default function NotificationBanner() {
  let text = useApiRequest(null, 'banner_text');
  let href = useApiRequest(null, 'banner_link');

  return text && text.length ? <div className='banner-container'>
    <div />
      <a className='banner light' target='_blank' href={href}>{text}</a> 
    </div> : null;
}
