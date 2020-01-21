import React from 'react';
import { default as ChartTable } from './ChartTable';
import { useSlug } from '../hooks/useGeneralContext';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { default as BackButton } from '../reusables/BackButton';
import { default as NotFoundRedirect } from '../utils/404_redirect';

export default function () {
  let slug = useSlug(), chart = useApiRequest(undefined,
    `chart?slug=${slug}`, (data, fxn) => {
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
