import React from 'react';
import SamePageAnchor from './SamePageAnchor.jsx';
import { getFullUrl } from '../utils/url_utils';

export default function BackButton({ className, href, text }) {
  return <div className={className}>
    <SamePageAnchor href={getFullUrl(href)} className='back-to'>
      {text}
    </SamePageAnchor></div>;
}
