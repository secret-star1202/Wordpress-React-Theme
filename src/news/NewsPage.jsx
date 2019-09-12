import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import renderSummary from '../utils/summary';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import useSlug from '../hooks/useSlug';
import getApiRequest from '../utils/get_api_request';

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
        content: { rendered: content }, title: { rendered: title }, nickname, date
      } = post, dateObj = new Date(date);

    return [<Metamorph title={`${title
    } - KTUH FM Honolulu | Radio for the People`}
    description={renderSummary(content, 50)} />,
    <h1 className='general__header'>{title}</h1>,
    <div className='show__link'>
      <SamePageAnchor href='/radioblog' className='back-to'>
        ← Back to Radioblog
      </SamePageAnchor>
    </div>,
    <div className='news-item'>
      <p className='news-item__author'>
          <b>Posted by {nickname} at</b>
        <br />
        {`${dateObj.toDateString()} at ${dateObj.toLocaleTimeString()}`}
      </p>
      <div className='news-item__body'
        dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </div>];
  }

  if (post === null) {
    return <Redirect to='/not-found' />;
  }

  if (post === undefined) {
    return null;
  }
}

export default NewsPage;
