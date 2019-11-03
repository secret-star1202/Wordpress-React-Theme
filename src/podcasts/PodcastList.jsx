import React from 'react';
import PodcastItem from './PodcastItem.jsx';
import { getFullUrl } from '../utils';
import { useApiRequest } from '../hooks';
import { HeadStuff, SamePageAnchor } from '../reusables';

export default function PodcastList() {
  let state = useApiRequest({
      podcasts: []
    }, 'podcast_series', (podcasts, fxn) => {
      fxn({ podcasts });
    }), { podcasts } = state;

  return [<HeadStuff title="KTUH Podcasts" />,
    <div className='grid__container'>
      {podcasts.map(({ playlist_id: playlistId }) => <PodcastItem {...{ playlistId }} />)}
      <div className='grid__item__submit'><div className='submit__podcast'>
        <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
          Submit a podcast</SamePageAnchor></h3></div></div></div></div>];
}
