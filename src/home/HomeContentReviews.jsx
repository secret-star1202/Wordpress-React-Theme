import React from 'react';
import { array } from 'prop-types';
import HomeContentReviewsItem from './HomeContentReviewsItem.jsx';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function HomeContentReviews({ reviews }) {
  return (
    <div className='home__reviews'>
      <SamePageAnchor href={`${siteInfo.siteUrl}/reviews`}>
        <h3 className="home__section">MUSIC REVIEWS</h3>
      </SamePageAnchor>
      <SamePageAnchor href={`${siteInfo.siteUrl}/reviews`}
        className='home__more' key='reviews-more'>
        MORE REVIEWS{'  '}
        <span className='glyphicon glyphicon-arrow-right'></span>
      </SamePageAnchor>
      <div className='home__reviews-content' key='reviews-content'>
        {reviews.slice(0, 5).map(item => (
          <HomeContentReviewsItem {...{ item }} />))}
      </div>
    </div>
  );
}

HomeContentReviews.propTypes = {
  reviews: array
};

export default HomeContentReviews;
