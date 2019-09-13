import React, { useEffect, useState } from 'react';
import HomeContentReviewsItem from './HomeContentReviewsItem.jsx';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getApiRequest from '../utils/get_api_request';
import getFullUrl from '../utils/get_full_url';

function HomeContentReviews() {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    getApiRequest('review?_embed&per_page=6', ({ data }) => {
      setState({ reviews: data || [] });
    });
  }, []);

  let { reviews } = state, link = getFullUrl('reviews');

  return reviews.length ? <div className='home__reviews'>
    <SamePageAnchor href={link}>
      <h3 className="home__section">MUSIC REVIEWS</h3>
    </SamePageAnchor>
    <SamePageAnchor href={link} className='home__more'>
      MORE REVIEWS{'  '}
      <span className='glyphicon glyphicon-arrow-right'></span>
    </SamePageAnchor>
    <div className='home__reviews-content'>
      {reviews.slice(0, 5).map(item => (
        <HomeContentReviewsItem {...{ item }} />))}
    </div>
  </div> : null;
}

export default HomeContentReviews;
