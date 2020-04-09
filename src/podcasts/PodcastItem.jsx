import React from 'react';
import { useSlug } from '../hooks/useGeneralContext';
import { default as IThing } from '../reusables/IThing';
import { queryToUrl, getMagicFieldsImg, getUploadedImage } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff } from '../reusables';

export default function PodcastItem() {
  let slug = useSlug(), podcast = useApiRequest(null,
    `podcast_series?slug=${slug}`, function (data, fxn) {
      fxn(data[0]);
    });

  if (podcast) {
    let {
        playlist_id: playlistId, title, description, time, photo, host
      } = podcast,
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
      src={getMagicFieldsImg(photo) || getUploadedImage('2019/06/ktuh-logo.jpg')} />,
    (host && host.length)
      ? <h4 className="podcast__title">{`Hosted by ${host}`}</h4> : null,
      <h5 className="podcast__title">{description || 'This is a pretty cool podcast! from KTUH! Check it out!'}</h5>,
      <h5 className="podcast__title">{time || new Date().toString()}</h5>,
      <a><IThing height="350" width="500" {...{ src }} /></a>
    ];
  }
  return null;
}
