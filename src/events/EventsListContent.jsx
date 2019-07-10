import React, { useState, useEffect } from 'react';
import EverAfter from 'react-everafter';
import { get as axget } from 'axios';
import EventItem from './EventItem.jsx';
import { default as siteInfo } from '../utils/config';

function EventsListContent() {
  let [state, setState] = useState({
    events: []
  });

  useEffect(function () {
    axget(
      `${siteInfo.siteUrl}/wp-json/wp/v2/event?_embed`
    ).then((res) => {
      setState({ events: res.data.length > 0 ? res.data : [] });
    });
  }, []);

  let events = { state };

  if (events && events.length) {
    return (
      <div className='news-list__content'>
        <div className='news-list'>
          <EverAfter.Paginator wrapper={EventItem} perPage={4} items={events}
            truncate={true} />
        </div>
      </div>
    );
  }
  return null;
}

export default EventsListContent;
