import React from 'react';
import useSlugRequest from '../hooks/useSlugRequest';
import { getFeaturedImg } from '../utils/url_utils';
import { default as NotFoundRedirect } from '../utils/404_redirect';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { default as ContentBox } from '../reusables/ContentBox';
import { default as BackButton } from '../reusables/BackButton';

function ReviewPage() {
  function formattedRating(rating) {
    return (rating % 1 !== 0.5) ? `${Number(rating).toString()}.0` : rating;
  }

  let review = useSlugRequest(undefined,
    (slug) => `review?_embed&slug=${slug}`, (data, fxn) => {
      if (data) { fxn(data.length > 0 ? data[0] : null); }
    });

  if (review) {
    let {
      _embedded, album: [album], artist: [artist], rating: [rating], label: [label],
      date_gmt: submitted, content: { rendered: content }
    } = review;

    let src = getFeaturedImg(_embedded);

    return [
      <HeadStuff title={`Review of "${album}" by ${artist}`} image={src}
        headerText={`${artist} - ${album}`}/>,
      <BackButton className='review__link' href='reviews' text='all reviews' />,
      <div className="review__content">
        <img className='review-page__image' {...{ src }} />
        <div className='review-page__copy'>
          <h4>
            {`${formattedRating(rating)} / 5.0`}</h4>
          <div className='review-page__byline'>
            {label}
          </div>
          <div className='review-page__byline'>
            Posted on {new Date(submitted).toDateString()}
          </div>
          <ContentBox className='review-page__body' {...{ content }}/>
        </div>
      </div>
    ];
  }
  return <NotFoundRedirect check={review} />;
}

export default ReviewPage;
