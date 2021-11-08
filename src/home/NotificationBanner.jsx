import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { getFullUrl } from '../utils/url_utils';

export default function NotificationBanner() {
  let text = useApiRequest(null, 'banner_text');
  let href = getFullUrl('radiothon');

  return text && text.length ? <div className='banner-container'>
    <div />
      <a className='banner light' target='_blank' {...{ href }}>{text}</a>
    </div> : null;
}
