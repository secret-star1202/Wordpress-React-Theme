import React, { useState, useEffect } from 'react';
import { Paginator } from 'react-everafter';
import NewsItem from './NewsItem.jsx';
import { getApiRequest } from '../utils/url_utils';

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
      {posts.length ? <Paginator wrapper={NewsItem} perPage={4} items={posts}
        truncate={true} /> : <p>No results.</p>}
    </div>
  </div>;
}

export default NewsListContent;
