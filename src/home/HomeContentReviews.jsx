import React, { useEffect, useState } from 'react';
import { get as axget } from 'axios';
import HomeContentReviewsItem from './HomeContentReviewsItem.jsx';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function HomeContentReviews() {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    axget(`${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed&per_page=6`)
      .then(({ data }) => {
        setState({ reviews: data });
      });
  }, []);

  let { reviews } = state;

  return reviews && reviews.length ? <div className='home__reviews'>
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
  </div> : null;
}

export default HomeContentReviews;
