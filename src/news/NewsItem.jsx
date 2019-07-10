import React from 'react';
import { object } from 'prop-types';
import renderSummary from '../utils/summary';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function NewsItem({
  item: {
    _embedded, slug, title, content, nickname
  },
  history
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url || undefined;

  return (
    <div className='news-list__post'>
      <div className='news-list__post-image'>
        <span className='purple-tag'>Radioblog</span>
        <SamePageAnchor history={history} className="news-list__photo-link"
          href={`${siteInfo.siteUrl}/radioblog/${slug}`}>
          <img className='news-list__photo'
            src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
        </SamePageAnchor>
      </div>
      <div className='news-list__info'>
        <SamePageAnchor history={history} className='news-list__title' href={`${
          siteInfo.siteUrl}/radioblog/${slug}`}><h3>{title.rendered}</h3>
        </SamePageAnchor>
        <p className='news-list__excerpt'>
          {renderSummary(content.rendered, 50)}{'  '}
          <SamePageAnchor history={history} className='purple-text' href={`${
            siteInfo.siteUrl}/radioblog/${slug}`}>
            <i>Read On</i>
          </SamePageAnchor>
        </p>
        <br />
        <p className='news-list__byline'>by {nickname}</p>
      </div>
    </div>
  );
}

NewsItem.propTypes = {
  item: object,
  history: object
};

export default NewsItem;
