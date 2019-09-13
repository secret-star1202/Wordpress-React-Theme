import React, { useState, useEffect } from 'react';
import PodcastItem from './PodcastItem.jsx';
import { default as siteInfo } from '../utils/config';
import getApiRequest from '../utils/get_api_request';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function PodcastList() {
  let [state, setState] = useState({
    podcasts: []
  });

  useEffect(function () {
    getApiRequest('podcast_series', ({ data }) => {
      setState({ podcasts: data.length > 0 ? data : [] });
    });
  });

  let { podcasts } = state, { siteUrl } = siteInfo;

  return [<HeadStuff title="KTUH Podcasts" />,
    <div className='grid__container'>
      {podcasts.map(({ playlist_id: playlistId }) => <PodcastItem {...{ playlistId }} />)}
      <div className='grid__item__submit'><a><div className='submit__podcast'>
        <div className='submit__podcast'><h3><a href={`${siteUrl}/submit-podcasts`}>
          Submit a podcast</a></h3></div></div></a></div></div>];
}
