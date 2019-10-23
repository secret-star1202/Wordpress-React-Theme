import React from 'react';
import { Paginator } from 'react-everafter';
import ReviewItem from './ReviewItem.jsx';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff.jsx';

function ReviewList() {
  let state = useApiRequest({
      reviews: []
    }, 'review?_embed&per_page=42', (data, fxn) => {
      fxn({ reviews: data.length > 0 ? data : [] });
    }), { reviews: items } = state;

  if (items.length) {
    return [<HeadStuff title="Reviews" headerText="Music Reviews" />,
    <div className="reviews__content">
      <Paginator wrapper={ReviewItem} truncate perPage={8} {...{ items }} />
    </div>];
  }
  return null;
}

export default ReviewList;
