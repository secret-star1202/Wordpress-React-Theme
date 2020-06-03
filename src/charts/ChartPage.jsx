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
    return [<HeadStuff {...{ title }} />,
      <BackButton className='review__link' href='charts' text="all charts" />,
      <div className="review__content">
        <ChartTable data={chart_table[0]} />
      </div>
    ];
  }
  return <NotFoundRedirect check={chart} />;
}
