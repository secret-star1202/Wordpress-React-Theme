import React from 'react';
import {
  renderSummary, getFullUrl, getFeaturedImg, getImgAsset
} from '../utils';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function HomeContentEventItem({
  item: {
    _embedded, slug, event_title: { rendered: eventTitle }, date,
    content: { rendered: content },
  }
}) {
  let featuredImage = getFeaturedImg(_embedded, getImgAsset('mstile-310x310.png'));

  return <div className='home__event-item'>
    <SamePageAnchor href={getFullUrl(`radioblog/${slug}`)}>
      <img className='home__event-img' src={featuredImage} />
      <h4 className='home__title'>{eventTitle}</h4>
    </SamePageAnchor>
    <p className='home__synopsis'>{renderSummary(content, 15)}</p>
    <p className='home__byline'>{new Date(date).toDateString().split(' ').slice(1, 3)}
    </p>
  </div>;
}
