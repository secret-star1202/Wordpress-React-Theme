import React from 'react';
import ContentBox from '../reusables/ContentBox.jsx';

export default function StaffItem({ bio, role, name }) {
  return <div>
    <h3>{name}</h3>
    <h4>{role}</h4>
    <ContentBox content={bio}/>
  </div>;
}
