import React from 'react';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

export default function HomeContentPodcastItem({
  item: {
    podcast_id: [src],
    podcast_type: [type],
    podcast_name: [name],
    podcast_date: [date],
  }
}) {
  return <div className='home_podcast-item'>
    <SamePageAnchor href={`${siteInfo.siteUrl}/podcasts`}>
      <p className='home__title'>{name}</p>
      <p className='home__subtitle'> {new Date(date).toDateString()}</p>
      <iframe width="100%" height="250" scrolling="no" frameBorder="no"
        allow="autoplay" src={'https://w.soundcloud.com/player/'
          + `?url=https%3A//api.soundcloud.com/${type}s/${src}`
          + '&color=%23ff5500&auto_play=false&hide_related=false'
          + '&show_comments=true&show_user=true&show_reposts=false'
          + '&show_teaser=true&visual=true'} />
    </SamePageAnchor>
  </div>;
}
