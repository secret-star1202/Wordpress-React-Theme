import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';

export default class HomeContentNews extends Component {
  static propTypes = {
    ready: PropTypes.bool,
    posts: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.ready)
      return (
        <div className='home__news'>
          <a href='/radioblog'>
            <h3 className='home__section'>RADIOBLOG</h3>
          </a>
          <a href='/radioblog' className='home__more'>
            MORE NEWS{'  '}
            <span className='glyphicon glyphicon-arrow-right'></span>
          </a>
          <div className='home__news-content'>
            {this.props.posts.map((item) => (
              <HomeContentNewsItem item={item} />))}
          </div>
        </div>
      );
    else return null;
  }
}
