import React from 'react';
import NewsListLatestReviewsItem from './NewsListLatestReviewsItem.jsx';
import useApiRequest from '../hooks/useApiRequest';

function NewsListLatestReviews() {
  let state = useApiRequest({
      reviews: []
    }, 'review?_embed', (reviews, fxn) => {
      fxn({ reviews });
    }), { reviews } = state;

  if (reviews.length) {
    return <div className='news-list__latest-reviews'>
      <h4>LATEST REVIEWS</h4>
      {reviews.map(review => <NewsListLatestReviewsItem {...{ review }} />)}
    </div>;
  } return null;
}

export default NewsListLatestReviews;
