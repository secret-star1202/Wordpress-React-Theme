import React from 'react';
import PropTypes from 'prop-types';
import { default as siteInfo } from '../utils/config';
import renderSummary from '../utils/summary';
import {default as momentUtil} from 'moment';

export default function HomeContentEventItem({ item }) {
  let featuredImage = item._embedded && item._embedded['wp:featuredmedia']
    && item._embedded['wp:featuredmedia']['0']
    && item._embedded['wp:featuredmedia']['0'].source_url || undefined;

  return (
    <div className='home__Event-item'>
      <a href={`${siteInfo.siteUrl}/radioblog/${item.slug}`}>
        <img className='home__Event-img'
          src={featuredImage || `${siteInfo.siteUrl
          }/wp-content/themes/custom-react-theme/dist/images/mstile-310x310.png`
          } />
        <h4 className='home__title'>{item.event_title.rendered}</h4>
      </a>
      <p className='home__synopsis'>
        {renderSummary(item.content.rendered, 15)}
      </p>
      <p className='home__byline'>
        by {item.nickname} | {momentUtil(item.date).format('MMMM Do')}
      </p>
    </div>
  );
}

HomeContentEventItem.propTypes = {
  item: PropTypes.object
};
