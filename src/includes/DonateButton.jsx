import React from 'react';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { getFullUrl } from '../utils/url_utils';

export default function () {
  return <SamePageAnchor href={getFullUrl('donate')} className='color-button purple-button'>Donate Now</SamePageAnchor>;
}
