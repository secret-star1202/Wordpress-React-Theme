import React, { useState, useEffect } from 'react';
import EverAfter from 'react-everafter';
import { Metamorph } from 'react-metamorph';
import ReviewItem from './ReviewItem.jsx';
import getApiRequest from '../utils/get_api_request';

function ReviewList() {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    getApiRequest('review?_embed&per_page=42', ({ data }) => {
      setState({ reviews: data.length > 0 ? data : [] });
    });
  });

  let { reviews } = state;

  if (reviews.length) {
    return [<Metamorph title="Reviews - KTUH FM Honolulu | Radio for the People"
      description="KTUH Reviews" image='https://ktuh.org/img/ktuh-logo.jpg' />,
    <h2 className="general__header">Music Reviews</h2>,
    <div className="reviews__content">
      <EverAfter.Paginator wrapper={ReviewItem} truncate={true} perPage={8}
        items={reviews} />
    </div>];
  }
  return null;
}

export default ReviewList;
