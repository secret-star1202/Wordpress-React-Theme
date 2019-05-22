import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Metamorph } from 'react-metamorph';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { default as siteInfo } from '../utils/config';
import moment from 'moment';

class ReviewPage extends Component {
  static propTypes = {
    match: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      review: undefined
    }
  }

  componentWillMount() {
    let self = this;
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed&slug=${
          this.props.match.params.slug.replace(/\/$/, '')}`).then(
      res => {
        self.setState({ review: res.data.length > 0 ? res.data[0] : null });
      }
    );
  }

  formattedRating(rating) {
    if (rating % 1 !== .5) return Number(rating).toString() + '.0';
    else return rating;
  }

  render() {
    if (this.state.review) {
      let featuredImage = this.state.review._embedded && this.state.review._embedded['wp:featuredmedia'] &&
        this.state.review._embedded['wp:featuredmedia']['0'] &&
        this.state.review._embedded['wp:featuredmedia']['0'].source_url || undefined;

      return [
        <Metamorph title={'Review of "' + this.state.review.title[0] +
          '" by ' + this.state.review.artist[0] + ' - KTUH FM Honolulu | ' +
        'Radio for the People'} description={'Review of ' +
          this.state.review.title[0] + ' by ' + this.state.review.artist[0]}
        image={featuredImage ||
          'https://ktuh.org/img/ktuh-logo.jpg'} />,
        <h1 className="general__header" key='header'>
          <b>{this.state.review.title[0]}</b>
          <br />{this.state.review.artist[0]}</h1>,
        <div className='review__link' key='back-link'>
          <a href='/reviews' className='back-to'>← all reviews</a>
        </div>,
        <div className="review__content" key='review-content'>
          <img className='review-page__image'
            src={featuredImage || 'https://ktuh.org/img/ktuh-logo.jpg'} />
          <div className='review-page__copy'>
            <h4 className='review-page__rating'>
              {this.formattedRating(this.state.review.rating[0]) + ' / 5.0'}</h4>
            <div className='review-page__byline'>
              {'Review by KTUH FM • ' + moment(this.state.review.submitted).fromNow()}
            </div>
            <div className='review-page__body' dangerouslySetInnerHTML=
              {{ __html: this.state.review.content.rendered }}/>
          </div>
        </div>
      ];
    }
    else if (this.state.review === null) {
      return <Redirect to='/not-found' />;
    }
    else if (this.state.review === undefined) {
      return null;
    }
  }
}

export default ReviewPage;
