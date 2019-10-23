import React from 'react';
import BackButton from '../reusables/BackButton.jsx';
import { useSlug } from '../hooks/useGeneralContext';
import { getFeaturedImg } from '../utils/url_utils';
import NotFoundRedirect from '../utils/404_redirect';
import HeadStuff from '../reusables/HeadStuff.jsx';
import ContentBox from '../reusables/ContentBox.jsx';
import useApiRequest from '../hooks/useApiRequest';

function ReviewPage() {
  function formattedRating(rating) {
    return (rating % 1 !== 0.5) ? `${Number(rating).toString()}.0` : rating;
  }

  let slug = useSlug(), { review } = useApiRequest({
    review: undefined
  }, `review?_embed&slug=${slug.replace(/\/$/, '')}`, (data, fxn) => {
    fxn({ review: data.length > 0 ? data[0] : null });
  });

  if (review) {
    let {
      _embedded, title: [title], artist: [artist], rating: [rating],
      date_gmt: submitted, content: { rendered: content }
    } = review;

    let src = getFeaturedImg(_embedded);

    return [
      <HeadStuff title={`Review of "${title}" by ${artist}"`} image={src}
        headerText={`${title}\n${artist}`}/>,
      <BackButton className='review__link' href='reviews' text='← all reviews' />,
      <div className="review__content">
        <img className='review-page__image' {...{ src }} />
        <div className='review-page__copy'>
          <h4 className='review-page__rating'>
            {`${formattedRating(rating)} / 5.0`}</h4>
          <div className='review-page__byline'>
            {`Review by KTUH FM • ${new Date(submitted).toDateString()}`}
          </div>
          <ContentBox className='review-page__body' {...{ content }}/>
        </div>
      </div>
    ];
  }
  return <NotFoundRedirect check={review} />;
}

export default ReviewPage;
