import React from 'react';
import renderSummary from '../utils/summary';
import BackButton from '../reusables/BackButton.jsx';
import { useSlug } from '../hooks/useGeneralContext';
import useApiRequest from '../hooks/useApiRequest';
import HeadStuff from '../reusables/HeadStuff.jsx';
import ContentBox from '../reusables/ContentBox.jsx';
import NotFoundRedirect from '../utils/404_redirect';

function NewsPage() {
  let slug = useSlug(), state = useApiRequest({
      post: undefined
    }, `posts?_embed&slug=${slug.replace(/\/$/, '')}`, (data, fxn) => {
      fxn({ post: data.length > 0 ? data[0] : null });
    }), { post } = state;

  if (post) {
    let {
      content: { rendered: content }, title: { rendered: title }, author, date
    } = post;

    return [<HeadStuff {...{ title }} description={renderSummary(content, 50)} />,
    <BackButton href='radioblog' className='show__link' text="← Back to Radioblog" />,
    <div className='news-item'>
      <div className='review-page__byline'>
        {`Review by ${author} • ${new Date(date).toDateString()}`}
      </div>
      <ContentBox className='news-item__body' {...{ content }} />
    </div>];
  }

  return <NotFoundRedirect check={post} />;
}

export default NewsPage;
