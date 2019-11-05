import React from 'react';
import PodcastItem from './PodcastItem';
import { getFullUrl } from '../utils/url_utils';
import useApiRequest from '../hooks/useApiRequest';
import { HeadStuff, SamePageAnchor } from '../reusables';

export default function PodcastList() {
  let podcasts = useApiRequest([], 'podcast_series', (data, fxn) => {
    if (data) fxn({ data });
  });

  return [<HeadStuff title="KTUH Podcasts" />,
    <div className='grid__container'>
      {podcasts.map(({ playlist_id: playlistId }) => <PodcastItem {...{ playlistId }} />)}
      <div className='grid__item__submit'><div className='submit__podcast'>
        <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
          Submit a podcast</SamePageAnchor></h3></div></div></div></div>];
}
