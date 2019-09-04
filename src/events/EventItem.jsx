import React from 'react';

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

function printTime(date) {
  return `${date.getHours()}:${date.getMinutes()}`;
}

function formatTimes(start, end) {
  return `${printTime(new Date(start))} - ${printTime(new Date(end))}`;
}

function printDate(date) {
  return date.toDateString().split(' ').slice(1, 3).join(' ');
}

function EventItem({ item: event }) {
  return <div className='events-list__event-item'>
    <h3 className="home__section">{event.summary} | {printDate(new Date(event.start.dateTime))}</h3>
    {buildLink(event.description)}
    <div className='event_title'>
      {formatTimes(event.start.dateTime, event.end.dateTime)
      } | {parseAddress(event.location)}
    </div>
    <div className='event_title_description'>
      {parseUrl(event.description)
        ? event.description.replace(parseUrl(event.description), '')
        : event.description}
    </div>
  </div>;
}

export default EventItem;
