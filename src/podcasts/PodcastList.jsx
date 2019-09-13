import React, { useState, useEffect } from 'react';
import PodcastItem from './PodcastItem.jsx';
import getApiRequest from '../utils/get_api_request';
import HeadStuff from '../reusables/HeadStuff.jsx';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getFullUrl from '../utils/get_full_url';

export default function PodcastList() {
  let [state, setState] = useState({
    podcasts: []
  });

  useEffect(function () {
    getApiRequest('podcast_series', ({ data }) => {
      setState({ podcasts: data.length > 0 ? data : [] });
    });
  });

  let { podcasts } = state;

  return [<HeadStuff title="KTUH Podcasts" />,
    <div className='grid__container'>
      {podcasts.map(({ playlist_id: playlistId }) => <PodcastItem {...{ playlistId }} />)}
      <div className='grid__item__submit'><div className='submit__podcast'>
        <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
          Submit a podcast</SamePageAnchor></h3></div></div></div></div>];
}
