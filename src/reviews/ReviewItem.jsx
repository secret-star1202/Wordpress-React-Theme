import React from 'react';
import { object } from 'prop-types';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function ReviewItem({
  item: {
    _embedded, slug, title, artist
  },
  history
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url || undefined;

  return (
    <div className='review-item'>
      <SamePageAnchor history={history}
        href={`${siteInfo.siteUrl}/reviews/${slug}`}>
        <img className='review-item__image'
          src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
        <div className='review-item__release'>
          {title[0]}
        </div>
        <div className='review-item__artist'>
          {artist[0]}
        </div>
      </SamePageAnchor>
    </div>
  );
}

ReviewItem.propTypes = {
  item: object,
  history: object
};

export default ReviewItem;
