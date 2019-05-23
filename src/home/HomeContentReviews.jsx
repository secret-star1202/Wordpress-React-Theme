import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeContentReviewsItem from './HomeContentReviewsItem.jsx';
import { default as siteInfo } from "../utils/config";

class HomeContentReviews extends Component {
  static propTypes = {
    reviews: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home__reviews'>
        <a href={siteInfo.siteUrl + '/reviews'}>
          <h3 className="home__section">MUSIC REVIEWS</h3>
        </a>
        <a href={siteInfo.siteUrl + '/reviews'} className='home__more' key='reviews-more'>
          MORE REVIEWS{'  '}
          <span className='glyphicon glyphicon-arrow-right'></span>
        </a>
        <div className='home__reviews-content' key='reviews-content'>
          {this.props.reviews.map((item) => (
            <HomeContentReviewsItem item={item} />))}
        </div>
      </div>
    );
  }
}

export default HomeContentReviews;
