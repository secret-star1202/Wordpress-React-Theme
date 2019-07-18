import React from 'react';
import { object } from 'prop-types';

function EventItem({ item: event }) {
  return <div className='news-list__post-parent'>
    <h3 className="home__section">{event.summary} | {event.start.dateTime} - {event.end.dateTime}</h3>
    <a href={event.description} className='home__more'>
      {event.summary}{'  '}
    </a>
    <div className='event_title'>
      {event.location} |
    </div>
  </div>;
}

EventItem.propTypes = {
  item: object
};

export default EventItem;
