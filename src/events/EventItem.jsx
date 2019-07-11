import React from 'react';
import { Redirect } from 'react-router-dom';

function EventItem({ item }) {
  <script src="https://apis.google.com/js/api.js"></script>;
  let CLIENT_ID = '672776659571-c168uuk5t9m0vc6o1rg7khlalrlsdq4r.apps.googleusercontent.com';
  let SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

  function checkAuth() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, handleAuthResult);
    gapi.client.setApiKey('AIzaSyCstf2CR3SB_JxJLO3VWVsFyqyDaxzzeQI');
    handleAuthResult({ error: false });
  }

  function listUpcomingEvents() {
    var request = gapi.client.calendar.events.list({
      'calendarId': 'ktuh.org_dvev66apcpnti1lcrd0929krb0@group.calendar.google.com',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    });

    request.execute(function (resp) {
      var events = resp.items;
      appendPre('Upcoming events:');

      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          var event = events[i];
          var when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          appendPre(event.summary + ' (' + when + ')');
        }
      } else {
        appendPre('No upcoming events found.');
      }

    });
  }

  return <div className='news-list__post-parent'>
    <h3 className="home__section">{event.summary} | {event.start.dateTime} - {event.end.dateTime}</h3>
    <a href={event.description} className='home__more'>
      {event.summary}{'  '}
    </a>
    <div className='event_title'>
      {event.location} |
    </div>
  </div>;

  if (item) {
    let {
      event_name: [event_name],
      location: [location],
      location_address: [location_address],
      date: [event_date],
      event_link: [event_link],
      event_time: [event_time],
      event_description: [event_description],
      event_image: [event_image]
    } = item;
    return <div className='news-list__post-parent'>
      <hr className="wp-block-separator"/>
      <h3 className="home__section">{event_date} | {event_time}</h3>
      <a href={event_link} className='home__more'>{event_name}{'  '}</a>
      <div className='home__synopsis'>{event_description}</div>
      <div className='event_title'>{location} |</div>
      <div className='home__synopsis'>{location_address}</div>
      <img className='event__image' src={event_image} alt='event image'/>
    </div>;
  }
  if (item === null) {
    return <Redirect to='/not-found'/>;
  }

  if (item === undefined) {
    return null;
  }
}

export default EventItem;
