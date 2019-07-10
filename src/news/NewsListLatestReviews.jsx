import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import { get as axget } from 'axios';
import NewsListLatestReviewsItem from './NewsListLatestReviewsItem.jsx';
import { default as siteInfo } from '../utils/config';

function NewsListLatestReviews({ history }) {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed`
    ).then(({ data }) => {
      setState({ reviews: data.length ? data : [] });
    });
  });

  let { reviews } = state;

  if (reviews && reviews.length) {
    return <div className='news-list__latest-reviews'>
      <h4>LATEST REVIEWS</h4>
      {reviews.map(review => (
        <NewsListLatestReviewsItem {...{ review, history }} />))}
    </div>;
  } return null;
}

export default NewsListLatestReviews;

NewsListLatestReviews.propTypes = {
  history: object
};
