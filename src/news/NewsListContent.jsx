import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import EverAfter from 'react-everafter';
import axios from 'axios';
import NewsItem from './NewsItem.jsx';
import { default as siteInfo } from '../utils/config';

function NewsListContent({ history }) {
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

  function NewsItemWithHistory({ item }) {
    return <NewsItem item={item} history={history} />;
  }

  NewsItemWithHistory.propTypes = {
    item: object
  };

  if (state.posts && state.posts.length) {
    return (
      <div className='news-list__content'>
        <div className='news-list'>
          <EverAfter.Paginator wrapper={NewsItemWithHistory} perPage={4}
            items={state.posts} truncate={true} />
        </div>
      </div>
    );
  }
  return null;
}

export default NewsListContent;

NewsListContent.propTypes = {
  history: object
};
