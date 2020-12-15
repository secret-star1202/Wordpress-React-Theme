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
      Student run podcasts from the only station that loves you. Streaming all the time on Apple Podcasts,
      Spotify, Soundcloud, Google Play and everywhere podcasts are heard.</h4>,
    <div className='grid__item__submit'>
      <div className='submit__podcast'><h3><SamePageAnchor href={getFullUrl('submit-podcasts')}>
        Submit a podcast</SamePageAnchor></h3></div></div>,
    <div className="podcast-grid__cover">
      <div className='grid__container'>
        {podcasts.map(({ slug, photo, title }) => (
        <PodcastListItem href={slug} src={photo[0]} name={title} />))};
        <PodcastListItem href='https://soundcloud.com/ktuh/sets/ktuh-news' src='https://ktuh.org/wp-content/uploads/2020/07/news.png' name="KTUH News" />
        <PodcastListItem href='https://soundcloud.com/ktuh/sets/speaking-science' scr='https://ktuh.org/wp-content/uploads/2020/08/Speaking-Science-by-KTUH.png' name="Speaking Science" />
        <PodcastListItem href='https://soundcloud.com/ktuh/sets/hawaii-agdiscovery-program' src='https://ktuh.org/wp-content/uploads/2020/08/hawaiiag.png' name="Hawai'i AgDiscovery Program" />
        <PodcastListItem href='https://soundcloud.com/ktuh/sets/student-sustainability' src='https://ktuh.org/wp-content/uploads/2020/08/studentsustai.png' name="Student Sustainability Coalition Roundtable" />
        <PodcastListItem href='https://soundcloud.com/ktuh' name="More Podcasts" />
      </div>
    </div>];
  }
  return null;
}
