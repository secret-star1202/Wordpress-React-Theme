import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import useSlug from '../hooks/useSlug';
import getApiRequest from '../utils/get_api_request';

function PagesItem() {
  let slug = useSlug(), [state, setState] = useState({
    page: undefined
  });

  useEffect(function () {
    getApiRequest(`pages?slug=${slug.replace(/\/$/, '')}`, ({ data }) => {
      setState({ page: data.length > 0 ? data[0] : null });
    });
  });

  let { page } = state;

  if (page) {
    let { title: { rendered: title }, content: { rendered: content } } = page;

    return [<Metamorph title={`${title} - KTUH FM Honolulu | Radio for the People`}
      image='https://ktuh.org/img/ktuh-logo.jpg' />,
      <h2 className='general__header'>{title}</h2>,
      <div className="page__content" dangerouslySetInnerHTML={{ __html: content }} />
    ];
  }
  if (page === undefined) {
    return null;
  }
  if (page === null) {
    return <Redirect to='/not-found' />;
  }
}

export default PagesItem;
