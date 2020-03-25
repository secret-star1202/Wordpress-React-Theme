import React from 'react';
import { default as Paginator } from '../reusables/Paginator';
import { default as NewsItem } from './NewsItem';
import { default as useApiRequest } from '../hooks/useApiRequest';

function NewsListContent() {
  let numPages = useApiRequest(undefined, 'num_posts', (data, fxn) => {
    if (data) fxn(Math.ceil(parseInt(data, 10) / 10));
  });

  return numPages ? <div className='news-list__content'>
    <div className='news-list'>
      <Paginator wrapper={NewsItem} perPage={10} truncate={true}
        maxPages={numPages} apiUrl={(num, per) => `posts?_embed&page=${num}&per_page=${per}`}
        searchMaxPages={(query) => `post_search_count?s=${query}`} maxPagesUrl='num_posts'
        searchUrl={(query) => (num, perPage) => `search?_embed&s=${query}&type=post&page=${num}&per_page=${perPage}`} />
    </div>
  </div> : null;
}

export default NewsListContent;
