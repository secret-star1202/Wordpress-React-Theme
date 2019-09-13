import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getFullUrl from '../utils/get_full_url';

export default function HomeContentPodcastItem({
  item: {
    podcast_id: [src],
    podcast_type: [type],
    podcast_name: [name],
    podcast_date: [date],
  }
}) {
  let dateStr = new Date(date).toDateString();

  return <div className='home_podcast-item'>
    <SamePageAnchor href={getFullUrl('podcasts')}>
      <p className='home__title'>{name}</p>
      <p className='home__subtitle'>{dateStr}</p>
      <iframe width="100%" height="250" scrolling="no" frameBorder="no"
        allow="autoplay" src={'https://w.soundcloud.com/player/'
          + `?url=https%3A//api.soundcloud.com/${type}s/${src}`
          + '&color=%23ff5500&auto_play=false&hide_related=false'
          + '&show_comments=true&show_user=true&show_reposts=false'
          + '&show_teaser=true&visual=true'} />
    </SamePageAnchor>
  </div>;
}
