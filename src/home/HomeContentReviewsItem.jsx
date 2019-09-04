import React from 'react';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

export default function HomeContentReviewsItem({
  item: {
    _embedded, slug, artist, title
  }
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url || undefined;

  return (
    <div className='home__reviews-item'>
      <SamePageAnchor href={`${siteInfo.siteUrl}/reviews/${slug}`}>
        <img className='home__reviews-img' src={featuredImage
        || `${siteInfo.siteUrl
        }/wp-content/themes/custom-react-theme/dist/images/mstile-310x310.png`} />
        <p className='home__title'>{artist}</p>
        <p className='home__subtitle'>{title}</p>
      </SamePageAnchor>
    </div>
  );
}
