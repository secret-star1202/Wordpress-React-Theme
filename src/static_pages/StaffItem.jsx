import React from 'react';
import { ContentBox } from '../reusables';

export default function StaffItem({ bio: content, role, name }) {
  return <div><h3>{name}</h3><h4>{role}</h4><ContentBox {...{ content }} /></div>;
}
