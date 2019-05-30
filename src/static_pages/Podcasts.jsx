import React, { Component } from 'react';
import { Metamorph } from 'react-metamorph';

export default class Podcast extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return ([
        <Metamorph title="Podcasts - KTUH FM Honolulu | Podcasts for the People"
                   description="KTUH Podcasts" image='https://ktuh.org/img/ktuh-logo.jpg'/>,
        <h2 className='general__header'>KTUH Podcasts</h2>,
        <div className='grid__container'>
          <div className='grid__item'>
            <a>
              <iframe width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/737993049&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            </a>
          </div>
          <div className='grid__item'>
            <a>
              <iframe width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/737994363&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            </a>
          </div>
          <div className='grid__item'>
            <a>
              <iframe width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/737994693&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            </a>
          </div>
          <div className='grid__item'>
            <a>
              <iframe width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/741390240&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            </a>
          </div>
          <div className='grid__item'>
            <a>
              <iframe width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/744663567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            </a>
          </div>
          <div className='grid__item__submit'>
            <a>
              <div className='submit__podcast'>
                <div className='submit__podcast'><h3><a href='/contact-us'>Submit a podcast</a></h3></div>
              </div>
            </a>
          </div>

        </div>]
    );
  }
}
