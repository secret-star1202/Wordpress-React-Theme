import React from 'react';
import renderSummary from '../utils/summary';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { getFullUrl, getFeaturedImg } from '../utils/url_utils';

function NewsItem({
  item: {
    _embedded, slug, member_name, member_photo, member_bio, member_role
  }
}) {
  let featuredImage = getFeaturedImg(_embedded),
    postUrl = getFullUrl(`radioblog/${slug}`);

  return <div className='news-list__post'><div className='news-list__post-image'>
    <SamePageAnchor className="news-list__photo-link"
      href={postUrl}>
      <img className='news-list__photo' src={member_photo} />
      </SamePageAnchor>
    </div>
    <div className='news-list__info'>
      <SamePageAnchor className='news-list__title' href={postUrl}><h3>{member_name}</h3>
      </SamePageAnchor>
      <SamePageAnchor className='news-list__excerpt' href={postUrl}><h4>{member_role}</h4></SamePageAnchor>
      <SamePageAnchor className='news-list__excerpt' href={postUrl}><h5>{member_bio}</h5></SamePageAnchor>
    </div>
  </div>;
}

export default NewsItem;
