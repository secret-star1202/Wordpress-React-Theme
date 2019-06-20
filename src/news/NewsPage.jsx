import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { default as siteInfo } from '../utils/config';
import renderSummary from '../utils/summary';

function NewsPage({ match }) {
  let [state, setState] = useState({
    post: undefined
  });

  useEffect(function () {
    axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed&slug=${
      match.params.slug.replace(/\/$/, '')}`).then((res) => {
      setState({ post: res.data.length > 0 ? res.data[0] : null });
    });
  });

  let { post } = state;

  if (post) {
    let featuredImage = post._embedded && post._embedded['wp:featuredmedia']
      && post._embedded['wp:featuredmedia']['0']
      && post._embedded['wp:featuredmedia']['0'].source_url || undefined;

    return [<Metamorph title={`${
      post.title.rendered} - KTUH FM Honolulu | Radio for the People`}
    description={renderSummary(post.content.rendered, 50)}
    image={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />,
    <h1 key="header-title" className='general__header'>
      {post.title.rendered}</h1>,
    <div key="radioblog-back-link" className='show__link'>
      <a href='/radioblog' className='back-to'>← Back to Radioblog</a>
    </div>,
    <div className='news-item' key="name-submitted">
      <p className='news-item__author'>
          <b>Posted by KTUH FM</b>
        <br />
        {new Date(post.date).toString()}
      </p>
      <img className='news-item__photo'
        src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
      <div className='news-item__body'
        dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
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
