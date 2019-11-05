import React from 'react';
import { default as SamePageAnchor } from './SamePageAnchor';
import { getFullUrl } from '../utils/url_utils';

export default function BackButton({ className, href, text }) {
  return <div {...{ className }}>
    <SamePageAnchor href={getFullUrl(href)} className='back-to'>
      {`← ${text}`}
    </SamePageAnchor></div>;
}
