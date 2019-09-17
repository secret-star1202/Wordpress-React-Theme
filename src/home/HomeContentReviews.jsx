import React, { useEffect, useState } from 'react';
import HomeContentReviewsItem from './HomeContentReviewsItem.jsx';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { getApiRequest, getFullUrl } from '../utils/url_utils';
import Glyph from '../reusables/Glyph.jsx';

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
      <Glyph symbol='arrow-right' />
    </SamePageAnchor>
    <div className='home__reviews-content'>
      {reviews.slice(0, 5).map(item => (
        <HomeContentReviewsItem {...{ item }} />))}
    </div>
  </div> : null;
}

export default HomeContentReviews;
