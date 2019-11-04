import React from 'react';
import { default as renderSummary } from '../utils/summary';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import { getFullUrl, getFeaturedImg, getImgAsset } from '../utils/url_utils';

export default function HomeContentNewsItem({
  item: {
    _embedded, title: { rendered: title }, content: { rendered: content }, slug, date
  }
}) {
  let src = getFeaturedImg(_embedded, getImgAsset('mstile-310x310.png'));

  return <div className='home__news-item'>
    <SamePageAnchor href={getFullUrl(`radioblog/${slug}`)}><img
      className='home__news-img' src={src} />
      <h4 className='home__title'>{title}</h4>
    </SamePageAnchor>
    <p className='home__synopsis'>
      {renderSummary(content, 15)}
    </p>
    <p className='home__byline'>
      {new Date(date).toDateString()}
    </p>
  </div>;
}
