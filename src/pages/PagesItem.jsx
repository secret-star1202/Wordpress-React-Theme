import React from 'react';
import { useSlug } from '../hooks/useGeneralContext';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff.jsx';
import ContentBox from '../reusables/ContentBox.jsx';
import NotFoundRedirect from '../utils/404_redirect';

function PagesItem() {
  let slug = useSlug(), state = useApiRequest({
      page: undefined
    }, `pages?slug=${slug.replace(/\/$/, '')}`, (data, fxn) => {
      fxn({ page: data.length > 0 ? data[0] : null });
    }), { page } = state;

  if (page) {
    let { title: { rendered: title }, content: { rendered: content } } = page;

    return [<HeadStuff title={title} />,
      <ContentBox className="page__content" {...{ content }} />];
  }
  return <NotFoundRedirect check={page} />;
}

export default PagesItem;
