import React from 'react';
import { Metamorph } from 'react-metamorph';
import EventslistContent from './EventsListContent.jsx';

export default function EventsList() {
  return [
    <Metamorph title="Community Events & Calender - KTUH FM Honolulu | Radio for the People"
      description="KTUH Community Events & Calender" image='https://ktuh.org/img/ktuh-logo.jpg'
    />,
    <h2 key="header-title" className='general__header'>
      Community Events & Calender</h2>,
    <h3 key="header-title" className='general__header'>
      Recent Events</h3>,
    <div className='news-list__wrapper' key='news-content'>
      <EventslistContent/>
    </div>
  ];
}
