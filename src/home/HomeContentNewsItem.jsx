import React from 'react';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';
import {
  renderSummary, getFullUrl, getFeaturedImg, getImgAsset
} from '../utils';

export default function HomeContentNewsItem({
  item: {
    _embedded, title: { rendered: title }, content: { rendered: content }, slug, date
  }
}) {
  let src = getFeaturedImg(_embedded, getImgAsset('mstile-310x310.png'));

  if (title.includes('&#8216;', '&#8217;', '&#038', '&#8211;')) {
    title = title.replace('&#8216;', "'")
      .replace('&#8217;', "'")
      .replace('&#038;', '&')
      .replace('&#8211;', '-');
  }

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
