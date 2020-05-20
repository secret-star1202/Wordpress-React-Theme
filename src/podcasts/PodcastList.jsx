import React from 'react';
import { getFullUrl } from '../utils/url_utils';
import { HeadStuff, SamePageAnchor } from '../reusables';
import PodcastListItem from './PodcastListItem';

export default function PodcastList() {
  return [<HeadStuff title="KTUH Podcasts" />,
    <h4 className="podcast-page__desc">
      Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts, Spotify, Soundcloud, Google Play and everywhere podcasts are heard.
    </h4>,
    <div className="podcast-grid__cover">
      <div className='grid__container'>
        <PodcastListItem href='the-future-accords' src='2020/03/The-Future-Accords.jpg' name="The Future Accords" />
        <PodcastListItem href='kwok-talk' name="Kwok Talk" />
        <PodcastListItem href='trivia-shock' name="Trivia Shock" />
        <PodcastListItem href='renegade-radio' name='Renegade Radio' src="2020/03/renegade-radio-logo-2020-compressed.png" />
        <PodcastListItem href='ktuh-news' name="KTUH News" />
        <PodcastListItem href='interviews' name="Interviews" />
        <PodcastListItem href='talk-shows' name='Talk Shows' />
        <PodcastListItem href='more-podcasts' name="More Podcasts" />
      </div>
    </div>,
    <div className='grid__item__submit'>
    <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
          Submit a podcast</SamePageAnchor></h3></div></div>];
}
