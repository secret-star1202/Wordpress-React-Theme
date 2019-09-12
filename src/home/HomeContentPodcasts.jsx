import React, { useEffect, useState } from 'react';
import HomeContentPodcastItem from './HomeContentPodcastItem.jsx';
import { default as siteInfo } from '../utils/config';
import getApiRequest from '../utils/get_api_request';

function HomeContentPodcasts() {
  let [state, setState] = useState({
    podcasts: []
  });

  useEffect(function () {
    getApiRequest('podcast?_embed&per_page=6', ({ data }) => {
      setState({
        podcasts: data || []
      });
    });
  }, []);

  let { podcasts } = state, { siteUrl } = siteInfo;

  return podcasts.length ? <div className='home__podcast'>
    <a href={`${siteUrl}/podcasts`}>
      <h3 className="home__section">Podcasts</h3>
    </a>
    <a href={`${siteUrl}/podcasts`} className='home__more'>
      MORE PODCASTS{'  '}
      <span className='glyphicon glyphicon-arrow-right'/>
    </a>
    <div className='home__podcast-content'>
      {podcasts.slice(0, 3).map(item => (
        <HomeContentPodcastItem {...{ item }} />)) }
    </div>
  </div> : null;
}

export default HomeContentPodcasts;
