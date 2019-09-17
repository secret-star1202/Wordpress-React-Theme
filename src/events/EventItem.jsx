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
  let [name] = location.split(',');
  return name;
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

function EventItem({
  item: {
    summary, start: { dateTime: start }, description, location, end: { dateTime: end }
  }
}) {
  let descUrl = parseUrl(description), descBody = description;

  if (descUrl) descBody = description.replace(descUrl, '');

  return <div className='events-list__event-item'>
    <h3 className="home__section">{summary} | {printDate(new Date(start))}</h3>
    {descUrl ? <a href={descUrl} className='home__more'>MORE INFO{'  '}</a> : null}
    <div className='event_title'>
      {formatTimes(start, end)} | {parseAddress(location)}
    </div>
    <div className='event_title_description'>
      {descBody}
    </div>
  </div>;
}

export default EventItem;
