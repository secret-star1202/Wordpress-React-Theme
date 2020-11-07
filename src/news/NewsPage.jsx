import React from 'react';
import useSlugRequest from '../hooks/useSlugRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';
import { default as ContentBox } from '../reusables/ContentBox';
import { default as BackButton } from '../reusables/BackButton';
import { NotFoundRedirect, entitiesToText, renderSummary } from '../utils';

export default function NewsPage() {
  let post = useSlugRequest(undefined,
    (slug) => `posts?_embed&slug=${slug}`, (data, fxn) => {
      if (data) fxn(data.length > 0 ? data[0] : null);
    });

  if (post) {
    let {
      content: { rendered: content }, title: { rendered: title }, date, author
    } = post;

    return [<HeadStuff title={entitiesToText(title)}
      description={renderSummary(content, 50)} />,
    <BackButton href='radioblog' className='show__link' text="Back to Radioblog" />,
    <div className='news-item'>
      <div className='review-page__byline'>
        By {author}
      </div>
      <div className='review-page__byline'>
        {new Date(date).toDateString()}
      </div>
      <ContentBox className='news-item__body' {...{ content }} />
    </div>];
  }

  return <NotFoundRedirect check={post} />;
}
