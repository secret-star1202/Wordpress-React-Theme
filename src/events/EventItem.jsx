import React from 'react';
import { Redirect } from 'react-router-dom';

function EventItem({ item }) {
  <script src="https://apis.google.com/js/api.js"></script>
  function authenticate() {
    return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.events.readonly https://www.googleapis.com/auth/calendar.readonly"})
      .then(function() { console.log("Sign-in successful"); },
        function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
        function(err) { console.error("Error loading GAPI client for API", err); });
  }
  authenticate(loadClient());
  function execute() {
    return gapi.client.calendar.events.get({
      "calendarId": "webmaster@ktuh.org",
      "eventId": "493v6gbcsidhmk9vt8g3hjltjv"
    })
      .then(function(response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
        function(err) { console.error("Execute error", err); });
  }

  let event = execute();

  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });

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
