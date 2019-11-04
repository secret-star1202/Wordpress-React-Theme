import React from 'react';
import { default as ChartTable } from './ChartTable';
import { useSlug, useApiRequest } from '../hooks';
import { HeadStuff, BackButton } from '../reusables';
import { default as NotFoundRedirect } from '../utils/404_redirect';

export default function () {
  let slug = useSlug(), chart = useApiRequest(undefined,
    `chart?slug=${slug.replace(/\/$/, '')}`, (data, fxn) => {
      if (data) fxn(data[0]);
    });

  if (chart) {
    let { chart_table: [data], title: { rendered: title } } = chart;
    return [<HeadStuff {...{ title }} />,
      <BackButton className='review__link' href='charts' text="all charts" />,
      <div className="review__content">
        <ChartTable {...{ data }} />
      </div>
    ];
  }
  return <NotFoundRedirect check={chart} />;
}
