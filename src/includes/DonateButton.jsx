import React from 'react';
import { getFullUrl } from '../utils/url_utils';

export default function () {
  return <a href={getFullUrl('radiothon')} target='_blank' className='color-button purple-button'>Donate Now</a>;
}
