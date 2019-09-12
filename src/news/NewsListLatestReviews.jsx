import React, { useState, useEffect } from 'react';
import NewsListLatestReviewsItem from './NewsListLatestReviewsItem.jsx';
import getApiRequest from '../utils/get_api_request';

function NewsListLatestReviews() {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    getApiRequest('review?_embed', ({ data }) => {
      setState({ reviews: data.length ? data : [] });
    });
  });

  let { reviews } = state;

  if (reviews && reviews.length) {
    return <div className='news-list__latest-reviews'>
      <h4>LATEST REVIEWS</h4>
      {reviews.map(review => <NewsListLatestReviewsItem {...{ review }} />)}
    </div>;
  } return null;
}

export default NewsListLatestReviews;
