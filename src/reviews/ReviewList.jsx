import React from 'react';
import Paginator from '../reusables/Paginator.jsx';
import ReviewItem from './ReviewItem.jsx';
import { HeadStuff } from '../reusables';
import { useApiRequest } from '../hooks';

function ReviewList() {
  let { numPages } = useApiRequest({
    numPages: undefined
  }, 'num_reviews', (data, fxn) => {
    fxn({ numPages: Math.ceil(parseInt(data, 10) / 8) });
  });

  return numPages ? [<HeadStuff title="Reviews" headerText="Music Reviews" />,
    <div className="reviews__content">
      <Paginator wrapper={ReviewItem} truncate={true} perPage={8} maxPages={numPages}
        apiUrl={(num, per) => `review?_embed&page=${num}&perPage=${per}`} />
    </div>] : null;
}

export default ReviewList;
