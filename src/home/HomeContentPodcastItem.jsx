import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor';
import IThing from '../reusables/IThing';
import { getFullUrl } from '../utils/url_utils';

let scUrl = (type, id) => 'https://w.soundcloud.com/player/'
  + `?url=https%3A//api.soundcloud.com/${type}s/${id}&color=%23ff5500`
  + '&auto_play=false&hide_related=false&show_comments=true&visual=true'
  + '&show_user=true&show_reposts=false&show_teaser=true';

export default function ({
  item: {
    podcast_id: [id],
    podcast_type: [type],
    podcast_name: [name],
    podcast_date: [date],
  }
}) {
  let dateStr = new Date(date).toDateString(), src = scUrl(type, id);

  return <div className='home_podcast-item'>
    <SamePageAnchor href={getFullUrl('podcasts')}>
      <p className='home__title'>{name}</p>
      <p className='home__subtitle'>{dateStr}</p>
      <IThing height="250" src={src} />
    </SamePageAnchor>
  </div>;
}
