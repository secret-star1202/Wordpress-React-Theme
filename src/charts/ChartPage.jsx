import React from 'react';
import ChartTable from './ChartTable.jsx';
import { useSlug, useApiRequest } from '../hooks';
import { HeadStuff, BackButton } from '../reusables';
import { NotFoundRedirect } from '../utils';

export default function ChartPage() {
  let slug = useSlug(), state = useApiRequest({
      chart: undefined
    }, `chart?slug=${slug.replace(/\/$/, '')}`, (data, fxn) => {
      fxn({ chart: data.length > 0 ? data[0] : null });
    }), { chart } = state;

  if (chart) {
    let { chart_table: [data], title: { rendered: title } } = chart;
    return [<HeadStuff {...{ title }} />,
      <BackButton className='review__link' href='charts' text="← all charts" />,
      <div className="review__content">
        <ChartTable {...{ data }} />
      </div>
    ];
  }
  return <NotFoundRedirect check={chart} />;
}
