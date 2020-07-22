import React from 'react';
import { SamePageAnchor, Glyph } from '../reusables';
import { getFullUrl } from '../utils/url_utils';

export default function ChartItem({ chart: { slug, title: { rendered: title } } }) {
  return <li>
    <div className="charts__sidebar">
      <SamePageAnchor href={getFullUrl(`charts/${slug}`)}><Glyph symbol="cd" /></SamePageAnchor>&nbsp;
      <SamePageAnchor href={getFullUrl(`charts/${slug}`)}>{title.replace('NACC Charts ', '')}</SamePageAnchor>
    </div>
  </li>;
}
