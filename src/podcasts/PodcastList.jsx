import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { get as axget } from 'axios';
import PodcastItem from './PodcastItem.jsx';
import { default as siteInfo } from '../utils/config';

export default function PodcastList() {
  let [state, setState] = useState({
    podcasts: []
  });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/podcast_series`
    ).then(({ data }) => {
      setState({ podcasts: data.length > 0 ? data : [] });
    });
  });

  let { podcasts } = state;

  return [
    <Metamorph title="Podcasts - KTUH FM Honolulu | Podcasts for the People"
      description="KTUH Podcasts" image='https://ktuh.org/img/ktuh-logo.jpg'/>,
    <h2 className='general__header'>KTUH Podcasts</h2>,
    <div className='grid__container'>
      {podcasts.map(({ playlist_id: playlistId }) => <PodcastItem {...{ playlistId }} />)}
      <div className='grid__item__submit'><a><div className='submit__podcast'>
        <div className='submit__podcast'><h3><a href='/contact-us'>
          Submit a podcast</a></h3></div></div></a></div></div>];
}
