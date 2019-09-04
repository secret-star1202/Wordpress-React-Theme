import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { get as axget } from 'axios';
import { Redirect } from 'react-router-dom';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import ChartTable from './ChartTable.jsx';
import useParamMatch from '../hooks/useParamMatch';

export default function ChartPage() {
  let { slug } = useParamMatch(['slug']),
    [state, setState] = useState({
      chart: undefined
    });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/chart?slug=${
        slug.replace(/\/$/, '')}`
    ).then(
      ({ data }) => {
        setState({ chart: data.length > 0 ? data[0] : null });
      }
    );
  }, []);

  let { chart } = state;

  if (chart) {
    let { chart_table: [chartData], title: { rendered: title } } = chart;
    return [
      <Metamorph title={`${title}`
      + ' - KTUH FM Honolulu | Radio for the People'}
        description={title} image='https://ktuh.org/img/ktuh-logo.jpg' />,
      <h1 className="general__header" key='header'>
        <b>{title}</b></h1>,
      <div className='review__link' key='back-link'>
        <SamePageAnchor href='/charts' className='back-to'>
          ← all charts
        </SamePageAnchor>
      </div>,
      <div className="review__content" key='review-content'>
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
