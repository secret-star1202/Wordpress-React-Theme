import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as siteInfo } from '../utils/config';

export default class ReviewItem extends Component {
  static propTypes = {
    item: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    let featuredImage = this.props.item._embedded && this.props.item._embedded['wp:featuredmedia'] &&
      this.props.item._embedded['wp:featuredmedia']['0'] &&
      this.props.item._embedded['wp:featuredmedia']['0'].source_url || undefined;

    return (
      <div className='review-item'>
        <a href={siteInfo.siteUrl + '/reviews/' + this.props.item.slug}>
          <img className='review-item__image'
            src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
          <div className='review-item__release'>
            {this.props.item.title[0]}
          </div>
          <div className='review-item__artist'>
            {this.props.item.artist[0]}
          </div>
        </a>
      </div>
    );
  }
}
