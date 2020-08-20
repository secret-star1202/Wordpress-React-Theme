import React from 'react';
import { default as ChartTable } from './ChartTable';
import useSlugRequest from '../hooks/useSlugRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { default as BackButton } from '../reusables/BackButton';
import { default as NotFoundRedirect } from '../utils/404_redirect';

export default function () {
  let chart = useSlugRequest(undefined,
    (slug) => `chart?slug=${slug}`, (data, fxn) => {
      if (data) fxn(data[0]);
    });

  if (chart) {
    let { chart_table, title: { rendered: title } } = chart;
    return [<HeadStuff title="NACC Charts" />,
      <BackButton className='review__link' href='charts' text="Back To Latest Chart" />,
        <div className="news-list__wrapper">
      <div className="charts__content-static">
        <h3 className="playlist__show-name">{title}</h3>
        {chart_table[0].indexOf(String.fromCharCode(13)) > -1
          ? [
              <h1>Top Adds</h1>,
              <ChartTable data={chart_table[0].slice(0, chart_table[0].indexOf(String.fromCharCode(13)))} />,
              <h1>Top 30</h1>,
              <ChartTable data={chart_table[0].slice(chart_table[0].indexOf(String.fromCharCode(13)) + 1)} />
          ]
          : <ChartTable data={chart_table[0]} />
        }
      </div>
        </div>
    ];
  }
  return <NotFoundRedirect check={chart} />;
}
