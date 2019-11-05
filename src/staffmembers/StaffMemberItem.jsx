import React from 'react';
import { getMagicFieldsImg } from '../utils/url_utils';

export default function StaffMemberItem({
  item: {
    member_name: memberName,
    member_photo: src,
    member_bio: memberBio,
    member_role: memberRole
  }
}) {
  return <div className='show-item'><div className='news-list__post-image'>
      <div className="news-list__photo-link">
      <img className='show-item__image' src={getMagicFieldsImg(src)} />
      </div>
    </div>
    <div className='show-item__info-container'>
      <h3>{memberName}</h3>
      <h4>{memberRole}</h4>
      <p>{memberBio}</p>
    </div>
  </div>;
}
