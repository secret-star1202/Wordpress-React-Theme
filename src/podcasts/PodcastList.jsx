import React from 'react';
import { getFullUrl } from '../utils/url_utils';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, SamePageAnchor } from '../reusables';
import PodcastListItem from './PodcastListItem';

export default function PodcastList() {
  let podcasts = useApiRequest([],
    'podcast_series', function (data, fxn) {
      fxn((data && data.length) ? data : null);
    });

  if (podcasts.length) {
    return [<HeadStuff title="KTUH Podcasts" />,
    <h4 className="podcast-page__desc">
      Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts, Spotify, Soundcloud, Google Play and everywhere podcasts are heard.
    </h4>,
    <div className="podcast-grid__cover">
      <div className='grid__container'>
        {podcasts.map(({ slug, photo, title }) => (
        <PodcastListItem href={slug} src={photo} name={title} />))};
        <PodcastListItem href='https://soundcloud.com/ktuh' name="More Podcasts" />
      </div>
    </div>,
    <div className='grid__item__submit'>
    <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
          Submit a podcast</SamePageAnchor></h3></div></div>];
  }
  return null;
}
