import React from 'react';
import { default as IThing } from '../reusables/IThing';
import { queryToUrl } from '../utils/url_utils';

export default function PodcastItem({ playlistId }) {
  let src = 'https://w.soundcloud.com/player/?' + queryToUrl({
    url: `https://api.soundcloud.com/playlists/${playlistId}`,
    color: '#ff5500',
    auto_play: false,
    hide_related: false,
    show_comments: true,
    show_user: true,
    show_reposts: false,
    show_teaser: true,
    visual: true
  });

  return <div className='grid__item'><a><IThing height="400" {...{ src }} />
  </a></div>;
}
