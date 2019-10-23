import React from 'react';
import HomeContentReviewsItem from './HomeContentReviewsItem.jsx';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { getFullUrl } from '../utils/url_utils';
import Glyph from '../reusables/Glyph.jsx';
import useApiRequest from '../hooks/useApiRequest';

function HomeContentReviews() {
  let state = useApiRequest({
      reviews: []
    }, 'review?_embed&per_page=5', (data, fxn) => {
      fxn({ reviews: data || [] });
    }), { reviews } = state, link = getFullUrl('reviews');

  return reviews.length ? <div className='home__reviews'>
    <SamePageAnchor href={link}>
      <h3 className="home__section">MUSIC REVIEWS</h3>
    </SamePageAnchor>
    <SamePageAnchor href={link} className='home__more'>
      MORE REVIEWS{'  '}
      <Glyph symbol='arrow-right' />
    </SamePageAnchor>
    <div className='home__reviews-content'>
      {reviews.map(item => (<HomeContentReviewsItem {...{ item }} />))}
    </div>
  </div> : null;
}

export default HomeContentReviews;
