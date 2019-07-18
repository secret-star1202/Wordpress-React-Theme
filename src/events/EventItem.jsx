import React from 'react';
import { object } from 'prop-types';


function parseUrl(description) {
  let reg = '/(https?:\/\/)?[a-z0-9.]+(\/[^\s\t]*)?/';
  let url = description.match(reg);
  if (url) {
    return url[0];
  }
  return undefined;
}


function EventItem({ item: event }) {
  return <div className='news-list__post-parent'>
    <h3 className="home__section">{event.summary} | {event.start.dateTime} - {event.end.dateTime}</h3>
    <a href={parseUrl(event.description) || '#'} className='home__more'>
      {event.summary}{'  '}
    </a>
    <div className='event_title'>
      {event.location} | {url}
    </div>
  </div>;
}

EventItem.propTypes = {
  item: object
};

export default EventItem;
