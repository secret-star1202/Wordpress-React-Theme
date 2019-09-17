import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import ChartTable from './ChartTable.jsx';
import { useSlug } from '../hooks/useGeneralContext';
import { getApiRequest, getFullUrl } from '../utils/url_utils';
import HeadStuff from '../reusables/HeadStuff.jsx';

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
    let { chart_table: [data], title: { rendered: title } } = chart;
    return [<HeadStuff {...{ title }} />, <div className='review__link'>
        <SamePageAnchor href={getFullUrl('charts')} className='back-to'>
          ← all charts
        </SamePageAnchor>
      </div>,
      <div className="review__content">
        <ChartTable {...{ data }} />
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
