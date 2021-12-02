import React from 'react';

function parseUrl(description) {
  if (description) {
    let reg = /https?:\/\/[A-Za-z0-9.]+(\/[^\s\t\n"']*)?/;
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
  return `${date.toLocaleTimeString('en-US', { hour12: true, timeStyle: 'short' })}`;
}

function formatTimes(start, end) {
  return `${printTime(new Date(start))} - ${printTime(new Date(end))}`;
}

function printDate(date) {
  return date.toDateString().split(' ').slice(1, 3).join(' ');
}

export default function ({
  item: {
    summary, start: { dateTime: start }, description, location, end: { dateTime: end }
  }
}) {
  let href = parseUrl(description), descBody = description;

  if (href) descBody = description.replace(href, '').replace(href, '');

  return (
    <div className='events-list__event-item'>
      <div className='title__wrapper'>
        <h4 className='event__name'>{printDate(new Date(start))} | {summary}</h4>
        {href ? <a href={href} target='_blank' className='events__more'><span>MORE INFO</span></a> : null}
      </div>
      <div className='event__title'>
        {location && location.length
          ? `${formatTimes(start, end)} | ${parseAddress(location)}`
          : formatTimes(start, end)}
      </div>
      <div className='event_title_description' dangerouslySetInnerHTML={{ __html: descBody }} />
    </div>
  );
}
