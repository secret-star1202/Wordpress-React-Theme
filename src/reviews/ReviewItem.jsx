import React from 'react';
import PropTypes from 'prop-types';
import { default as siteInfo } from '../utils/config';

function ReviewItem({
  item: {
    _embedded, slug, title, artist
  }
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url || undefined;

  return (
    <div className='review-item'>
      <a href={`${siteInfo.siteUrl}/reviews/${slug}`}>
        <img className='review-item__image'
          src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
        <div className='review-item__release'>
          {title[0]}
        </div>
        <div className='review-item__artist'>
          {artist[0]}
        </div>
      </a>
    </div>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.object
};

export default ReviewItem;
