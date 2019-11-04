import React from 'react';
import { default as ContentBox } from '../reusables/ContentBox';

export default function ({ bio: content, role, name }) {
  return <div><h3>{name}</h3><h4>{role}</h4><ContentBox {...{ content }} /></div>;
}
