import React from 'react';
import PodcastItem from './PodcastItem';
import { getFullUrl } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, SamePageAnchor } from '../reusables';

export default function PodcastList() {
  let podcasts = useApiRequest([], 'podcast_series');

  return [<HeadStuff title="KTUH Podcasts" />,
    <div className='grid__container'>
      <h4>Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts, Spotify, Soundcloud, Google Play and everywhere podcasts are heard.</h4>
      {podcasts.map(({ playlist_id: playlistId }) => <PodcastItem {...{ playlistId }} />)}
      </div>, <div className='grid__item__submit'><div className='submit__podcast'>
      <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
  Submit a podcast</SamePageAnchor></h3></div></div></div>];
}
