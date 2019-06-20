import React from 'react';
import PropTypes from 'prop-types';
import { default as siteInfo } from '../utils/config';

export default function NewsListLatestReviewsItem({ review }) {
  let featuredImage = review._embedded
    && review._embedded['wp:featuredmedia']
    && review._embedded['wp:featuredmedia']['0']
    && review._embedded['wp:featuredmedia']['0'].source_url || undefined;

  return (
    <div className='news-list__latest-review'>
      <a href={`${siteInfo.siteUrl}/reviews/${review.slug}`}>
        <img src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
        <p><b>{review.artist[0]}</b></p>
        <p>{review.title[0]}</p>
      </a>
    </div>
  );
}

NewsListLatestReviewsItem.propTypes = {
  review: PropTypes.object
};
