import React from 'react';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { getFullUrl, getFeaturedImg, getImgAsset } from '../utils/url_utils';

export default function HomeContentReviewsItem({
  item: {
    _embedded, slug, artist: [artist], album: [album]
  }
}) {
  let src = getFeaturedImg(_embedded, getImgAsset('mstile-310x310.png'));

  return <div className='home__reviews-item'>
    <SamePageAnchor href={getFullUrl(`reviews/${slug}`)}>
      <img className='home__reviews-img' src={src} />
      <p className='home__title'>{artist}</p>
      <p className='home__subtitle'>{album}</p>
    </SamePageAnchor>
  </div>;
}
