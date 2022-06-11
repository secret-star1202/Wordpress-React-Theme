import React from 'react';
import { default as Calendar } from './Calendar';
import { default as EventItem } from './EventItem';
import { default as useApiRequest } from '../hooks/useApiRequest';
import { default as HeadStuff } from '../reusables/HeadStuff';

export default function () {
  let cleanString = (str) => {
    if (str === undefined)
      return false
    else if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  let events = useApiRequest([], 'g_cal', ({ items }, fxn) => {
    if (items && items.length) {
      items.sort(function ({ start: { dateTime: a } }, { start: { dateTime: b } }) {
        let aTime = +new Date(a), bTime = +new Date(b);
        return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
      });
      let evts = items.filter(({ start: { dateTime } }) => +new Date(dateTime) > +new Date()).slice(0, 28);
      evts.sort((a, b) => {
        a.description = cleanString(a.description);
        b.description = cleanString(b.description);
        return +new Date(a.start.dateTime) - +new Date(b.start.dateTime);
      });
      fxn(evts);
    }
  });

  return [
    <HeadStuff title="Community Events & Calendar" />,
    <div className='news-list__wrapper'>
      <div stlye={{ padding: "10px 0 0 0" }}>
        <h5>
          KTUH has no special knowledge of Covid-19 related cancelations, health hazards, or requirements that venues or organizers
          may impose, such as health affidavit forms, health screenings, face coverings or vaccination requirements. For the latest
          Covid-19 related cancelations and regulations, KTUH recommends you check with the venue or organizer. For the latest health
          information, please visit the
          <a href='https://travel.state.gov/content/travel.html' target='_blank' className='charts__link'> State Department</a> or
          <a href='https://wwwnc.cdc.gov/travel' target='_blank' className='charts__link'> CDC's </a> website.
        </h5>
      </div>
      <div className='events-list__content'>
        <div className="events-list__over">
          {events.map((item) => <EventItem {...{ item }} />)}
        </div>
        <div className='events-list__calendar'>
          <Calendar events={events.map(
            function (
              { summary: title, location, description, htmlLink: link, start:
                { dateTime: start }, end: { dateTime: end }
            }) {
              return {
                title,
                link,
                location,
                description,
                start: new Date(start),
                end: new Date(end)
              };
            }
          )} />
        </div>
      </div>
      </div>
  ];
}
