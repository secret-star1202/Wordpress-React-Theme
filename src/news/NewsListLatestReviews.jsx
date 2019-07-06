import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import axios from 'axios';
import NewsListLatestReviewsItem from './NewsListLatestReviewsItem.jsx';
import { default as siteInfo } from '../utils/config';

function NewsListLatestReviews({ history }) {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed`
    ).then((res) => {
      setState({ reviews: res.data.length > 0 ? res.data : [] });
    });
  });

  if (state.reviews && state.reviews.length) {
    return <div className='news-list__latest-reviews'>
      <h4>LATEST REVIEWS</h4>
      {state.reviews.map(review => (
        <NewsListLatestReviewsItem review={review} history={history} />))}
    </div>;
  } return null;
}

export default NewsListLatestReviews;

NewsListLatestReviews.propTypes = {
  history: object
};
