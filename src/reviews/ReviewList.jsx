import React, { useState, useEffect } from 'react';
import EverAfter from 'react-everafter';
import { Metamorph } from 'react-metamorph';
import { get as axget } from 'axios';
import ReviewItem from './ReviewItem.jsx';
import { default as siteInfo } from '../utils/config';

function ReviewList() {
  let [state, setState] = useState({
    reviews: []
  });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed&per_page=42`
    ).then(({ data }) => {
      setState({ reviews: data.length > 0 ? data : [] });
    });
  });

  let { reviews } = state;

  if (reviews && reviews.length) {
    return [<Metamorph title="Reviews - KTUH FM Honolulu | Radio for the People"
      description="KTUH Reviews" image='https://ktuh.org/img/ktuh-logo.jpg'
    />,
    <h2 className="general__header" key="header-title">Music Reviews</h2>,
    <div className="reviews__content" key="reviews-content">
      <EverAfter.Paginator wrapper={ReviewItem} truncate={true} perPage={8}
        items={reviews} />
    </div>];
  }
  return null;
}

export default ReviewList;
