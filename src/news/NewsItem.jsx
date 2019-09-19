import React from 'react';
import renderSummary from '../utils/summary';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { getFullUrl, getFeaturedImg } from '../utils/url_utils';

function NewsItem({
  item: {
    _embedded, slug, title: { rendered: title }, content: { rendered: content }, author, date
  }
}) {
  let featuredImage = getFeaturedImg(_embedded),
    postUrl = getFullUrl(`radioblog/${slug}`);

  return <div className='news-list__post'><div className='news-list__post-image'>
    <span className='purple-tag'>Radioblog</span>
    <SamePageAnchor className="news-list__photo-link"
      href={postUrl}>
      <img className='news-list__photo' src={featuredImage} />
      </SamePageAnchor>
    </div>
    <div className='news-list__info'>
      <SamePageAnchor className='news-list__title' href={postUrl}><h3>{title}</h3>
      </SamePageAnchor>
      <p className='news-list__excerpt'>{renderSummary(content, 50)}
        {'  '}
        <SamePageAnchor className='purple-text' href={postUrl}><i>Read On</i></SamePageAnchor>
      </p>
      <br />
      <p className='news-list__byline'>by {author}</p>
    </div>
  </div>;
}

export default NewsItem;
