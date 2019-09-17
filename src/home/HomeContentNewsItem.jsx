import React from 'react';
import renderSummary from '../utils/summary';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { getFullUrl, getFeaturedImg, getImgAsset } from '../utils/url_utils';

export default function HomeContentNewsItem({
  item: {
    _embedded, title: { rendered: title }, content: { rendered: content }, slug,
    nickname, date
  }
}) {
  let featuredImage = getFeaturedImg(_embedded, getImgAsset('mstile-310x310.png'));

  return <div className='home__news-item'>
    <SamePageAnchor href={getFullUrl(`radioblog/${slug}`)}><img
      className='home__news-img' src={featuredImage} />
      <h4 className='home__title'>{title}</h4>
    </SamePageAnchor>
    <p className='home__synopsis'>
      {renderSummary(content, 15)}
    </p>
    <p className='home__byline'>
      by {nickname} | {new Date(date).toDateString()}
    </p>
  </div>;
}
