import React, { useState, useEffect, useContext } from 'react';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import { get as axget } from 'axios';
import { default as momentUtil } from 'moment';
import { default as siteInfo } from '../utils/config';
import renderSummary from '../utils/summary';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import GeneralContext from '../contexts/GeneralContext';

function NewsPage() {
  let { generalState } = useContext(GeneralContext), {
      match: { params: { slug } }
    } = generalState,
    [state, setState] = useState({
      post: undefined
    });

  useEffect(function () {
    axget(`${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed&slug=${
      slug.replace(/\/$/, '')}`).then(({ data }) => {
      setState({ post: data.length > 0 ? data[0] : null });
    });
  });

  let { post } = state;

  if (post) {
    let {
      content, title, nickname, date
    } = post;

    return [<Metamorph title={`${title.rendered
    } - KTUH FM Honolulu | Radio for the People`}
    description={renderSummary(content.rendered, 50)} />,
    <h1 key="header-title" className='general__header'>
      {title.rendered}</h1>,
    <div key="radioblog-back-link" className='show__link'>
      <SamePageAnchor href='/radioblog' className='back-to'>
        ← Back to Radioblog
      </SamePageAnchor>
    </div>,
    <div className='news-item' key="name-submitted">
      <p className='news-item__author'>
          <b>Posted by {nickname}</b>
        <br />
        {momentUtil(date).format('dddd, MMMM Do YYYY at h:mm a')}
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
