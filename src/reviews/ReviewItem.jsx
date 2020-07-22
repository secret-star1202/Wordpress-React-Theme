import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor';
import { getFullUrl, getFeaturedImg } from '../utils/url_utils';

function ReviewItem({
  item: {
    _embedded, slug, artist: [artist], album: [album]
  }
}) {
  let src = getFeaturedImg(_embedded);

  return <div className='review-item'>
    <SamePageAnchor href={getFullUrl(`reviews/${slug}`)}>
      <img className='review-item__image' {...{ src }} />
      <div className='review-item__release'>{album}</div>
      <div className='review-item__artist'>{artist}</div>
    </SamePageAnchor>
  </div>;
}

export default ReviewItem;
