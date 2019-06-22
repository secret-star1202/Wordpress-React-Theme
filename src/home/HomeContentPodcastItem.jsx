import React from 'react';
import { object } from 'prop-types';
import { default as siteInfo } from '../utils/config';

export default function HomeContentPodcastItem({
  item: {
    playlist_id: [src]
  }
}) {
  return <div className='home_podcast-item'>
    <a href={`${siteInfo.siteUrl}/podcasts`}>
      <iframe width="85%" height="250"
        scrolling="no" frameBorder="no" allow="autoplay" src=
          {'https://w.soundcloud.com/player/'
          + `?url=https%3A//api.soundcloud.com/tracks/${src}`
          + '&color=%23ff5500&auto_play=false&hide_related=false'
          + '&show_comments=true&show_user=true&show_reposts=false'
          + '&show_teaser=true&visual=true'} />
    </a>
  </div>;
}

HomeContentPodcastItem.propTypes = {
  item: object
};
