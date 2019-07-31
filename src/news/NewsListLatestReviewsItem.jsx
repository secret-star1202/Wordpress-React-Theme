import React from 'react';
import { object } from 'prop-types';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

export default function NewsListLatestReviewsItem({
  review: {
    slug, artist: [artist], title: [title], _embedded
  }
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url || undefined;

  return <div className='news-list__latest-review'>
      <SamePageAnchor href={`${siteInfo.siteUrl}/reviews/${slug}`}>
        <img src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
        <p><b>{artist}</b></p><p>{title}</p>
      </SamePageAnchor>
    </div>;
}

NewsListLatestReviewsItem.propTypes = {
  review: object
};
