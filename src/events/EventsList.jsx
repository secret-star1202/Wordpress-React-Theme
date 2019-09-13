import React from 'react';
import EventsListContent from './EventsListContent.jsx';
import HeadStuff from '../reusables/HeadStuff.jsx';

export default function EventsList() {
  return [<HeadStuff title="Community Events & Calendar" />,
    <div className='news-list__wrapper'>
      <EventsListContent /></div>
  ];
}
