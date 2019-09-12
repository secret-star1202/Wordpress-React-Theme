import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import useSlug from '../hooks/useSlug';
import getApiRequest from '../utils/get_api_request';

function ReviewPage() {
  let slug = useSlug(), [state, setState] = useState({
    review: undefined
  });

  useEffect(function () {
    getApiRequest(
      `review?_embed&slug=${slug.replace(/\/$/, '')}`, ({ data }) => {
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
      date_gmt: submitted, content: { rendered: content }
    } = review;

    let featuredImage = _embedded && _embedded['wp:featuredmedia']
      && _embedded['wp:featuredmedia']['0']
      && _embedded['wp:featuredmedia']['0'].source_url
      || 'https://ktuh.org/img/ktuh-logo.jpg';

    return [
      <Metamorph title={`Review of "${title} by ${artist
      } - KTUH FM Honolulu | Radio for the People`} description={
        `Review of ${title} by ${artist}`} image={featuredImage} />,
      <h1 className="general__header"><b>{title}</b><br />{artist}</h1>,
      <div className='review__link'>
        <SamePageAnchor href='/reviews' className='back-to'>
          ← all reviews
        </SamePageAnchor>
      </div>,
      <div className="review__content">
        <img className='review-page__image' src={featuredImage} />
        <div className='review-page__copy'>
          <h4 className='review-page__rating'>
            {`${formattedRating(rating)} / 5.0`}</h4>
          <div className='review-page__byline'>
            {`Review by KTUH FM • ${new Date(submitted).toDateString()}`}
          </div>
          <div className='review-page__body' dangerouslySetInnerHTML=
            {{ __html: content }}/>
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
