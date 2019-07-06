import React from 'react';
import { object } from 'prop-types';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

export default function NewsListLatestReviewsItem({ review, history }) {
  let featuredImage = review._embedded
    && review._embedded['wp:featuredmedia']
    && review._embedded['wp:featuredmedia']['0']
    && review._embedded['wp:featuredmedia']['0'].source_url || undefined;

  return (
    <div className='news-list__latest-review'>
      <SamePageAnchor history={history}
        href={`${siteInfo.siteUrl}/reviews/${review.slug}`}>
        <img src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
        <p><b>{review.artist[0]}</b></p>
        <p>{review.title[0]}</p>
      </SamePageAnchor>
    </div>
  );
}

NewsListLatestReviewsItem.propTypes = {
  review: object,
  history: object
};
