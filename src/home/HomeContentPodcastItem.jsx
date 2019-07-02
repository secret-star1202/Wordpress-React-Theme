import React from 'react';
import { object } from 'prop-types';
import { default as siteInfo } from '../utils/config';
import {default as momentUtil} from 'moment';

export default function HomeContentPodcastItem({
  item: {
    podcast_id: [src],
    podcast_type: [type],
    podcast_name: [name],
    podcast_date: [date],
  },

}) {
    return <div className='home_podcast-item'>
    <a href={`${siteInfo.siteUrl}/podcasts`}>
      <p className='home__title'>{name}</p>
      <p className='home__subtitle'> {momentUtil(date).format('MMMM Do')}</p>
      <iframe width="100%" height="250"
        scrolling="no" frameBorder="no" allow="autoplay" src=
          {'https://w.soundcloud.com/player/'
          + `?url=https%3A//api.soundcloud.com/${type}s/${src}`
          + '&color=%23ff5500&auto_play=false&hide_related=false'
          + '&show_comments=true&show_user=true&show_reposts=false'
          + '&show_teaser=true&visual=true'} />
    </a>
  </div>;
}

HomeContentPodcastItem.propTypes = {
  item: object
};
