import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import EverAfter from 'react-everafter';
import { get as axget } from 'axios';
import NewsItem from './NewsItem.jsx';
import { default as siteInfo } from '../utils/config';

function NewsListContent({ history }) {
  let [state, setState] = useState({
    posts: []
  });

  useEffect(function () {
    if (!state.posts.length) {
      axget(`${siteInfo.siteUrl}/wp-json/wp/v2/all_posts`).then(({ data }) => {
        setState({ posts: data.length ? data : [] });
      });
    }
  }, []);

  function NewsItemWithHistory({ item }) {
    return <NewsItem {...{ item, history }} />;
  }

  NewsItemWithHistory.propTypes = {
    item: object
  };

  let { posts } = state;

  return <div className='news-list__content'>
    <div className='news-list'>
      {posts && posts.length ? <EverAfter.Paginator wrapper={NewsItemWithHistory} perPage={4}
        items={posts} truncate={true} /> : <p>No results.</p>}
    </div>
  </div>;
}

export default NewsListContent;

NewsListContent.propTypes = {
  history: object
};
