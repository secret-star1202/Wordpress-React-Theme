import React, { useState, useEffect } from 'react';
import { MonthView } from 'react-cal-viz';
import { get as axget } from 'axios';
import EventItem from './EventItem.jsx';
import { default as siteInfo } from '../utils/config';

function EventsListContent() {
  let [state, setState] = useState({
    events: []
  });

  useEffect(function () {
    axget(`${siteInfo.siteUrl}/wp-json/wp/v2/g_cal`).then(({
      data: { items }
    }) => {
      items.sort(function(a, b) {
        let aTime = +new Date(a.start.dateTime),
          bTime = +new Date(b.start.dateTime);
        return aTime < bTime ? -1 : aTime > bTime ? 1 : 0;
      });
      let events = items.filter(function(evt) {
        return +new Date(evt.start.dateTime) > +new Date();
      }).slice(0, 6);
      setState({ events });
    });
  }, []);

  let { events } = state;

  if (events && events.length) {
    return <div className='events-list__content'>
        <div className="events-list__over">
          {events.map(event => <EventItem item={event} />)}
        </div>
        <div className='events-list__calendar'>
          <MonthView events={events.map(function (event) {
            let retval = Object.assign({}, event);
            retval.title = event.summary;
            retval.location = event.location;
            retval.description = event.description;
            retval.link = event.htmlLink;
            retval.start = new Date(retval.start.dateTime);
            retval.end = new Date(retval.end.dateTime);
            return retval;
          })} />
        </div>
      </div>;
  }
  return null;
}

export default EventsListContent;
