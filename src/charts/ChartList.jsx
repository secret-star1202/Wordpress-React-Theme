import React from 'react';
import { default as ChartTable } from './ChartTable';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, SamePageAnchor } from '../reusables';
import { getFullUrl } from '../utils/url_utils';

export default function () {
  let charts = useApiRequest([], 'chart');

  if (charts.length) {
    return [<HeadStuff title='Charts' />,
      <div className="page__content">
        <div className="playlist-list__latest">
          <h3 className="playlist__show-name">Latest Chart: {charts[0].title.rendered}</h3>
          <ChartTable data={charts[0].chart_table[0] } />
        </div>
        <div className="playlist-list__latest">
          <h3>Other Charts</h3>
          <div>
            <ul>
              {charts.slice(1).map(({ slug, title: { rendered: title } }) => (
                <SamePageAnchor href={getFullUrl(`charts/${slug}`)}>{title}</SamePageAnchor>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ];
  }
  return null;
}
