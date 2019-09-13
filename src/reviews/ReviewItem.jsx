import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getFeaturedImg from '../utils/get_featured_img';
import getFullUrl from '../utils/get_full_url';

function ReviewItem({
  item: {
    _embedded, slug, title: [title], artist: [artist]
  }
}) {
  let featuredImage = getFeaturedImg(_embedded);

  return <div className='review-item'>
    <SamePageAnchor href={getFullUrl(`reviews/${slug}`)}>
      <img className='review-item__image' src={featuredImage} />
      <div className='review-item__release'>{title}</div>
      <div className='review-item__artist'>{artist}</div>
    </SamePageAnchor>
  </div>;
}

export default ReviewItem;
