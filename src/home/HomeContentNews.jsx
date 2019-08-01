import React, { useState, useEffect } from 'react';
import { get as axget } from 'axios';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function HomeContentNews() {
  let [state, setState] = useState({
    posts: []
  });

  useEffect(function () {
    axget(`${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed&per_page=6`).then(
      ({ data }) => {
        setState({ posts: data || [] });
      }
    );
  }, []);

  let { posts } = state;

  return posts && posts.length ? <div className='home__news'>
    <SamePageAnchor href={`${siteInfo.siteUrl}/radioblog`}>
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
