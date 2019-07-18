import React, { useState, useEffect } from 'react';
import EverAfter from 'react-everafter';
import { MonthView } from 'react-cal-viz';
import ApiCalendar from 'react-google-calendar-api';
import EventItem from './EventItem.jsx';
import { default as siteInfo } from '../utils/config';

function EventsListContent() {
  let [state, setState] = useState({
    events: []
  });

  useEffect(function () {
    ApiCalendar.handleAuthClick();
    ApiCalendar.onLoad(function () {
      if (ApiCalendar.sign) {
        ApiCalendar.listUpcomingEvents(10, siteInfo.calendarId)
          .then(({ result }) => {
            setState({ events: result.items });
          });
      }
    });
  }, []);

  let { events } = state;

  if (events && events.length) {
    return (
      <div className='events-list__content'>
        <div className="events-list__over">
          <EverAfter.Paginator wrapper={EventItem} perPage={10} items={events}
            truncate={true} />
        </div>
        <div className='events-list__calendar'>
          <MonthView events={events.map(function (event) {
            let retval = Object.assign(event, {});
            retval.title = event.summary;
            retval.location = event.location;
            retval.description = event.description;
            retval.link = event.htmlLink;
            retval.start = new Date(event.start.dateTime);
            return retval;
          })} />
        </div>
      </div>
    );
  }
  return null;
}

export default EventsListContent;
