import React from 'react';
import { useSlug } from '../hooks/useGeneralContext';
import { default as IThing } from '../reusables/IThing';
import { queryToUrl, getMagicFieldsImg, getUploadedImage } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, BackButton } from '../reusables';
import { NotFoundRedirect } from '../utils';

export default function PodcastItem() {
  let slug = useSlug(), podcast = useApiRequest(undefined,
    `podcast_series?slug=${slug}`, function (data, fxn) {
      fxn((data && data.length) ? data[0] : null);
    });

  if (podcast) {
    let {
        playlist_id: playlistId, title, description, time, photo, host
      } = podcast, src = `https://w.soundcloud.com/player/?${queryToUrl({
        url: `https://api.soundcloud.com/playlists/${playlistId}`,
        color: '#ff5500',
        auto_play: false,
        hide_related: false,
        show_comments: true,
        show_user: true,
        show_reposts: false,
        show_teaser: true,
        visual: true
      })}`;

    return [<HeadStuff title={title}/>,
      <BackButton href='podcasts' className='show__link' text="Podcasts" />,
      <div className="show__wrapper">
        <div className="show__content">
          <div className="show__image-div">
            <img className="show__image"
              src={(photo && photo.length) && getMagicFieldsImg(photo)
              || getUploadedImage('2019/06/ktuh-logo.jpg')}/>
            <div className="show__info">
              {(host && host.length) ? <h5>Hosted by {host}</h5> : null}
                  <h5 className="show__time">{time || new Date().toString()}</h5>
              <div>
              {description ? <h5>Podcast Description</h5> : null}
              <div className="show__body" dangerouslySetInnerHTML=
                {{ __html: description }} />
            </div>
          </div>
        </div>
        <div className="show-page__playlist">
          <h4>Past Episodes</h4>
          <IThing height="450" width="800" {...{ src }} />
        </div>
      </div>
    </div>];
  }
  return <NotFoundRedirect check={podcast} />;
}
