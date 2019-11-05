import React from 'react';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function HomeSection({ href, text }) {
  return <SamePageAnchor {...{ href }}>
    <h3 className="home__section">{text}</h3>
  </SamePageAnchor>;
}
