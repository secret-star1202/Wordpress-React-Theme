import React from 'react';
import {useSlug} from '../hooks/useGeneralContext';
import {default as IThing} from '../reusables/IThing';
import {queryToUrl, getMagicFieldsImg, getUploadedImage} from '../utils/url_utils';
import {default as useApiRequest} from '../hooks/useApiRequest';
import {HeadStuff} from '../reusables';

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

      return [<HeadStuff title={title}/>, <div className="podcast__page-item">
          <div className="podcast__photo-div">
              <img className="podcast-page__photo" src={getMagicFieldsImg(photo) || getUploadedImage('2019/06/ktuh-logo.jpg')}/>
          </div>
            <div className="podcast__item-info">
                <div className="podcast__time-div">
                    <h5 className="podcast__time">{time || new Date().toString()}</h5>
                </div>
                {(host && host.length)
                ?
                <div className="podcast__host-div">
                    <h4 className="podcast__host">{`Hosted by ${host}`}</h4>
                </div> : null}
                <div className="podcast__description-div">
                    <p className="podcast__description">{description || 'This is a pretty cool podcast! from KTUH! Check it out!'}</p>
                </div>
            </div>
            <div className="podcast__playlist"><IThing height="450" width="800" {...{src}} /></div></div>
        ];
    }
    return null;
}
