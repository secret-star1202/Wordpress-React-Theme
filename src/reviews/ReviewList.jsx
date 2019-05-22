import React, { Component } from 'react';
import ReviewItem from './ReviewItem.jsx';
import EverAfter from 'react-everafter';
import { Metamorph } from 'react-metamorph';
import axios from 'axios';
import { default as siteInfo } from "../utils/config";

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    let self = this;
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed`).then(
      res => {
        self.setState({ reviews: res.data.length > 0 ? res.data : [] });
      }
    );
  }

  render() {
    if (this.state.reviews && this.state.reviews.length > 0)
      return [
        <Metamorph title="Reviews - KTUH FM Honolulu | Radio for the People"
          description="KTUH Reviews" image='https://ktuh.org/img/ktuh-logo.jpg'
        />,
        <h2 className="general__header" key="header-title">Reviews</h2>,
        <div className="reviews__content" key="reviews-content">
          <EverAfter.Paginator wrapper={ReviewItem} perPage={8}
            items={this.state.reviews} />
        </div>
      ];
    else return null;
  }
}

export default ReviewList;
