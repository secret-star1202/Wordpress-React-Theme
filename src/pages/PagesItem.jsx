import React, { useState, useEffect, useContext } from 'react';
import { object } from 'prop-types';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import { get as axget } from 'axios';
import { default as siteInfo } from '../utils/config';
import GeneralContext from '../contexts/GeneralContext';

function PagesItem() {
  let {
      generalState: {
        match: { params: { slug } }
      }
    } = useContext(GeneralContext), [state, setState] = useState({
      page: undefined
    });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/pages?slug=${
        slug.replace(/\/$/, '')}`
    ).then(({ data }) => {
      setState({ page: data.length > 0 ? data[0] : null });
    });
  });

  let { page } = state;

  if (page) {
    let { title, content } = page;

    return [<Metamorph title={
    `${title.rendered} - KTUH FM Honolulu | Radio for the People`}
      image='https://ktuh.org/img/ktuh-logo.jpg' />,
      <h2 className='general__header'>{title.rendered}</h2>,
      <div className="page__content"
        dangerouslySetInnerHTML={{ __html: content.rendered }}
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
