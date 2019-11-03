import React from 'react';
import { MonthView } from 'react-cal-viz';
import EventItem from './EventItem.jsx';
import { useApiRequest } from '../hooks';
import { HeadStuff } from '../reusables';

export default function EventsList() {
  let state = useApiRequest({ events: [] }, 'g_cal', ({ items }, fxn) => {
      if (items && items.length) {
        items.sort(function ({ start: { dateTime: a } }, { start: { dateTime: b } }) {
          let aTime = +new Date(a), bTime = +new Date(b);
          return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
        });
        let events = items.filter((
          { start: { dateTime } }
        ) => +new Date(dateTime) > +new Date()).slice(0, 6);
        fxn({ events });
      }
    }), { events } = state;

  if (events.length) {
    return [<HeadStuff title="Community Events & Calendar" />,
      <div className='news-list__wrapper'>
      <div className='events-list__content'>
      <div className="events-list__over">
        {events.map(item => <EventItem {...{ item }} />)}
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
    </div></div>];
  }
  return null;
}
