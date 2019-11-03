import React from 'react';
import Paginator from '../reusables/Paginator.jsx';
import NewsItem from './NewsItem.jsx';
import { useApiRequest } from '../hooks';

function NewsListContent() {
  let { numPages } = useApiRequest({
    numPages: undefined
  }, 'num_posts', (data, fxn) => {
    fxn({ numPages: Math.ceil(parseInt(data, 10) / 10) });
  });

  return numPages ? <div className='news-list__content'>
    <div className='news-list'>
      <Paginator wrapper={NewsItem} perPage={10} truncate={true}
        maxPages={numPages}
        apiUrl={num => `posts?_embed&page=${num}`} />
    </div>
  </div> : null;
}

export default NewsListContent;
