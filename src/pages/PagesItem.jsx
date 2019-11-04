import React from 'react';
import { useSlug } from '../hooks/useGeneralContext';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff';
import ContentBox from '../reusables/ContentBox';
import NotFoundRedirect from '../utils/404_redirect';

export default function PagesItem() {
  let slug = useSlug(), page = useApiRequest(undefined,
    `pages?slug=${slug}`, (data, fxn) => {
      fxn({ page: data.length > 0 ? data[0] : null });
    });

  if (page) {
    let { title: { rendered: title }, content: { rendered: content } } = page;

    return [<HeadStuff title={title} />,
      <ContentBox className="page__content" {...{ content }} />];
  }
  return <NotFoundRedirect check={page} />;
}
