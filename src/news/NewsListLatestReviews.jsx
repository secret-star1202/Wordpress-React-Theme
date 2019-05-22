import React, { Component } from 'react';
import NewsListLatestReviewsItem from './NewsListLatestReviewsItem.jsx';
import axios from "axios";
import {default as siteInfo} from "../utils/config";

class NewsListLatestReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
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
    if (this.state.reviews && this.state.reviews.length > 0) return (
      <div className='news-list__latest-reviews'>
        <h4>LATEST REVIEWS</h4>
        {this.state.reviews.map((review) => (
          <NewsListLatestReviewsItem review={review} />))}
      </div>
    );
    else return null;
  }
}

export default NewsListLatestReviews;
