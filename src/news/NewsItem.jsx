import React, { Component } from 'react';
import PropTypes from 'prop-types';
import renderSummary from '../utils/summary';
import { default as siteInfo } from '../utils/config';

export default class NewsItem extends Component {
  static propTypes = {
    item: PropTypes.object
  };

  shouldComponentUpdate() {
    return true;
  }

  render() {
    let featuredImage = this.props.item._embedded && this.props.item._embedded['wp:featuredmedia'] &&
      this.props.item._embedded['wp:featuredmedia']['0'] &&
      this.props.item._embedded['wp:featuredmedia']['0'].source_url || undefined;

    return (
      <div className='news-list__post'>
        <div className='news-list__post-image'>
          <span className='purple-tag'>Radioblog</span>
          <a className="news-list__photo-link" href={}>
            <img className='news-list__photo'
              src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
          </a>
        </div>
        <div className='news-list__info'>
          <a className='news-list__title'
            href={path}>
            <h3>{this.props.item.title.rendered}</h3>
          </a>
          <p className='news-list__excerpt'>
            {renderSummary(this.props.item.content.rendered, 50)}
            {'  '}
            <a className='purple-text' href={`${siteInfo.siteUrl}/radioblog/${this.props.item.slug}`}>
              <i>Read On</i>
            </a>
          </p>
          <br />
          <p className='news-list__byline'>by KTUH FM</p>
        </div>
      </div>
    );
  }
}
