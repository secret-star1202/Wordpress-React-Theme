import React from 'react';
import { useSlug } from '../hooks/useGeneralContext';
import { default as IThing } from '../reusables/IThing';
import { queryToUrl, getMagicFieldsImg, getUploadedImage } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, BackButton, Glyph } from '../reusables';
import { NotFoundRedirect } from '../utils';

export default function PodcastItem() {
  let slug = useSlug(), podcast = useApiRequest(undefined,
    `podcast_series?slug=${slug}`, function (data, fxn) {
      fxn((data && data.length) ? data[0] : null);
    });

  if (podcast) {
    let {
        playlist_id: playlistId, title, description, time, photo, host, itunes, spotify
      } = podcast, src = `https://w.soundcloud.com/player/?${queryToUrl({
        url: `https://api.soundcloud.com/playlists/${playlistId}`,
        color: '#1c1c1c',
        auto_play: true,
        hide_related: false,
        show_comments: true,
        show_user: true,
        show_reposts: false,
        show_teaser: true,
        visual: true
      })}`;

    <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/737994363&color=%231c1c1c&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"></iframe> < div
    style = "font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;" > < a
    href = "https://soundcloud.com/ktuh"
    title = "KTUH"
    target = "_blank"
    style = "color: #cccccc; text-decoration: none;" > KTUH < /a> · <a href="https:/
    /soundcloud.com/
    ktuh / sets / the - future - accords
    " title="
    The
    Future
    Accords
    " target="
    _blank
    " style="
    color: #cccccc;
    text - decoration
  :
    none;
    ">The Future Accords</a></div>



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
              {(itunes && spotify) ? <div className="show-links">
                <h5 className= "podcast-page__social-title">Find {title} where podcasts are heard</h5>
                <a href={itunes}><Glyph symbol="apple" type='fa' /></a>
                <a href={spotify}><Glyph symbol="spotify" type='fa' /></a>
              </div> : null}
          </div>
        </div>
        <div className="podcast__playlist">
          <div className="podcast__playlist-background">
          <h4 className="podcast__playlist-title">Past Episodes</h4>
          <IThing height="550" width="850" {...{ src }} />
          </div>
        </div>
      </div>
    </div>];
  }
  return <NotFoundRedirect check={podcast} />;
}
