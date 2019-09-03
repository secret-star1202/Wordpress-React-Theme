import React from 'react';

export default function StaffItem({ bio, role, name }) {
  return <div>
    <h3>{name}</h3>
    <h4>{role}</h4>
    <div dangerouslySetInnerHTML={{ __html: bio }}/>
  </div>;
}
