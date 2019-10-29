import React from 'react';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { getFullUrl, getFeaturedImg } from '../utils/url_utils';

export default function StaffMemberItem({
  item: {
    _embedded, member_name, member_photo, member_bio, member_role
  }
}) {
  return <div className='news-list__post'><div className='news-list__post-image'>
      <div className="news-list__photo-link">
      <img className='news-list__photo' src={member_photo} />
      </div>
    </div>
    <div className='news-list__info'>
      <div className='news-list__title'><h3>{member_name}</h3></div>
      <div className='news-list__excerpt'><h4>{member_role}</h4></div>
      <div className='staff-list__excerpt'><h5>{member_bio}</h5></div>
    </div>
  </div>;
}
