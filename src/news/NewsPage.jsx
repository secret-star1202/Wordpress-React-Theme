import React from 'react';
import { useSlug, useApiRequest } from '../hooks';
import { HeadStuff, ContentBox, BackButton } from '../reusables';
import { NotFoundRedirect, entitiesToText, renderSummary } from '../utils';

function NewsPage() {
  let slug = useSlug(), state = useApiRequest({
      post: undefined
    }, `posts?_embed&slug=${slug.replace(/\/$/, '')}`, (data, fxn) => {
      fxn({ post: data.length > 0 ? data[0] : null });
    }), { post } = state;

  if (post) {
    let {
      content: { rendered: content }, title: { rendered: title }, date
    } = post;

    return [<HeadStuff title={entitiesToText(title)}
      description={renderSummary(content, 50)} />,
    <BackButton href='radioblog' className='show__link' text="← Back to Radioblog" />,
    <div className='news-item'>
      <div className='review-page__byline'>
        {new Date(date).toDateString()}
      </div>
      <ContentBox className='news-item__body' {...{ content }} />
    </div>];
  }

  return <NotFoundRedirect check={post} />;
}

export default NewsPage;
