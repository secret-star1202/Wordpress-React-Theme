import React, { useState, useEffect } from 'react';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { default as siteInfo } from '../utils/config';
import renderSummary from '../utils/summary';
import { default as momentUtil } from 'moment';

function EventPage({ item }) {
  let [state, setState] = useState({
    event: undefined
  });

  useEffect(function () {
    axios.get(`${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed&slug=${
      match.params.slug.replace(/\/$/, '')}`).then((res) => {
      setState({ event: res.data.length > 0 ? res.data[0] : null });
    });
  });

  let { event } = state;

  if (event) {
    let featuredImage = event._embedded && event._embedded['wp:featuredmedia']
      && event._embedded['wp:featuredmedia']['0']
      && event._embedded['wp:featuredmedia']['0'].source_url || undefined;

    return [ <div className={news-list__post-parent}>
      <hr className="wp-block-separator"/> <Metamorph title={`${
      event.title.rendered} - KTUH FM Honolulu | Radio for the People`}
    description={renderSummary(event.content.rendered, 50)} />,
    <h1 key="header-title" className='general__header'>
      {event.event_title.rendered}</h1>,
    <div key="radioblog-back-link" className='show__link'>
      <a href='/radioblog' className='back-to'>← Back to Radioblog</a>
    </div>,
    <div className='news-item' key="name-submitted">
      <p className='news-item__author'>
          <b>Posted by {event.nickname}</b>
        <br />
        {momentUtil(event.date).format("dddd, MMMM Do YYYY at h:mm a")}
      </p>
      <div className='news-item__body'
        dangerouslySetInnerHTML={{ __html: event.content.rendered }} />
    </div></div>];
  }
  if (event === null) {
    return <Redirect to='/not-found' />;
  }

  if (event === undefined) {
    return null;
  }
}

export default EventPage;
