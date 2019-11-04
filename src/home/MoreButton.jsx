import { Glyph, SamePageAnchor } from "../reusables";
import React from "react";

export default function MoreButton({ href, type }) {
  return <SamePageAnchor {...{ href }} className='home__more'>
    MORE {type}{'  '}
    <Glyph symbol='arrow-right' />
  </SamePageAnchor>;
}