import React from 'react';
import { object } from 'prop-types';
import { default as momentUtil } from 'moment';

function parseUrl(description) {
  if (description) {
    let reg = /https?:\/\/[A-Za-z0-9.]+(\/[^\s\t\n]*)?/;
    let url = description.match(reg);
    if (url) {
      return url[0];
    }
  }
  return undefined;
}

function renderLink(description) {
  if (description) {
    return <a href={parseUrl(description)} className='home__more'>
      MORE INFO{'  '}
    </a>;
  }
  return undefined;
}

function buildLink(description) {
  if (parseUrl(description)) {
    return renderLink(description);
  }
  return null;
}

function EventItem({ item: event }) {
  return <div className='news-list__post-parent'>
    <h3 className="home__section">{event.summary} | {momentUtil(event.start.dateTime).format('MMMM Do')}</h3>
    {buildLink(event.description)}
    <div className='event_title'>
      {momentUtil(event.start.dateTime).format('hh a')} - {momentUtil(event.end.dateTime).format('HA')} | {event.location}
    </div>
    <div className='event_title'>
      {parseUrl(event.description)
        ? event.description.replace(parseUrl(event.description), '')
        : event.description}
    </div>
  </div>;
}

EventItem.propTypes = {
  item: object
};

export default EventItem;
