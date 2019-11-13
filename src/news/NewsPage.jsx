import React from 'react';
import { useSlug, useApiRequest } from '../hooks';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { default as ContentBox } from '../reusables/ContentBox';
import { default as BackButton } from '../reusables/BackButton';
import { NotFoundRedirect, entitiesToText, renderSummary } from '../utils';

export default function NewsPage() {
  let slug = useSlug(), post = useApiRequest(undefined,
    `posts?_embed&slug=${slug}`, (data, fxn) => {
      if (data) fxn(data.length > 0 ? data[0] : null);
    });

  if (post) {
    let {
      content: { rendered: content }, title: { rendered: title }, date
    } = post;

    return [<HeadStuff title={entitiesToText(title)}
      description={renderSummary(content, 50)} />,
    <BackButton href='radioblog' className='show__link' text="Back to Radioblog" />,
    <div className='news-item'>
      <div className='review-page__byline'>
        {new Date(date).toDateString()}
      </div>
      <ContentBox className='news-item__body' {...{ content }} />
    </div>];
  }

  return <NotFoundRedirect check={post} />;
}
