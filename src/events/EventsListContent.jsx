import React, { useState, useEffect } from 'react';
import { MonthView } from 'react-cal-viz';
import EventItem from './EventItem.jsx';
import getApiRequest from '../utils/get_api_request';

function EventsListContent() {
  let [state, setState] = useState({
    events: []
  });

  useEffect(function () {
    getApiRequest('g_cal', ({
      data: { items }
    }) => {
      if (items && items.length) {
        items.sort(function (a, b) {
          let aTime = +new Date(a.start.dateTime),
            bTime = +new Date(b.start.dateTime);
          return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
        });
        let events = items.filter((
          { start: { dateTime } }
        ) => +new Date(dateTime) > +new Date()).slice(0, 6);
        setState({ events });
      }
    });
  }, []);

  let { events } = state;

  if (events.length) {
    return <div className='news-list__wrapper'>
      <div className='events-list__content'>
      <div className="events-list__over">
        {events.map(event => <EventItem item={event} />)}
      </div>
      <div className='events-list__calendar'>
        <MonthView events={events.map(
          function ({
            summary: title, location, description, htmlLink: link, start:
            { dateTime: start }, end: { dateTime: end }
          }) {
            return {
              title,
              location,
              description,
              link,
              start: new Date(start),
              end: new Date(end)
            };
          }
        )} />
      </div>
    </div></div>;
  }
  return null;
}

export default EventsListContent;
