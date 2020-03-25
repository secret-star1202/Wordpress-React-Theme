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

  return [<div className='home_podcast-item'>
    <SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}>
      <img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2020/03/The-Future-Accords.jpg" href={getFullUrl('podcasts/the-future-accords')}/><SamePageAnchor href={getFullUrl('podcasts/the-future-accords')}><h4>The Future Accords</h4></SamePageAnchor></SamePageAnchor>
    </div>,
    <div className='home_podcast-item'>
     <SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/kwok-talk')}/><SamePageAnchor href={getFullUrl('podcasts/kwok-talk')}><h4>Kwok Talk</h4></SamePageAnchor></SamePageAnchor>
    </div>,
    <div className='home_podcast-item'><SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}><img className="podcast__image" src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg" href={getFullUrl('podcasts/ktuh-news')}/><SamePageAnchor href={getFullUrl('podcasts/ktuh-news')}><h4>KTUH News</h4></SamePageAnchor></SamePageAnchor>
  </div>];
}
