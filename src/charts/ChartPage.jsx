import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import ChartTable from './ChartTable.jsx';
import useSlug from '../hooks/useSlug';
import getApiRequest from '../utils/get_api_request';
import HeadStuff from '../reusables/HeadStuff.jsx';
import getFullUrl from '../utils/get_full_url';

export default function ChartPage() {
  let slug = useSlug(), [state, setState] = useState({
    chart: undefined
  });

  useEffect(function () {
    getApiRequest(`chart?slug=${slug.replace(/\/$/, '')}`, ({ data }) => {
      setState({ chart: data.length > 0 ? data[0] : null });
    });
  }, []);

  let { chart } = state;

  if (chart) {
    let { chart_table: [chartData], title: { rendered: title } } = chart;
    return [<HeadStuff title={title} />,
      <div className='review__link'>
        <SamePageAnchor href={getFullUrl('charts')} className='back-to'>
          ← all charts
        </SamePageAnchor>
      </div>,
      <div className="review__content">
        <ChartTable data={chartData} />
      </div>
    ];
  }
  if (chart === null) {
    return <Redirect to='/not-found' />;
  }
  if (chart === undefined) {
    return null;
  }
}
