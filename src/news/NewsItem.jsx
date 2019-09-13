import React from 'react';
import renderSummary from '../utils/summary';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getFeaturedImg from '../utils/get_featured_img';

function NewsItem({
  item: {
    _embedded, slug, title: { rendered: title }, content: { rendered: content }, nickname
  }
}) {
  let featuredImage = getFeaturedImg(_embedded), { siteUrl } = siteInfo;

  return <div className='news-list__post'><div className='news-list__post-image'>
    <span className='purple-tag'>Radioblog</span>
    <SamePageAnchor className="news-list__photo-link"
      href={`${siteUrl}/radioblog/${slug}`}>
      <img className='news-list__photo' src={featuredImage} />
      </SamePageAnchor>
    </div>
    <div className='news-list__info'>
      <SamePageAnchor className='news-list__title' href={`${siteUrl
      }/radioblog/${slug}`}><h3>{title}</h3>
      </SamePageAnchor>
      <p className='news-list__excerpt'>{renderSummary(content, 50)}
        {'  '}
        <SamePageAnchor className='purple-text' href={`${siteUrl}/radioblog/${
          slug}`}><i>Read On</i></SamePageAnchor>
      </p>
      <br />
      <p className='news-list__byline'>by {nickname}</p>
    </div>
  </div>;
}

export default NewsItem;
