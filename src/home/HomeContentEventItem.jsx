import React from 'react';
import { object } from 'prop-types';
import { default as momentUtil } from 'moment';
import { default as siteInfo } from '../utils/config';
import renderSummary from '../utils/summary';

export default function HomeContentEventItem({
  item: {
    _embedded, slug, event_title, content, nickname, date
  }
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url || undefined;

  return <div className='home__Event-item'>
    <a href={`${siteInfo.siteUrl}/radioblog/${slug}`}>
      <img className='home__Event-img' src={featuredImage || `${siteInfo.siteUrl
      }/wp-content/themes/custom-react-theme/dist/images/mstile-310x310.png`
        } />
      <h4 className='home__title'>{event_title.rendered}</h4>
    </a>
    <p className='home__synopsis'>{renderSummary(content.rendered, 15)}</p>
    <p className='home__byline'>by {nickname} | {momentUtil(date).format('MMMM Do')}
    </p>
  </div>;
}

HomeContentEventItem.propTypes = {
  item: object
};
