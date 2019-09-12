import React from 'react';
import { default as siteInfo } from '../utils/config';
import renderSummary from '../utils/summary';
import getImgAsset from '../utils/get_img_asset';

export default function HomeContentEventItem({
  item: {
    _embedded, slug, event_title: { rendered: eventTitle },
    content: { rendered: content }, nickname, date
  }
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url
    || getImgAsset('mstile-310x310.png');

  return <div className='home__event-item'>
    <a href={`${siteInfo.siteUrl}/radioblog/${slug}`}>
      <img className='home__Event-img' src={featuredImage} />
      <h4 className='home__title'>{eventTitle}</h4>
    </a>
    <p className='home__synopsis'>{renderSummary(content, 15)}</p>
    <p className='home__byline'>by {nickname} | {
      new Date(date).date.toDateString().split(' ').slice(1, 3)}
    </p>
  </div>;
}
