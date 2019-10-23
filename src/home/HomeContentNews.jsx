import React from 'react';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';
import { getFullUrl } from '../utils/url_utils';
import Glyph from '../reusables/Glyph.jsx';
import useApiRequest from '../hooks/useApiRequest';

function HomeContentNews() {
  let state = useApiRequest({
      posts: []
    }, 'posts?_embed&per_page=3', (posts, fxn) => {
      fxn({ posts });
    }), { posts } = state, href = getFullUrl('radioblog');

  return posts.length ? <div className='home__news'>
    <SamePageAnchor {...{ href }}>
      <h3 className='home__section'>RADIOBLOG</h3>
    </SamePageAnchor>
    <SamePageAnchor {...{ href }} className='home__more'>MORE NEWS{'  '}
      <Glyph symbol='arrow-right' />
    </SamePageAnchor>
    <div className='home__news-content'>
      {posts.map(item => (<HomeContentNewsItem item={item} />))}
    </div>
  </div> : null;
}

export default HomeContentNews;
