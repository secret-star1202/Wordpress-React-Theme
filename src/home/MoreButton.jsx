import React from 'react';
import { default as Glyph } from '../reusables/Glyph';
import { default as SamePageAnchor } from '../reusables/SamePageAnchor';

export default function MoreButton({ href, type }) {
  return <SamePageAnchor {...{ href }} className='home__more'>
    {`MORE ${type}  `}
    <Glyph symbol='arrow-right' />
  </SamePageAnchor>;
}
