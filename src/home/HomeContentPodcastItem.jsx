import React, { Component } from 'react';
import { default as siteInfo } from '../utils/config';

export default class HomeContentReviewsItem extends Component {

  render() {

    return (
        <div className='home_podcast-item'>
          <a href={siteInfo.siteUrl + '/podcasts'}>
            <iframe width="85%" height="250" scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/623867385&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
          </a>
        </div>
    );
  }
}
