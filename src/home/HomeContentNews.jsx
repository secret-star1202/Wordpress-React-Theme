import React, { useState, useEffect } from 'react';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import getApiRequest from '../utils/get_api_request';
import getFullUrl from '../utils/get_full_url';
import Glyph from '../reusables/Glyph.jsx';

function HomeContentNews() {
  let [state, setState] = useState({
    posts: []
  });

  useEffect(function () {
    getApiRequest('posts?_embed&per_page=6', ({ data }) => {
      setState({ posts: data || [] });
    });
  }, []);

  let { posts } = state, link = getFullUrl('radioblog');

  return posts.length ? <div className='home__news'>
    <SamePageAnchor href={link}>
      <h3 className='home__section'>RADIOBLOG</h3>
    </SamePageAnchor>
    <SamePageAnchor href={link} className='home__more'>MORE NEWS{'  '}
      <Glyph symbol='arrow-right' />
    </SamePageAnchor>
    <div className='home__news-content'>
      {posts.slice(0, 3).map(item => (<HomeContentNewsItem {...{ item }} />))}
    </div>
  </div> : null;
}

export default HomeContentNews;
