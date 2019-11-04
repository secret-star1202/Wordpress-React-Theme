import React from 'react';
import { default as MNLItem } from './MNLItem';
import { getUploadedImage } from '../utils/url_utils';
import { HeadStuff, Glyph } from '../reusables';
import { default as useApiRequest } from '../hooks/useApiRequest';

export default function () {
  function watchToEmbed(url) {
    return url.replace('watch?v=', 'embed/');
  }

  let videos = useApiRequest([], 'mnl_video', (data, fxn) => {
    if (data) {
      fxn(data);
    }
  });

  return [<HeadStuff title="Monday Night Live" />,
      <div className="show__wrapper"><div className="show__content">
        <div className="show__image-div"><img className="show__image" src=
        {getUploadedImage('2019/06/Moday-Night-Live-ad.jpg')}/>
      </div><div className="show__info__head"><h5 className="show__time">
        Mondays from 9:00PM-12:00AM</h5><div className="show-item__genres">
        <Glyph symbol="music" />{' '}Live Music, Local Music
        </div><div className="show__buttons"><div className="button__wrapper">
          <p className="show__tag"><button type="button" data-path=
            "https://stream.ktuh.org/archives/1.monday/9-12am.mp3" className=
            "btn btn-default show__play-btn color-button purple-button"
            aria-label="Left Align"><Glyph symbol="play" />
              {' '}Play latest episode</button></p></div>
            </div><div className="mnl__container"><div id="mnl__main">
          <div className="mnl__show__wrapper">
            <div className="mnl__show__content">
              <div className="mnl__show__info">
                <p className="mnl__show__body"></p>
                <p className="mnl__p1">
                <span className="mnl__desc">60 minutes of live music by local artists on Monday nights!</span></p>
                <p className="mnl__p2"></p>
                <span className="mnl__nbsp">&nbsp;</span>
                <h5 className="show__time">Past Shows</h5>
                <div className="grid__container__mnl">{
                  videos.map(({ video_url: [videoUrl] }) => <MNLItem src={watchToEmbed(videoUrl)} />)
                }
                    <div className="grid__item__submit"><div className="submit__podcast1">
                      <div className="submit__podcast"><h3><a href=
                        "https://www.youtube.com/playlist?list=PLCnpa6YAfA3mIbJIlwV_1ZyKX7ez-5MMI">
                        Entire Playlist</a></h3></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>];
}
