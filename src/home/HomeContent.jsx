import React, { useState, useEffect } from 'react';
import { all as axall, get as axget, spread as axspr } from 'axios';
import HomeContentNews from './HomeContentNews.jsx';
import HomeContentReviews from './HomeContentReviews.jsx';
import HomeContentPodcasts from './HomeContentPodcasts.jsx';
import HomeSidebar from './HomeSidebar.jsx';
import { default as siteInfo } from '../utils/config';

export default function HomeContent() {
  let [state, setState] = useState({
    posts: [],
    reviews: [],
    podcasts: [],
    events: [],
  });

  useEffect(function () {
    axall([
      axget(`${siteInfo.siteUrl}/wp-json/wp/v2/posts?_embed&per_page=6`),
      axget(`${siteInfo.siteUrl}/wp-json/wp/v2/review?_embed&per_page=6`),
      axget(`${siteInfo.siteUrl}/wp-json/wp/v2/podcast?_embed&per_page=6`),
      axget(`${siteInfo.siteUrl}/wp-json/wp/v2/event?_embed&per_page=6`)
    ]).then(axspr(({ data: posts }, { data: reviews }, { data: podcasts },
      { data: events }) => {
      setState({
        posts, reviews, podcasts, events
      });
    }));
  }, []);

  let { posts, reviews, podcasts } = state;

  return <div className='content'><div className='home__main'>
      <HomeContentNews {...{ posts }} />
      <HomeContentReviews {...{ reviews }} />
      <HomeContentPodcasts {...{ podcasts }} />
    </div>
    <HomeSidebar />
  </div>;
}
