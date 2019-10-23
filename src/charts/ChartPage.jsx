import React from 'react';
import ChartTable from './ChartTable.jsx';
import { useSlug } from '../hooks/useGeneralContext';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff.jsx';
import BackButton from '../reusables/BackButton.jsx';
import NotFoundRedirect from '../utils/404_redirect';

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
