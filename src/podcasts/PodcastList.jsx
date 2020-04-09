import React from 'react';
import { getFullUrl, getUploadedImage } from '../utils/url_utils';
import { HeadStuff, SamePageAnchor } from '../reusables';

function PodcastListItem({ href, src = '2019/06/ktuh-logo.jpg', name }) {
  return <SamePageAnchor href={getFullUrl(`podcasts/${href}`)}>
    <div className="grid__item">
      <img className="podcast__page-image" src={getUploadedImage(src)}
        href={getFullUrl(`podcasts/${href}`)} />
      <SamePageAnchor href={getFullUrl(`podcasts/${href}`)}>
        <h4>{name}</h4>
      </SamePageAnchor>
    </div>
    </SamePageAnchor>;
}

export default function PodcastList() {
  return [<HeadStuff title="KTUH Podcasts" />,
    <h4 className="podcast-page__desc">
      Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts, Spotify, Soundcloud, Google Play and everywhere podcasts are heard.
    </h4>,
    <div className="podcast-grid__cover">
      <div className='grid__container'>
        <PodcastListItem href='the-future-accords' src='2020/03/The-Future-Accords.jpg' name="The Future Accords" />
        <PodcastListItem href='kwok-talk' name="Kwok Talk" />
        <PodcastListItem href='renegade-radio' name='Renegade Radio'
          src="2020/03/renegade-radio-logo-2020-compressed.png" />
        <PodcastListItem href='ktuh-news' name="KTUH News" />
        <PodcastListItem href='trivia-shock' name="Trivia Shock" />
        <PodcastListItem href='interviews' name="Interviews" />
        <PodcastListItem href='talk-shows' name='Talk Shows' />
        <PodcastListItem href='more-podcasts' name="More Podcasts" />
      </div>
    </div>,
    <div className='grid__item__submit'>
    <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
          Submit a podcast</SamePageAnchor></h3></div></div>];
}
