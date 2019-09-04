import React from 'react';

export default function PodcastItem({ playlistId }) {
  function scUrl() {
    return 'https://w.soundcloud.com/player/'
    + `?url=https%3A//api.soundcloud.com/playlists/${playlistId}`
    + '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true'
    + '&show_user=true&show_reposts=false&show_teaser=true&visual=true';
  }

  return <div className='grid__item'><a><iframe width="100%" height="400"
    scrolling="no" frameBorder="no" allow="autoplay" src={scUrl()} />
  </a></div>;
}
