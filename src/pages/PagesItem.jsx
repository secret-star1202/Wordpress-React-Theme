import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSlug } from '../hooks/useGeneralContext';
import { getApiRequest } from '../utils/url_utils';
import HeadStuff from '../reusables/HeadStuff.jsx';
import ContentBox from '../reusables/ContentBox.jsx';

function PagesItem() {
  let slug = useSlug(), [state, setState] = useState({
    page: undefined
  });

  useEffect(function () {
    getApiRequest(`pages?slug=${slug.replace(/\/$/, '')}`, ({ data }) => {
      setState({ page: data.length > 0 ? data[0] : null });
    });
  }, []);

  let { page } = state;

  if (page) {
    let { title: { rendered: title }, content: { rendered: content } } = page;

    return [<HeadStuff title={title} />,
      <ContentBox className="page__content" {...{ content }} />];
  }
  if (page === undefined) {
    return null;
  }
  if (page === null) {
    return <Redirect to='/not-found' />;
  }
}

export default PagesItem;
