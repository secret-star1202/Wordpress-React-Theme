import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { get as axget } from 'axios';
import { Redirect } from 'react-router-dom';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import useParamMatch from '../hooks/useParamMatch';

function ReviewPage() {
  let { slug } = useParamMatch(['slug']), [state, setState] = useState({
    review: undefined
  });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed&slug=${
        slug.replace(/\/$/, '')}`
    ).then(
      ({ data }) => {
        setState({ review: data.length > 0 ? data[0] : null });
      }
    );
  }, []);

  function formattedRating(rating) {
    return (rating % 1 !== 0.5) ? `${Number(rating).toString()}.0` : rating;
  }

  let { review } = state;

  if (review) {
    let {
      _embedded, title: [title], artist: [artist], rating: [rating],
      date_gmt: submitted, content
    } = review;

    let featuredImage = _embedded && _embedded['wp:featuredmedia']
      && _embedded['wp:featuredmedia']['0']
      && _embedded['wp:featuredmedia']['0'].source_url || undefined;

    return [
      <Metamorph title={`Review of "${title} by ${artist}`
      + ' - KTUH FM Honolulu | Radio for the People'} description={
        `Review of ${title} by ${artist}`}
      image={featuredImage || 'https://ktuh.org/img/ktuh-logo.jpg'} />,
      <h1 className="general__header" key='header'>
        <b>{title}</b><br />{artist}</h1>,
      <div className='review__link' key='back-link'>
        <SamePageAnchor href='/reviews' className='back-to'>
          ← all reviews
        </SamePageAnchor>
      </div>,
      <div className="review__content" key='review-content'>
        <img className='review-page__image'
          src={featuredImage || 'https://ktuh.org/img/ktuh-logo.jpg'} />
        <div className='review-page__copy'>
          <h4 className='review-page__rating'>
            {`${formattedRating(rating)} / 5.0`}</h4>
          <div className='review-page__byline'>
            {`Review by KTUH FM • ${new Date(submitted).toDateString()}`}
          </div>
          <div className='review-page__body' dangerouslySetInnerHTML=
            {{ __html: content.rendered }}/>
        </div>
      </div>
    ];
  }
  if (review === null) {
    return <Redirect to='/not-found' />;
  }
  if (review === undefined) {
    return null;
  }
}

export default ReviewPage;
