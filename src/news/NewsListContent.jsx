import React from 'react';
import { Paginator } from 'react-everafter';
import NewsItem from './NewsItem.jsx';
import useApiRequest from '../hooks/useApiRequest';

function NewsListContent() {
  let state = useApiRequest({
      posts: []
    }, 'all_posts?_embed', (data, fxn) => {
      fxn({ posts: data.length ? data : [] });
    }), { posts: items } = state;

  return <div className='news-list__content'>
    <div className='news-list'>
      {items.length ? <Paginator wrapper={NewsItem} perPage={4} {...{ items }}
        truncate /> : <p>No results.</p>}
    </div>
  </div>;
}

export default NewsListContent;
