import React, { useState, useEffect } from 'react';
import EverAfter from 'react-everafter';
import NewsItem from './NewsItem.jsx';
import getApiRequest from '../utils/get_api_request';

function NewsListContent() {
  let [state, setState] = useState({
    posts: []
  });

  let { posts } = state;

  useEffect(function () {
    if (!posts.length) {
      getApiRequest('all_posts', ({ data }) => {
        setState({ posts: data.length ? data : [] });
      });
    }
  }, []);

  return <div className='news-list__content'>
    <div className='news-list'>
      {posts.length ? <EverAfter.Paginator wrapper={NewsItem} perPage={4}
        items={posts} truncate={true} /> : <p>No results.</p>}
    </div>
  </div>;
}

export default NewsListContent;
