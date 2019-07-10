import React from 'react';
import { Metamorph } from 'react-metamorph';

export default function Podcast() {
  let podcasts = [
      '737993049', '737994363', '737994693', '741390240', '744663567'
    ], scUrl = src => 'https://w.soundcloud.com/player/'
    + `?url=https%3A//api.soundcloud.com/playlists/${src}`
    + '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true'
    + '&show_user=true&show_reposts=false&show_teaser=true&visual=true';

  return [
    <Metamorph title="Podcasts - KTUH FM Honolulu | Podcasts for the People"
      description="KTUH Podcasts" image='https://ktuh.org/img/ktuh-logo.jpg'/>,
    <h2 className='general__header'>KTUH Podcasts</h2>,
    <div className='grid__container'>
      {podcasts.map(src => (
      <div className='grid__item'>
        <a><iframe width="100%" height="400" scrolling="no"
          frameBorder="no" allow="autoplay" src={scUrl(src)} />
        </a>
      </div>))}
      <div className='grid__item__submit'>
        <a><div className='submit__podcast'>
          <div className='submit__podcast'>
            <h3><a href='/contact-us'>Submit a podcast</a></h3></div>
          </div>
        </a></div>
    </div>];
}
