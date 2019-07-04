import React, { useState, useEffect } from 'react';
import EverAfter from 'react-everafter';
import axios from 'axios';
import NewsItem from './NewsItem.jsx';
import { default as siteInfo } from '../utils/config';

function NewsListContent() {
  let [state, setState] = useState({
    posts: []
  });

  useEffect(function () {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed`
    ).then((res) => {
      setState({ posts: res.data.length > 0 ? res.data : [] });
    });
  }, []);

  if (state.posts && state.posts.length) {
    return (
      <div className='news-list__content'>
        <div className='news-list'>
          <EverAfter.Paginator wrapper={NewsItem} perPage={4}
            items={state.posts} truncate={true} />
        </div>
      </div>
    );
  }
  return null;
}

export default NewsListContent;
