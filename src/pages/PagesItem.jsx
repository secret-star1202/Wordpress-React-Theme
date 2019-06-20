import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { default as siteInfo } from '../utils/config';

function PagesItem({ match }) {
  let [state, setState] = useState({
    page: undefined
  });

  useEffect(function () {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/pages?slug=${
        match.params.slug.replace(/\/$/, '')}`
    ).then((res) => {
      setState({ page: res.data.length > 0 ? res.data[0] : null });
    });
  });

  let { page } = state;

  if (page) {
    return [<Metamorph title={
    `${state.page.title.rendered} - KTUH FM Honolulu | Radio for the People`}
      image='https://ktuh.org/img/ktuh-logo.jpg' />,
      <h2 className='general__header'>{page.title.rendered}</h2>,
      <div className="page__content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    ];
  }
  if (page === undefined) {
    return null;
  }
  if (page === null) {
    return <Redirect to={`${siteInfo.siteUrl}/not-found`} />;
  }
}
PagesItem.propTypes = {
  match: object
};

export default PagesItem;
