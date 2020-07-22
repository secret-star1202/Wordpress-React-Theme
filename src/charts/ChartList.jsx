import React from 'react';
import { default as ChartTable } from './ChartTable';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { HeadStuff, SamePageAnchor } from '../reusables';
import { getFullUrl } from '../utils/url_utils';
import ChartItem from "./ChartItem";

export default function () {
  let charts = useApiRequest([], 'chart');

  if (charts.length) {
    return [<HeadStuff title='NACC Charts' />,
      <div className="page__content">
        <div className="charts__bio">
          <h4>The North American College & Community Chart</h4>
          <div className="charts__text">The North American College & Community Chart (NACC) represents the top 30 most
            played albums at KTUH over a seven day period. Every week, Music Directors from college radio stations
            around the country send their charts to the NACC where they are compiled into a national
            <a className="charts__link" href="https://naccchart.com/charts"> chart. </a>
            NACC’s top 200 chart provides a broad view of albums popular at college and
            community stations across the country. NACC also publishes
            <a className="charts__link" href="https://naccchart.com/community"> profiles </a>
            of Music Directors and all the people that keep the public radio machine running. For more
            information on the NACC organization and national charts contributed to by KTUH, please visit the
            <a className="charts__link" href="https://naccchart.com/"> NACC website. </a>
          </div>
        </div>
        <div className="playlist-list__latest">
          <h3 className="playlist__show-name">Latest Chart: {charts[0].title.rendered.replace('NACC Charts ' || 'NACC Chart ', '')}</h3>
          <ChartTable data={charts[0].chart_table[0] } />
        </div>
        <div className="charts__pad"></div>
        <div className="playlist__sidebar">
          <h3>Other Charts</h3>
          <div className="charts__list">
            <ul>
              {charts.slice(1, 13).map(chart => <ChartItem chart={chart}/>)}
            </ul>
          </div>
        </div>
      </div>
    ];
  }
  return null;
}
