import React from 'react';
import { array } from 'prop-types';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';
import { default as siteInfo } from '../utils/config';

function HomeContentNews({ posts }) {
  return (
    <div className='home__news'>
      <a href={`${siteInfo.siteUrl}/radioblog`}>
        <h3 className='home__section'>RADIOBLOG</h3>
      </a>
      <a href={`${siteInfo.siteUrl}/radioblog`} className='home__more'>
        MORE NEWS{'  '}
        <span className='glyphicon glyphicon-arrow-right'></span>
      </a>
      <div className='home__news-content'>
        {posts.slice(0, 3).map(item => (<HomeContentNewsItem item={item} />))}
      </div>
    </div>
  );
}

HomeContentNews.propTypes = {
  posts: array
};

export default HomeContentNews;
