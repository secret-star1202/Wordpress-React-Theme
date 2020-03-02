import React from 'react';
import { SamePageAnchor, IThing } from '../reusables';
import { getFullUrl, queryToUrl } from '../utils/url_utils';

let scUrl = (type, id) => 'https://w.soundcloud.com/player/?'
  + queryToUrl({
      url: `https://api.soundcloud.com/${type}s/${id}`,
      color: "#ff5500",
      auto_play: false,
      hide_related: false,
      show_comments: true,
      visual: true,
      show_user: true,
      show_reposts: false,
      show_teaser: true
  });

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
