import React from 'react';
import { SamePageAnchor, Glyph } from '../reusables';
import { getFullUrl } from '../utils/url_utils';

export default function ChartItem({ chart: { slug, title: { rendered: title } } }) {
  return <div className="charts__sidebar">
      <ul>
        <SamePageAnchor href={getFullUrl(`charts/${slug}`)}><Glyph symbol="cd" /></SamePageAnchor>&nbsp;
        <SamePageAnchor href={getFullUrl(`charts/${slug}`)}>{title}</SamePageAnchor>
      </ul>
    </div>;
}
