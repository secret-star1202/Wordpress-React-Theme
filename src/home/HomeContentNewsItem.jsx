import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as siteInfo } from "../utils/config";
import renderSummary from '../utils/summary';

export default class HomeContentNewsItem extends Component {
  static propTypes = {
    item: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    var featuredImage = this.props.item._embedded && this.props.item._embedded['wp:featuredmedia'] &&
      this.props.item._embedded['wp:featuredmedia']['0'] &&
      this.props.item._embedded['wp:featuredmedia']['0'].source_url || undefined;

    return (
      <div className='home__news-item'>
        <a href={this.props.item.link}>
          <img className='home__news-img'
            src={featuredImage ||
            `${siteInfo.siteUrl}/wp-content/themes/custom-react-theme/dist/images/mstile-310x310.png`} />
          <h4 className='home__title'>{this.props.item.title.rendered}</h4>
        </a>
        <p className='home__synopsis'>
          {renderSummary(this.props.item.content.rendered, 50)}
        </p>
        <p className='home__byline'>
          by KTUH FM / {this.props.item.date.toString()}
        </p>
      </div>
    );
  }
}
