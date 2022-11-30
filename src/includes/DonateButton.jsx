import React from 'react';
import { getFullUrl } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';

export default function () {
  let href = useApiRequest(null, 'banner_link');

  if(!href) href = getFullUrl('donate');
  
  return <a {...{ href }} target='_blank' className='color-button purple-button'>Donate Now</a>;
}
