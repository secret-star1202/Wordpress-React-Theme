import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor';
import { getFullUrl, getFeaturedImg } from '../utils/url_utils';

function ReviewItem({
  item: {
    _embedded, slug, title: [title], artist: [artist]
  }
}) {
  let src = getFeaturedImg(_embedded);

  return <div className='review-item'>
    <SamePageAnchor href={getFullUrl(`reviews/${slug}`)}>
      <img className='review-item__image' {...{ src }} />
      <div className='review-item__release'>{title}</div>
      <div className='review-item__artist'>{artist}</div>
    </SamePageAnchor>
  </div>;
}

export default ReviewItem;
