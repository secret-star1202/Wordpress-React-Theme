import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { get as axget } from 'axios';
import { default as siteInfo } from '../utils/config';
import MNLItem from './MNLItem.jsx';

export default function MondayNightLive() {
  function watchToEmbed(url) {
    return url.replace('watch?v=', 'embed/');
  }

  let [state, setState] = useState({
    videos: []
  });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/mnl_video`
    ).then(({ data }) => {
      setState({
        videos: data
      });
    });
  });

  let { videos } = state;

  return [<Metamorph description="KTUH Monday Night Live" title=
    "Monday Night Live- KTUH FM Honolulu | Radio for the People" image=
      'https://ktuh.org/img/ktuh-logo.jpg' />, <h2 className='general__header'>
      Monday Night Live</h2>, <div className="show__wrapper"><div className=
        "show__content"><div className="show__image-div"><img className=
        "show__image" src=
        "https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/Moday-Night-Live-ad.jpg"/>
      </div><div className="show__info__head"><h5 className="show__time">
        Mondays from 9:00PM-12:00AM</h5><div className="show-item__genres">
        <span className="glyphicon glyphicon-music"></span> Live Music, Local Music
        </div><div className="show__buttons"><div className="button__wrapper">
          <p className="show__tag"><button type="button" data-path=
            "http://stream.ktuh.org/archives/1.monday/9-12am.mp3" className=
            "btn btn-default show__play-btn color-button purple-button"
            aria-label="Left Align"><span className="glyphicon glyphicon-play"
            aria-hidden="true"></span> Play latest episode</button></p></div>
            </div><div className="container" style={{
              boxSizing: 'border-box',
              maxWidth: '1920px',
              color: 'rgb(51, 51, 51)'
            }}><div id="main" style={{ boxSizing: 'border-box' }}>
          <div className="show__wrapper" style={{ boxSizing: 'border-box' }}>
            <div className="show__content" style={{ boxSizing: 'border-box' }}>
              <div className="show__info" style={{
                boxSizing: 'border-box', width: '427.667px'
              }}><p className="show__body" style={{ boxSizing: 'border-box' }}></p>
                <p className="p1" style={{ boxSizing: 'border-box' }}>
                <span style={{
                  boxSizing: 'border-box',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  fontStyle: 'italic'
                }}>60 minutes of live music by local artists on Monday nights!</span></p>
                  <p className="p2" style={{ boxSizing: 'border-box' }}></p>
                  <span style={{ boxSizing: 'border-box', fontWeight: 'bold' }}>&nbsp;</span>
                  <h5 className="show__time">Past Shows</h5>
                  <div className="grid__container__mnl">{
                    videos.map(({ video_url: [videoUrl] }) => <MNLItem url={watchToEmbed(videoUrl)} />)
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
