import React, { useState, useEffect } from 'react';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getApiRequest from '../utils/get_api_request';

function HomeContentNews() {
  let [state, setState] = useState({
    posts: []
  });

  useEffect(function () {
    getApiRequest('posts?_embed&per_page=6', ({ data }) => {
      setState({ posts: data || [] });
    });
  }, []);

  let { posts } = state, { siteUrl } = siteInfo;

  return posts.length ? <div className='home__news'>
    <SamePageAnchor href={`${siteUrl}/radioblog`}>
      <h3 className='home__section'>RADIOBLOG</h3>
    </SamePageAnchor>
    <SamePageAnchor href={`${siteInfo.siteUrl}/radioblog`}
      className='home__more'>MORE NEWS{'  '}
      <span className='glyphicon glyphicon-arrow-right'></span>
    </SamePageAnchor>
    <div className='home__news-content'>
      {posts.slice(0, 3).map(item => (<HomeContentNewsItem {...{ item }} />))}
    </div>
  </div> : null;
}

export default HomeContentNews;
