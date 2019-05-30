import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeContentPodcastItem from './HomeContentPodcastItem.jsx';
import { default as siteInfo } from '../utils/config';

class HomeContentReviews extends Component {
  static propTypes = {
    podcast: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='home__podcast'>
          <a href={siteInfo.siteUrl + '/podcasts'}>
            <h3 className="home__section">Podcast</h3>
          </a>
          <a href={siteInfo.siteUrl + '/podcasts'} className='home__more' key='reviews-more'>
            MORE PODCASTS{'  '}
            <span className='glyphicon glyphicon-arrow-right'/>
          </a>
          <div className='home__podcast-content' key='podcast-content'>
                <HomeContentPodcastItem />
          </div>
        </div>
    );
  }
}

export default HomeContentReviews;
