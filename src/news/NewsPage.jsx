import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import renderSummary from '../utils/summary';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { useSlug } from '../hooks/useGeneralContext';
import { getApiRequest, getFullUrl } from '../utils/url_utils';
import HeadStuff from '../reusables/HeadStuff.jsx';
import ContentBox from '../reusables/ContentBox.jsx';

function NewsPage() {
  let slug = useSlug(), [state, setState] = useState({
    post: undefined
  });

  useEffect(function () {
    getApiRequest(`posts?_embed&slug=${slug.replace(/\/$/, '')}`, ({ data }) => {
      setState({ post: data.length > 0 ? data[0] : null });
    });
  });

  let { post } = state;

  if (post) {
    let {
      content: { rendered: content }, title: { rendered: title }, author, date
    } = post;

    return [<HeadStuff title={title} description={renderSummary(content, 50)} />,
    <div className='show__link'>
      <SamePageAnchor href={getFullUrl('radioblog')} className='back-to'>
        ← Back to Radioblog
      </SamePageAnchor>
    </div>,
    <div className='news-item'>
      <div className='review-page__byline'>
        {`Review by ${author} • ${new Date(date).toDateString()}`}
      </div>
      <ContentBox className='news-item__body' {...{ content }} />
    </div>];
  }

  if (post === null) {
    return <Redirect to='/not-found' />;
  }

  return null;
}

export default NewsPage;
