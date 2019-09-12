import React from 'react';
import { default as siteInfo } from '../utils/config';
import renderSummary from '../utils/summary';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getImgAsset from '../utils/get_img_asset';

export default function HomeContentNewsItem({
  item: {
    _embedded, title: { rendered: title }, content: { rendered: content }, slug,
    nickname, date
  }
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url
    || getImgAsset('mstile-310x310.png');

  return <div className='home__news-item'>
    <SamePageAnchor href={`${siteInfo.siteUrl}/radioblog/${slug}`}><img
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
