import React from 'react';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function ReviewItem({
  item: {
    _embedded, slug, title: [title], artist: [artist]
  }
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url || undefined;

  return <div className='review-item'>
    <SamePageAnchor href={`${siteInfo.siteUrl}/reviews/${slug}`}>
      <img className='review-item__image'
        src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
      <div className='review-item__release'>
        {title}
      </div>
      <div className='review-item__artist'>
        {artist}
      </div>
    </SamePageAnchor>
  </div>;
}

export default ReviewItem;
