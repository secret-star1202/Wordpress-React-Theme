import React, { useEffect, useState } from 'react';
import HomeContentPodcastItem from './HomeContentPodcastItem.jsx';
import getApiRequest from '../utils/get_api_request';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getFullUrl from '../utils/get_full_url';

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

  let { podcasts } = state, link = getFullUrl('podcasts');
  return podcasts.length ? <div className='home__podcast'>
    <SamePageAnchor href={link}>
      <h3 className="home__section">Podcasts</h3>
    </SamePageAnchor>
    <SamePageAnchor href={link} className='home__more'>
      MORE PODCASTS{'  '}
      <span className='glyphicon glyphicon-arrow-right'/>
    </SamePageAnchor>
    <div className='home__podcast-content'>
      {podcasts.slice(0, 3).map(item => (
        <HomeContentPodcastItem {...{ item }} />)) }
    </div>
  </div> : null;
}

export default HomeContentPodcasts;
