import React from 'react';
import renderSummary from '../utils/summary';
import getImgAsset from '../utils/get_img_asset';
import getFeaturedImg from '../utils/get_featured_img';
import getFullUrl from '../utils/get_full_url';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

export default function HomeContentEventItem({
  item: {
    _embedded, slug, event_title: { rendered: eventTitle },
    content: { rendered: content }, nickname, date
  }
}) {
  let featuredImage = getFeaturedImg(_embedded, getImgAsset('mstile-310x310.png'));

  return <div className='home__event-item'>
    <SamePageAnchor href={getFullUrl(`radioblog/${slug}`)}>
      <img className='home__Event-img' src={featuredImage} />
      <h4 className='home__title'>{eventTitle}</h4>
    </SamePageAnchor>
    <p className='home__synopsis'>{renderSummary(content, 15)}</p>
    <p className='home__byline'>by {nickname} | {new Date(date).toDateString().split(' ').slice(1, 3)}
    </p>
  </div>;
}
