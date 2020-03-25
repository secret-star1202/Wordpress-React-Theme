import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';

export default function NotificationBanner() {
  let text = useApiRequest(null, 'banner_text');

  return text && text.length ? <div className='banner-container'>
    <div className='banner light'
      dangerouslySetInnerHTML={{ __html: text }} /></div> : null;
}
