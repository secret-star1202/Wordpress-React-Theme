import React from 'react';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { getFullUrl } from '../utils/url_utils';

export default function NotificationBanner() {
  let text = useApiRequest(null, 'banner_text');
  let href = getFullUrl('radiothon');

  return text && text.length ? <div className='banner-container'>
    <div />
      {/* Banner w/ Link TODO: include link field in PHP route */}
      <a className='banner light' target='_blank' {...{ href }}>{text}</a> 
      {/* <a className='banner light' target='_blank' >{text}</a> */}
    </div> : null;
}
