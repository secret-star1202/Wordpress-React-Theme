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

function parseAddress(location) {
  let name = location.split(',');
  return name[0];
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
  return <div className='events-list__event-item'>
    <h3 className="home__section">{event.summary} |</h3> <h4>{momentUtil(event.start.dateTime).format('MMMM Do')}</h4>
    {buildLink(event.description)}
    <div className='event_title'>
      {momentUtil(event.start.dateTime).format('ha')} - {momentUtil(event.end.dateTime).format('ha')} | {parseAddress(event.location)}
    </div>
    <div className='event_title_description'>
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
