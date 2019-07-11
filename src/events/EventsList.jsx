import React from 'react';
import { Metamorph } from 'react-metamorph';
import EventsListContent from './EventsListContent.jsx';

export default function EventsList() {
  return [
    <Metamorph title="Community Events & Calendar - KTUH FM Honolulu | Radio for the People"
               description="KTUH Community Events & Calendar"
               image='https://ktuh.org/img/ktuh-logo.jpg'
    />,
    <h2 key="header-title" className='general__header'>
      Community Events & Calendar</h2>,
    <h3 key="header-title" className='home__section'>
      Recent Events</h3>,
    <div className='news-list__wrapper' key='news-content'>
      <EventsListContent/>
    </div>,
    <div className="event__calendar">
      <iframe
        src="https://calendar.google.com/calendar/b/1/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Pacific%2FHonolulu&amp;src=d2VibWFzdGVyQGt0dWgub3Jn&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=a3R1aC5vcmdfZHZldjY2YXBjcG50aTFsY3JkMDkyOWtyYjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=a3R1aC5vcmdfczE3MTA4b29iYzlzbzcxY3VhcDVxdGptY29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%237CB342&amp;color=%238E24AA&amp;color=%230B8043&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
        style="border-width:0" width="600" height="400" frameBorder="0" scrolling="no"></iframe>
    </div>,
  ];
}
