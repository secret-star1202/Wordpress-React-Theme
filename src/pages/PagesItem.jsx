import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useSlug from '../hooks/useSlug';
import getApiRequest from '../utils/get_api_request';
import HeadStuff from '../reusables/HeadStuff.jsx';

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

    return [<HeadStuff title={title} />,
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
