import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { getFullUrl, getFeaturedImg } from '../utils/url_utils';

export default function NewsListLatestReviewsItem({
  review: {
    slug, artist: [artist], title: [title], _embedded
  }
}) {
  let featuredImage = getFeaturedImg(_embedded);

  return <div className='news-list__latest-review'>
    <SamePageAnchor href={getFullUrl(`reviews/${slug}`)}>
      <img src={featuredImage} />
      <p><b>{artist}</b></p><p>{title}</p>
    </SamePageAnchor>
  </div>;
}
