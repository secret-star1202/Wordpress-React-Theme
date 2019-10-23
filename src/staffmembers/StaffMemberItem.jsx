import React from 'react';

export default function StaffMemberItem({
  item: {
    member_name: memberName,
    member_photo: src,
    member_bio: memberBio,
    member_role: memberRole
  }
}) {
  return <div className='news-list__post'><div className='news-list__post-image'>
      <div className="news-list__photo-link">
      <img className='news-list__photo' {...{ src }} />
      </div>
    </div>
    <div className='news-list__info'>
      <div className='news-list__title'><h3>{memberName}</h3></div>
      <div className='news-list__excerpt'><h4>{memberRole}</h4></div>
      <div className='news-list__excerpt'><h5>{memberBio}</h5></div>
    </div>
  </div>;
}
