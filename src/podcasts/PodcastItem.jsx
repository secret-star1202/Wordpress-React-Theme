import React from 'react';
import { useSlug } from '../hooks/useGeneralContext';
import { default as IThing } from '../reusables/IThing';
import { queryToUrl } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff } from '../reusables';

export default function PodcastItem() {
  let slug = useSlug(), podcast = useApiRequest(null,
    `podcast_series?slug=${slug}`, function (data, fxn) {
      fxn(data[0]);
    });

  if (podcast) {
    let { playlist_id: playlistId, title, description, time, photo } = podcast,
      src = 'https://w.soundcloud.com/player/?' + queryToUrl({
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

    return [<HeadStuff title={title} />, <img className="podcast-page__photo"
      src= {photo || 'https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/ktuh-logo.jpg'} />,
      <h4>{title}</h4>,
      <h5>{description || 'This is a pretty cool podcast! from KTUH! Check it out!'}</h5>,
      <h5>{time || new Date().toString()}</h5>,
      <a><IThing height="400" {...{ src }} /></a>
    ];
  }
  return null;
}
