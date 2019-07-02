import React from 'react';
import PropTypes from 'prop-types';
import renderSummary from '../utils/summary';
import { default as siteInfo } from '../utils/config';

function EventItem({
  item: {
    _embedded, slug, event_title, event_description, nickname
  }
}) {
  let featuredImage = _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url || undefined;

  return (
    <div className='news-list__post'>
      <div className='news-list__post-image'>
        <span className='purple-tag'>Radioblog</span>
        <a className="news-list__photo-link" href={`${
          siteInfo.siteUrl}/radioblog/${slug}`}>
          <img className='news-list__photo'
            src={featuredImage || 'https://ktuh.org/img/ktuh-logo.png'} />
        </a>
      </div>
      <div className='news-list__info'>
        <a className='news-list__title' href={`${
          siteInfo.siteUrl}/radioblog/${slug}`}><h3>{event_title.rendered}</h3>
        </a>
        <p className='news-list__excerpt'>
          {renderSummary(event_description.rendered, 50)}{'  '}
          <a className='purple-text' href={`${
            siteInfo.siteUrl}/radioblog/${slug}`}>
            <i>Read On</i>
          </a>
        </p>
        <br />
        <p className='news-list__byline'>by {nickname}</p>
      </div>
    </div>
  );
}

EventItem.propTypes = {
  item: PropTypes.object
};

export default EventItem;
