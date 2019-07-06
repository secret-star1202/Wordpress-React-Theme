import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import { Metamorph } from 'react-metamorph';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function ReviewPage({ match, history }) {
  let [state, setState] = useState({
    review: undefined
  });

  useEffect(function () {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed&slug=${
        match.params.slug.replace(/\/$/, '')}`
    ).then(
      ({ data }) => {
        setState({ review: data.length > 0 ? data[0] : null });
      }
    );
  }, []);

  function formattedRating(rating) {
    return (rating % 1 !== 0.5) ? `${Number(rating).toString()}.0` : rating;
  }

  if (state.review) {
    let { review } = state, featuredImage = review._embedded
      && review._embedded['wp:featuredmedia']
      && review._embedded['wp:featuredmedia']['0']
      && review._embedded['wp:featuredmedia']['0'].source_url
      || undefined;

    return [
      <Metamorph title={`Review of "${review.title[0]} by ${review.artist[0]}`
      + ' - KTUH FM Honolulu | Radio for the People'} description={
        `Review of ${review.title[0]} by ${review.artist[0]}`}
      image={featuredImage || 'https://ktuh.org/img/ktuh-logo.jpg'} />,
      <h1 className="general__header" key='header'>
        <b>{review.title[0]}</b><br />
        {review.artist[0]}</h1>,
      <div className='review__link' key='back-link'>
        <SamePageAnchor history={history} href='/reviews' className='back-to'>
          ← all reviews
        </SamePageAnchor>
      </div>,
      <div className="review__content" key='review-content'>
        <img className='review-page__image'
          src={featuredImage || 'https://ktuh.org/img/ktuh-logo.jpg'} />
        <div className='review-page__copy'>
          <h4 className='review-page__rating'>
            {`${formattedRating(review.rating[0])} / 5.0`}</h4>
          <div className='review-page__byline'>
            {`Review by KTUH FM • ${
              moment(review.submitted).fromNow()}`}
          </div>
          <div className='review-page__body' dangerouslySetInnerHTML=
            {{ __html: review.content.rendered }}/>
        </div>
      </div>
    ];
  }
  if (state.review === null) {
    return <Redirect to='/not-found' />;
  }
  if (state.review === undefined) {
    return null;
  }
}
ReviewPage.propTypes = {
  match: object,
  history: object
};

export default ReviewPage;
