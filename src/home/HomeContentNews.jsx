import React from 'react';
import { array } from 'prop-types';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function HomeContentNews({ posts }) {
  return <div className='home__news'>
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
  </div>;
}

HomeContentNews.propTypes = {
  posts: array
};

export default HomeContentNews;
