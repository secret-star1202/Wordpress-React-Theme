import React from 'react';
import { Redirect } from 'react-router-dom';

function EventItem({ item }) {
  if (item) {
    let {
      event_name: [event_name],
      location: [location],
      location_address: [location_address],
      date: [event_date],
      event_link: [event_link],
      event_time: [event_time],
      event_description: [event_description],
      event_image: [event_image],
    } = item;
    return <div className='news-list__post-parent'>
        <hr className="wp-block-separator" />
        <h3 className="home__section">{event_date} | {event_time}</h3>
        <a href={event_link} className='home__more'>
          {event_name}{'  '}
        </a>
        <div className='home__synopsis'>
          {event_description}
        </div>
        <div className='event_title'>
          {location} |
        </div>
        <div className='home__synopsis'>
          {location_address}
        </div>
        <img className='event__image' src={event_image} alt='event image' />
      </div>;
  }
  if (item === null) {
    return <Redirect to='/not-found' />;
  }

  if (item === undefined) {
    return null;
  }
}

export default EventItem;
