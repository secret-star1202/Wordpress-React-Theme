import React from 'react';
import { array, object } from 'prop-types';
import HomeContentNewsItem from './HomeContentNewsItem.jsx';
import { default as siteInfo } from '../utils/config';
import SamePageAnchor from '../reusables/SamePageAnchor.jsx';

function HomeContentNews({ posts, history }) {
  return (
    <div className='home__news'>
      <SamePageAnchor history={history} href={`${siteInfo.siteUrl}/radioblog`}>
        <h3 className='home__section'>RADIOBLOG</h3>
      </SamePageAnchor>
      <SamePageAnchor href={`${siteInfo.siteUrl}/radioblog`} history={history}
        className='home__more'>
        MORE NEWS{'  '}
        <span className='glyphicon glyphicon-arrow-right'></span>
      </SamePageAnchor>
      <div className='home__news-content'>
        {posts.slice(0, 3).map(item => (
          <HomeContentNewsItem item={item} history={history} />))}
      </div>
    </div>
  );
}

HomeContentNews.propTypes = {
  posts: array,
  history: object
};

export default HomeContentNews;
