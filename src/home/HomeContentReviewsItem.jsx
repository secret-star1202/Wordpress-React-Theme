import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { default as siteInfo } from '../utils/config'
export default class HomeContentReviewsItem extends Component {
  static propTypes = {
    item: PropTypes.object
  };

  render() {
    return (
      <div key={this.props.item._id} className='home__reviews-item'>
        <a href={'/reviews/' + this.props.item.slug}>
          <img className='home__reviews-img'
            src={`${siteInfo.siteUrl}/wp-content/themes/custom-react-theme/dist/images/mstile-310x310.png`} />
          <p className='home__title'>{this.props.item.artist}</p>
          <p className='home__subtitle'>{this.props.item.title}</p>
        </a>
      </div>
    );
  }
}
