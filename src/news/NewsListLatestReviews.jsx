import React from 'react';
import NewsListLatestReviewsItem from './NewsListLatestReviewsItem.jsx';
import { useApiRequest } from '../hooks';

function NewsListLatestReviews() {
  let reviews = useApiRequest([], 'review?_embed', (data, fxn) => {
      if (data) fxn(data);
    });

  if (reviews.length) {
    return <div className='news-list__latest-reviews'>
      <h4>LATEST REVIEWS</h4>
      {reviews.map(review => <NewsListLatestReviewsItem {...{ review }} />)}
    </div>;
  } return null;
}

export default NewsListLatestReviews;
