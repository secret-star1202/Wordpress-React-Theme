import React from 'react';
import { default as IThing } from '../reusables/IThing';

export default function PodcastItem({ playlistId }) {
  let src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${
    playlistId
  }&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return <img className="podcast-page__photo" href={link}></img><h4>{title}</h4> <h5>{description}</h5> <h5>{time}</h5> <a> <IThing height="400" {...{ src }} />
  </a>
}
