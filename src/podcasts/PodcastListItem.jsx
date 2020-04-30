import React from 'react';
import { getFullUrl, getUploadedImage } from '../utils/url_utils';
import { SamePageAnchor } from '../reusables';

export default function PodcastListItem({ href, src = '2019/06/ktuh-logo.jpg', name }) {
  return <SamePageAnchor href={getFullUrl(`podcasts/${href}`)}>
    <div className="grid__item">
      <img className="podcast__page-image" src={getUploadedImage(src)}
        href={getFullUrl(`podcasts/${href}`)} />
      <SamePageAnchor href={getFullUrl(`podcasts/${href}`)}>
        <h4>{name}</h4>
      </SamePageAnchor>
    </div>
    </SamePageAnchor>;
}
