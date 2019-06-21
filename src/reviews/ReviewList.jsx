import React, { useState, useEffect } from 'react';
import EverAfter from 'react-everafter';
import { Metamorph } from 'react-metamorph';
import axios from 'axios';
import ReviewItem from './ReviewItem.jsx';
import { default as siteInfo } from '../utils/config';

function ReviewList() {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed&per_page=42`
    ).then((res) => {
      setState({ reviews: res.data.length > 0 ? res.data : [] });
    });
  });

  if (state.reviews && state.reviews.length) {
    return [
      <Metamorph title="Reviews - KTUH FM Honolulu | Radio for the People"
        description="KTUH Reviews" image='https://ktuh.org/img/ktuh-logo.jpg'
      />,
      <h2 className="general__header" key="header-title">Reviews</h2>,
      <div className="reviews__content" key="reviews-content">
        <EverAfter.Paginator wrapper={ReviewItem} perPage={11}
          items={state.reviews} />
      </div>
    ];
  }
  return null;
}

export default ReviewList;
