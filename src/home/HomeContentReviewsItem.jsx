import React from 'react';
import PropTypes from 'prop-types';
import { default as siteInfo } from '../utils/config';

export default function HomeContentReviewsItem({ item }) {
  let featuredImage = item._embedded && item._embedded['wp:featuredmedia']
    && item._embedded['wp:featuredmedia']['0']
    && item._embedded['wp:featuredmedia']['0'].source_url
    || undefined;

  return (
    <div className='home__reviews-item'>
      <a href={`${siteInfo.siteUrl}/reviews/${item.slug}`}>
        <img className='home__reviews-img' src={featuredImage
        || `${siteInfo.siteUrl
        }/wp-content/themes/custom-react-theme/dist/images/mstile-310x310.png`} />
        <p className='home__title'>{item.artist}</p>
        <p className='home__subtitle'>{item.title}</p>
      </a>
    </div>
  );
}

HomeContentReviewsItem.propTypes = {
  item: PropTypes.object
};
