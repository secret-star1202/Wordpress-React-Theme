import React from 'react';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { getFullUrl, getFeaturedImg, getImgAsset } from '../utils/url_utils';

export default function HomeContentReviewsItem({
  item: {
    _embedded, slug, artist, title
  }
}) {
  let src = getFeaturedImg(_embedded, getImgAsset('mstile-310x310.png'));

  return <div className='home__reviews-item'>
    <SamePageAnchor href={getFullUrl(`reviews/${slug}`)}>
      <img className='home__reviews-img' src={src} />
      <p className='home__title'>{artist}</p>
      <p className='home__subtitle'>{(title.rendered || title[0]).replace(/&#(\d+);/, function (match, p1) {
        return String.fromCharCode(parseInt(p1, 10));
      }).replace(new RegExp(`${artist} – `, 'i'), '')}</p>
    </SamePageAnchor>
  </div>;
}
