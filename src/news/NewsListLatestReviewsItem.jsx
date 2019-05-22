import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as siteInfo } from '../utils/config';

export default class NewsListLatestReviewsItem extends Component {
  static propTypes = {
    review: PropTypes.object
  };

  render() {
    let featuredImage = this.props.review._embedded && this.props.review._embedded['wp:featuredmedia'] &&
      this.props.review._embedded['wp:featuredmedia']['0'] &&
      this.props.review._embedded['wp:featuredmedia']['0'].source_url || undefined;

    return (
      <div className='news-list__latest-review'>
        <a href={`${siteInfo.siteUrl}/reviews/${this.props.review.slug}`}>
          <img src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
          <p><b>{this.props.review.artist[0]}</b></p>
          <p>{this.props.review.title[0]}</p>
        </a>
      </div>
    );
  }
}
