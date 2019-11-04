import React from 'react';
import { Paginator, HeadStuff } from '../reusables';
import { default as ReviewItem } from './ReviewItem';
import { default as useApiRequest } from '../hooks/useApiRequest';

function ReviewList() {
  let maxPages = useApiRequest(undefined, 'num_reviews', (data, fxn) => {
    if (data) fxn(Math.ceil(parseInt(data, 10) / 8));
  });

  return maxPages ? [<HeadStuff title="Reviews" headerText="Music Reviews" />,
    <div className="reviews__content">
      <Paginator {...{
        maxPages,
        perPage: 8,
        truncate: true,
        wrapper: ReviewItem,
        apiUrl: (num, per) => `review?_embed&page=${num}&perPage=${per}`
      }} />
    </div>] : null;
}

export default ReviewList;
