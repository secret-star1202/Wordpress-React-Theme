import React from 'react';
import PropTypes from 'prop-types';
import HomeContentReviewsItem from './HomeContentReviewsItem.jsx';
import { default as siteInfo } from '../utils/config';

function HomeContentReviews({ reviews }) {
  return (
    <div className='home__reviews'>
      <a href={`${siteInfo.siteUrl}/reviews`}>
        <h3 className="home__section">MUSIC REVIEWS</h3>
      </a>
      <a href={`${siteInfo.siteUrl}/reviews`} className='home__more' key='reviews-more'>
        MORE REVIEWS{'  '}
        <span className='glyphicon glyphicon-arrow-right'></span>
      </a>
      <div className='home__reviews-content' key='reviews-content'>
        {reviews.slice(0, 5).map(item => (
          <HomeContentReviewsItem item={item} />))}
      </div>
    </div>
  );
}

HomeContentReviews.propTypes = {
  reviews: PropTypes.array
};

export default HomeContentReviews;
