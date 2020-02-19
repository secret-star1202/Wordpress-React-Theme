import React from 'react';
import NewsListLatestReviewsItem from './NewsListLatestReviewsItem';
import { default as useApiRequest } from '../hooks/useApiRequest';

function NewsListLatestReviews() {
  let reviews = useApiRequest([], 'review?_embed');
  return <div className='news-list__latest-reviews'>
      <h4>LATEST REVIEWS</h4>
      {reviews.map((review) => <NewsListLatestReviewsItem {...{ review }} />)}
    </div>;
}

export default NewsListLatestReviews;
