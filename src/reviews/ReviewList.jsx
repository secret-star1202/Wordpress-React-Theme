import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import EverAfter from 'react-everafter';
import { Metamorph } from 'react-metamorph';
import { get as axget } from 'axios';
import ReviewItem from './ReviewItem.jsx';
import { default as siteInfo } from '../utils/config';

function ReviewList({ history }) {
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

  function ReviewItemWithHistory({ item }) {
    return <ReviewItem {... { item, history }} />;
  }

  ReviewItemWithHistory.propTypes = {
    item: object
  };

  let { reviews } = state;

  if (reviews && reviews.length) {
    return [<Metamorph title="Reviews - KTUH FM Honolulu | Radio for the People"
      description="KTUH Reviews" image='https://ktuh.org/img/ktuh-logo.jpg'
    />,
    <h2 className="general__header" key="header-title">Reviews</h2>,
    <div className="reviews__content" key="reviews-content">
      <EverAfter.Paginator wrapper={ReviewItemWithHistory} perPage={11}
        items={reviews} />
    </div>];
  }
  return null;
}

export default ReviewList;

ReviewList.propTypes = {
  history: object
};
