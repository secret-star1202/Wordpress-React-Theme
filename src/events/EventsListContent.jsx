import React, { useState, useEffect } from 'react';
import EverAfter from 'react-everafter';
import { get as axget } from 'axios';
import { MonthView } from 'react-cal-viz';
import EventItem from './EventItem.jsx';
import { default as siteInfo } from '../utils/config';
import ApiCalendar from 'react-google-calendar-api';

function EventsListContent() {
  if (ApiCalendar.sign)
    ApiCalendar.listUpcomingEvents(10)
      .then(({result}) => {
        console.log(result.items);
      });

  let [state, setState] = useState({
    events: []
  });
  events = result.items;
  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/event?_embed`
    ).then((res) => {
      setState({ events: res.data.length > 0 ? res.data : [] });
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
            retval.title = event.event_name[0];
            retval.location = `${event.location[0]} - ${event.location_address[0]}`;
            retval.description = event.event_description[0];
            retval.link = event.event_link[0];
            retval.start = new Date(`${event.event_date[0]} ${event.event_time[0]}`);
            return retval;
          })} />
        </div>
      </div>
    );
  }
  return null;
}

export default EventsListContent;
