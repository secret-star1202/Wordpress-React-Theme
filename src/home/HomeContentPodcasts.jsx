import React, { useEffect, useState } from 'react';
import { array } from 'prop-types';
import { get as axget } from 'axios';
import HomeContentPodcastItem from './HomeContentPodcastItem.jsx';
import { default as siteInfo } from '../utils/config';

function HomeContentPodcasts() {
  let [state, setState] = useState({
    podcasts: []
  });

  useEffect(function () {
    axget(`${siteInfo.siteUrl}/wp-json/wp/v2/podcast?_embed&per_page=6`)
      .then(({ data }) => {
        setState({
          podcasts: data
        });
      });
  }, []);

  let { podcasts } = state;

  return podcasts && podcasts.length ? <div className='home__podcast'>
    <a href={`${siteInfo.siteUrl}/podcasts`}>
      <h3 className="home__section">Podcasts</h3>
    </a>
    <a href={`${siteInfo.siteUrl}/podcasts`} className='home__more'>
      MORE PODCASTS{'  '}
      <span className='glyphicon glyphicon-arrow-right'/>
    </a>
    <div className='home__podcast-content' key='podcast-content'>
      {podcasts.slice(0, 3).map(item => (
        <HomeContentPodcastItem {...{ item }} />)) }
    </div>
  </div> : null;
}

HomeContentPodcasts.propTypes = {
  podcasts: array
};

export default HomeContentPodcasts;
