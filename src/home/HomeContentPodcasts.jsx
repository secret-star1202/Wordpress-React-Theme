import React from 'react';
import HomeContentPodcastItem from './HomeContentPodcastItem.jsx';
import { getFullUrl } from '../utils/url_utils';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import Glyph from '../reusables/Glyph.jsx';
import useApiRequest from '../hooks/useApiRequest';

function HomeContentPodcasts() {
  let state = useApiRequest({
      podcasts: []
    }, 'podcast?_embed&per_page=3', (podcasts, fxn) => {
      fxn({
        podcasts
      });
    }), { podcasts } = state, href = getFullUrl('podcasts');

  return podcasts.length ? <div className='home__podcast'>
    <SamePageAnchor {...{ href }}>
      <h3 className="home__section">Podcasts</h3>
    </SamePageAnchor>
    <SamePageAnchor {...{ href }} className='home__more'>
      MORE PODCASTS{'  '}
      <Glyph symbol='arrow-right' />
    </SamePageAnchor>
    <div className='home__podcast-content'>
      {podcasts.map(item => (<HomeContentPodcastItem {...{ item }} />)) }
    </div>
  </div> : null;
}

export default HomeContentPodcasts;
