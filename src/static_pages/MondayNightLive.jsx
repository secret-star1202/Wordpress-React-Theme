import React from 'react';
import { Metamorph } from 'react-metamorph';

export default function MondayNightLive() {

  return ([
      <Metamorph title="Monday Night Live- KTUH FM Honolulu | Radio for the People"
                 description="KTUH Monday Night Live" image='https://ktuh.org/img/ktuh-logo.jpg'/>,
      <h2 className='general__header'>Monday Night Live</h2>,
      <div className="show__wrapper">
        <div className="show__content">
          <div className="show__image-div"><img className="show__image"
                                                src="https://manoa.hawaii.edu/ktuh/wp-content/uploads/2019/06/Moday-Night-Live-ad.jpg"/>
          </div>
          <div className="show__info">
            <h5 className="show__time">Mondays from 9:00PM-12:00AM</h5>
            <div className="show-item__genres"><span className="glyphicon glyphicon-music"></span> Live Music, Local Music
            </div>
            <div className="show__buttons">
              <div className="button__wrapper">
                <p className="show__tag">
                  <button type="button" data-path="http://stream.ktuh.org/archives/1.monday/9-12am.mp3"
                          className="btn btn-default show__play-btn color-button purple-button" aria-label="Left Align">
                    <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Play latest episode
                  </button>
                </p>
              </div>
              <div class="button__wrapper">
                <p class="show__host"><button type="button" class="btn btn-default goto-dj-profile color-button purple-button" aria-label="Left Align">DJ Profile</button></p>
              </div>
            </div>
            <div class="container" style="box-sizing: border-box; width: 975.333px; max-width: 1920px; color: rgb(51, 51, 51);">
              <div id="main" style="box-sizing: border-box;">
                <div class="show__wrapper" style="box-sizing: border-box;">
                  <div class="show__content" style="box-sizing: border-box;">
                    <div class="show__info" style="box-sizing: border-box; width: 427.667px;">
                      <p class="show__body" style="box-sizing: border-box;"></p>
                      <p class="p1" style="box-sizing: border-box;"><span style="box-sizing: border-box; font-weight: bold; font-size: 18px; font-style: italic;">60 minutes of live music by local artists on Monday nights!</span></p>
                      <p class="p2" style="box-sizing: border-box;"></p>
                      <span style="box-sizing: border-box; font-weight: bold;">&nbsp;</span>
                      <h5 class="show__time">Past Shows</h5>
                      <div class="grid__container__mnl">
                        <div class="grid__item__mnl">
                          <a>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/DeQZSqxhluk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                          </a></div>
                        <div class="grid__item__mnl">
                          <a>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/ag9ShrAeCA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                          </a></div>
                        <div class="grid__item__mnl">
                          <a>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/mi8uEOeFEPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                          </a></div>
                        <div class="grid__item__mnl">
                          <a>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/nqMKKVekF8U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                          </a></div>
                        <div class="grid__item__mnl">
                          <a>
                            <iframe width="100%" height="300" src="https://www.youtube.com/embed/O0oXdJNOk5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                          </a></div>
                        <div class="grid__item__submit">
                          <div class="submit__podcast1">
                            <div class="submit__podcast">
                              <h3><a href="https://www.youtube.com/playlist?list=PLCnpa6YAfA3mIbJIlwV_1ZyKX7ez-5MMI">Entire Playlist</a></h3>
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
        </div>
      </div>
    ]
  );
}
