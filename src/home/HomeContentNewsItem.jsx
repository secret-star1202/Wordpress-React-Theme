import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderSummary, usernameById, displayNameById, timeDiffString }
  from '../../../startup/lib/helpers.js';
import { siteUrl } from "../utils/config";

export default class HomeContentNewsItem extends Component {
  static propTypes = {
    item: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home__news-item'>
        <a href={'/radioblog/' + this.props.item.slug}>
          <img className='home__news-img'
            src={`${siteUrl}/wp-content/themes/custom-react-theme/dist/images/mstile-310x310.png`} />
          <h4 className='home__title'>{this.props.item.title}</h4>
        </a>
        <p className='home__synopsis'>
          {this.props.item.content.rendered}
        </p>
        <p className='home__byline'>
          by KTUH FM / {timeDiffString(
            this.props.item.submitted)}
        </p>
      </div>
    );
  }
}
