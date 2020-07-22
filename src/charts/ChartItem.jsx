import React from 'react';
import { SamePageAnchor, Glyph } from '../reusables';
import { getFullUrl } from '../utils/url_utils';

export default function ChartItem({ chart: { slug, title: { rendered: title } } }) {
  return <li className="charts__list-item">
    <div className="charts__sidebar">
      <SamePageAnchor href={getFullUrl(`charts/${slug}`)}><Glyph id="charts__item-icon" symbol="cd" /></SamePageAnchor>
      &nbsp;<SamePageAnchor href={getFullUrl(`charts/${slug}`)}>{title.replace('NACC Charts ', '')}</SamePageAnchor>
    </div>
  </li>;
}
