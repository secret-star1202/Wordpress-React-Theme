import React from 'react';
import { getFullUrl } from '../utils/url_utils';

export default function () {
  let href = getFullUrl('donate');
  return <a {...{ href }} target='_blank' className='color-button purple-button'>Donate Now</a>;
}
