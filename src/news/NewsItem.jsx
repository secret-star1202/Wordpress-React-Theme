import React from 'react';
import { SamePageAnchor } from '../reusables';
import {
  getFullUrl, getFeaturedImg, getImgAsset, entitiesToText, renderSummary,
} from '../utils';

function NewsItem({
  item: {
    _embedded, slug, title: { rendered: title }, content: { rendered: content }
  }
}) {
  let src = getFeaturedImg(_embedded), href = getFullUrl(`radioblog/${slug}`);

  return <div className='news-list__post'><div className='news-list__post-image'>
    <span className='purple-tag'>Radioblog</span>
    <SamePageAnchor href={getFullUrl(`radioblog/${slug}`)}><img
      className='home__news-img' src={src} />
    </SamePageAnchor>
    </div>
    <div className='news-list__info'>
      <SamePageAnchor className='news-list__title' {...{ href }}>
        <h3>{entitiesToText(title)}</h3>
      </SamePageAnchor>
      <p className='news-list__excerpt'>{renderSummary(content, 50)}
        {'  '}
        <SamePageAnchor className='purple-text' {...{ href }}><i>Read On</i></SamePageAnchor>
      </p>
    </div>
  </div>;
}

export default NewsItem;
