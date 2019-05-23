import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';
import { default as siteInfo } from '../utils/config';

export default class HomeContentNews extends Component {
  static propTypes = {
    posts: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className='home__news'>
          <a href={siteInfo.siteUrl + '/radioblog'}>
            <h3 className='home__section'>RADIOBLOG</h3>
          </a>
          <a href={siteInfo.siteUrl + '/radioblog'} className='home__more'>
            MORE NEWS{'  '}
            <span className='glyphicon glyphicon-arrow-right'></span>
          </a>
          <div className='home__news-content'>
            {this.props.posts.map((item) => (
              <HomeContentNewsItem item={item} />))}
          </div>
        </div>
      );
  }
}
