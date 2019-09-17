import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import IThing from '../reusables/IThing.jsx';
import { getFullUrl } from '../utils/url_utils';

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
      <IThing height="250" src={'https://w.soundcloud.com/player/'
        + `?url=https%3A//api.soundcloud.com/${type}s/${src}`
        + '&color=%23ff5500&auto_play=false&hide_related=false'
        + '&show_comments=true&show_user=true&show_reposts=false'
        + '&show_teaser=true&visual=true'} />
    </SamePageAnchor>
  </div>;
}
