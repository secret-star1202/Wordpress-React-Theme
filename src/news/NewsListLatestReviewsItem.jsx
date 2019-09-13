import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getFeaturedImg from '../utils/get_featured_img';
import getFullUrl from '../utils/get_full_url';

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
