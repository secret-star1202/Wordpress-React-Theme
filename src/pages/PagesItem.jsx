import React from 'react';
import { default as useSlugRequest } from '../hooks/useSlugRequest';
import { HeadStuff, ContentBox } from '../reusables';
import NotFoundRedirect from '../utils/404_redirect';

export default function PagesItem() {
  let page = useSlugRequest(undefined,
    (slug) => `pages?slug=${slug.replace(/\/$/, '')}`, (data, fxn) => {
      if (data && data.length) {
        fxn(data[0]);
      } else fxn(null);
    });

  if (page) {
    let { title: { rendered: title }, content: { rendered: content } } = page;

    return [<HeadStuff title={title} />,
      <ContentBox className="page__content" {...{ content }} />];
  }
  return <NotFoundRedirect check={page} />;
}
