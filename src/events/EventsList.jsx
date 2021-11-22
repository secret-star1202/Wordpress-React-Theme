import React from 'react';
import { default as Calendar } from './Calendar';
import { default as EventItem } from './EventItem';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';

export default function () {
  let events = useApiRequest([], 'g_cal', ({ items }, fxn) => {
    if (items && items.length) {
      items.sort(function ({ start: { dateTime: a } }, { start: { dateTime: b } }) {
        let aTime = +new Date(a), bTime = +new Date(b);
        return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
      });
      let evts = items.filter((
        { start: { dateTime } }
      ) => +new Date(dateTime) > +new Date()).slice(0, 24);
      fxn(evts);
    }
  });

  return [<HeadStuff title="Community Events & Calendar" />,
      <div className='news-list__wrapper'>
      <div className='events-list__content'>
      <div className="events-list__over">
        {events.map((item) => <EventItem {...{ item }} />)}
      </div>
      <div className='events-list__calendar'>
        <Calendar events={events.map(
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
