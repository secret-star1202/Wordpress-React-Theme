import React from 'react';
import { array, object } from 'prop-types';
import HomeContentPodcastItem from './HomeContentPodcastItem.jsx';
import { default as siteInfo } from '../utils/config';

function HomeContentPodcasts({ podcasts, history }) {
  return (
    <div className='home__podcast'>
      <a href={`${siteInfo.siteUrl}/podcasts`}>
        <h3 className="home__section">Podcasts</h3>
      </a>
      <a href={`${siteInfo.siteUrl}/podcasts`} className='home__more'>
        MORE PODCASTS{'  '}
        <span className='glyphicon glyphicon-arrow-right'/>
      </a>
      <div className='home__podcast-content' key='podcast-content'>
        {podcasts.slice(0, 3).map(item => (
          <HomeContentPodcastItem item={item} history={history} />)) }
      </div>
    </div>
  );
}

HomeContentPodcasts.propTypes = {
  podcasts: array,
  history: object
};

export default HomeContentPodcasts;
