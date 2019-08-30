import React from 'react';

export default function PodcastItem({ playlist_id }) {
  function scUrl(src) {
    return 'https://w.soundcloud.com/player/'
    + `?url=https%3A//api.soundcloud.com/playlists/${src}`
    + '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true'
    + '&show_user=true&show_reposts=false&show_teaser=true&visual=true';
  }

  return <div className='grid__item'><a><iframe width="100%" height="400"
    scrolling="no" frameBorder="no" allow="autoplay" src={scUrl(playlist_id)} />
  </a></div>;
}
