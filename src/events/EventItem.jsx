import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { default as siteInfo } from '../utils/config';
import renderSummary from '../utils/summary';
import { default as momentUtil } from 'moment';

function EventItem({ event: {
  event_name: [event_name],
  location: [location],
  address: [location_address],
  date: [event_date],
  event_link: [event_link],
  event_time: [event_time],
  event_description: [event_description],
  event_image: [event_image],
}, }) {
  let [state, setState] = useState({
    event: undefined
  });

  useEffect(function () {
    axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/events?_embed&slug=${
      match.params.slug.replace(/\/$/, '')}`).then((res) => {
      setState({ event: res.data.length > 0 ? res.data[0] : null });
    });
  });

  let { event } = state;

  if (event) {

    return [ <div className='news-list__post-parent'>
      <hr className="wp-block-separator"/> <Metamorph title={`KTUH Community Events & Calender - KTUH FM Honolulu | Radio for the People`}
    description='KTUH Community Events & Calender' />,
        <h3 className="home__section">{event_date} | {event_time}</h3>
      <a href={event_link} className='home__more'>
        {event_name}{'  '}
      </a>
      <div href={event_link} className='event__title'>
      {event_name}
      </div>
      <div className='home__synopsis'>
        {event_description}
      </div>
      <div className='event_title'>
        {location} |
      </div>
      <div className='home__synopsis'>
        {location_address}
      </div>
      <img className='event__image' src={event_image} alt='event image'/>
    </div>
    ];
  }
  if (event === null) {
    return <Redirect to='/not-found' />;
  }

  if (event === undefined) {
    return null;
  }
}

export default EventItem;
