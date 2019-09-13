import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getImgAsset from '../utils/get_img_asset';
import getFeaturedImg from '../utils/get_featured_img';
import getFullUrl from '../utils/get_full_url';

export default function HomeContentReviewsItem({
  item: {
    _embedded, slug, artist, title
  }
}) {
  let featuredImage = getFeaturedImg(_embedded, getImgAsset('mstile-310x310.png'));

  return <div className='home__reviews-item'>
    <SamePageAnchor href={getFullUrl(`reviews/${slug}`)}>
      <img className='home__reviews-img' src={featuredImage} />
      <p className='home__title'>{artist}</p>
      <p className='home__subtitle'>{title}</p>
    </SamePageAnchor>
  </div>;
}
