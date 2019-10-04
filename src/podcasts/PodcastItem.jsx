import React from 'react';
import IThing from '../reusables/IThing.jsx';

export default function PodcastItem({ playlistId }) {
  let src =
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${
      playlistId
    }&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return <div className='grid__item'><a><IThing height="400" {...{ src }} />
  </a></div>;
}
