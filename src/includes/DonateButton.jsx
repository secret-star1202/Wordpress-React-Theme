import React from 'react';
import { getFullUrl } from '../utils/url_utils';

export default function () {
  return <a href={getFullUrl('donate')} className='color-button purple-button'>Donate Now</a>;
}
